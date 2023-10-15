#!/usr/bin/python3
"""
this is the console module for the console
"""


import cmd
import models
import json
import re
from models import storage
from models.base_model import BaseModel
from models.user import User
from models.state import State
from models.city import City
from models.amenity import Amenity
from models.place import Place
from models.review import Review

all_classes = {'BaseModel': BaseModel, 'User': User,
               'State': State, 'City': City, 'Amenity': Amenity,
               'Place': Place, 'Review': Review}


class HBNBCommand(cmd.Cmd):
    """
    this is the class for the command intepreter
    """

    prompt = '(hbnb)'

    def error_message(self, line, num_of_args):
        """
        Displays error messages to user
        """

        classes = ["BaseModel", "User", "State", "City",
                   "Amenity", "Place", "Review"]

        message = ["** class name missing **",
               "** class doesn't exist **",
               "** instance id missing **",
               "** no instance found **",
               "** attribute name missing **",
               "** value missing **"]

        if not line:
            print(message[0])
            return 1

        args = line.split()

        if num_of_args >= 1 and args[0] not in classes:
            print(message[1])
            return 1

        elif num_of_args == 1:
            return 0

        if num_of_args >= 2 and len(args) < 2:
            print(message[2])
            return 1

        store = storage.all()

        for i in range(len(args)):
            if args[i][0] == '"':
                args[i] = args[i].replace('"', "")
        key = args[0] + '.' + args[1]

        if num_of_args >= 2 and key not in store:
            print(message[3])
            return 1

        elif num_of_args == 2:
            return 0

        if num_of_args >= 4 and len(args) < 3:
            print(message[4])
            return 1

        if num_of_args >= 4 and len(args) < 4:
            print(message[5])
            return 1

        return 0

    def emptyline(self):
        """
        handles empty line
        """
        pass

    def do_help(self, line):
        """
        handles the help command
        """

        _help = super().do_help(line)
        return _help

    def do_quit(self, line):
        """
        handles the quit command
        """

        return True

    def do_EOF(self, line):
        """
        checks for end of file
        """

        return True

    def do_create(self, line):
        """
        Creates instances and print the nre instance ID
        """

        args = line.split()

        if (self.error_message(line, 1) == 1):
            return

        new_obj = all_classes[args[0]]()
        new_obj.save()
        print(new_obj.id)

    def do_show(self, line):
        """
        prints the string representation of an instance
        """

        args = line.split()

        if (self.error_message(line, 2) == 1):
            return

        store = storage.all()

        if args[1][0] == '"':
            args[1] = args[1].replace('"', '"')
        i = args[0] + '.' + args[1]
        print(store[i])

    def do_destroy(self, line):
        """
        Deletes instance based on the class name
        """

        args = line.split()

        if (self.error_message(line, 2) == 1):
            return

        store = storage.all()

        if args[1][0] == '"':
            args[1] = args[1].replace('"', '"')

        i = args[0] + '.' + args[1]
        del store[i]
        storage.save()

    def do_all(self, line):
        """
        prints all instances
        """

        args = line.split()
        _objs = storage.all()

        if len(args) < 1:
            print(["{}".format(str(v)) for _, v in _objs.items()])
            return

        if args[0] not in all_classes.keys():
            print("** class doesn't exist **")
            return

        else:
            print(["{}".format(str(v))
                  for _, v in _objs.items() if type(v).__name__ == args[0]])
            return

    def do_update(self, line):
        """
        updates instances based oon class
        """

        if (self.error_message(line, 4) == 1):
            return

        args = line.split()
        store = storage.all()
        for i in range(len(args[1:]) + 1):
            if args[i][0] == '"':
                args[i] = args[i].replace('"', "")
        x = args[0] + '.' + args[1]
        attr_k = args[2]
        attr_v = args[3]

        try:
            if attr_v.isdigit():
                attr_v = int(attr_v)
            elif float(attr_v):
                attr_v = float(attr_v)
        except ValueError:
            pass

        class_attr = type(store[x]).__dict__

        if attr_k in class_attr.keys():
            try:
                attr_v = type(class_attr[attr_k])(attr_v)
            except Exception:
                print("Entered wrong value type")
                return

        setattr(store[x], attr_k, attr_v)
        storage.save()

    def do_count(self, class_n):
        """
         counts instances of a class
        """
        count = 0
        for instance_object in storage.all().values():
            if instance_object.__class__.__name__ == class_n:
                count += 1
        print(count)

    def default(self, line):
        """
            handles the following commands:
            <class name>.all()
            <class name>.count()
            <class name>.show(<id>)
            <class name>.destroy(<id>)
            <class name>.update(<id>, <attribute name>, <attribute value>)
            <class name>.update(<id>, <dictionary representation)
        """

        classes = ["BaseModel", "User", "State", "City",
                   "Amenity", "Place", "Review"]


        commands = {"all": self.do_all,
                    "count": self.do_count,
                    "show": self.do_show,
                    "destroy": self.do_destroy,
                    "update": self.do_update}

        args = re.match(r"^(\w+)\.(\w+)\((.*)\)", line)
        if args:
            args = args.groups()
        if not args or len(args) < 2 or args[0] not in classes \
            or args[1] not in commands.keys():
            super().default(line)
            return

        if args[1] in ["all", "count"]:
            commands[args[1]](args[0])
        elif args[1] in ["show", "destroy"]:
            commands[args[1]](args[0] + ' ' + args[2])
        elif args[1] == "update":
            params = re.match(r"\"(.+?)\", (.+)", args[2])
            if params.groups()[1][0] == '{':
                _dict = eval(params.groups()[1])
                for k, v in _dict.items():
                    commands[args[1]](args[0] + " " + params.groups()[0] +
                                      " " + k + " " + str(v))
            else:
                i = params.groups()[1].split(", ")
                commands[args[1]](args[0] + " " + params.groups()[0] + " " +
                                  i[0] + " " + i[1])


if __name__ == '__main__':
    HBNBCommand().cmdloop()
