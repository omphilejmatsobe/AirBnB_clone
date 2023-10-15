#!/usr/bin/python3
"""
this is the console module for the console
"""


import cmd
import models
import json
from models import storage

from models.base_model import BaseModel

all_classes = {'BaseModel': BaseModel}

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

        msg = ["** class name missing **",
               "** class doesn't exist **",
               "** instance id missing **",
               "** no instance found **",
               "** attribute name missing **",
               "** value missing **"]

        if not line:
            print(msg[0])
            return 1

        args = line.split()

        if num_of_args >= 1 and args[0] not in classes:
            print(msg[1])
            return 1

        elif num_of_args == 1:
            return 0

        if num_of_args >= 2 and len(args) < 2:
            print(msg[2])
            return 1

        store = storage.all()

        for i in range(len(args)):
            if args[i][0] == '"':
                args[i] = args[i].replace('"', "")
        key = args[0] + '.' + args[1]

        if num_of_args >= 2 and key not in store:
            print(msg[3])
            return 1

        elif num_of_args == 2:
            return 0

        if num_of_args >= 4 and len(args) < 3:
            print(msg[4])
            return 1

        if num_of_args >= 4 and len(args) < 4:
            print(msg[5])
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


if __name__ == '__main__':
    HBNBCommand().cmdloop()
