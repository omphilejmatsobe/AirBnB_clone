#!/usr/bin/python3
"""
this is the console module for the console
"""


import cmd
import models
import json


class HBNBCommand(cmd.cmd):
    """
    this is the class for the command intepreter
    """

    def emptyline(self):
        """
        handles empty line
        """
        pass

    def do_help(self, arg):
        """
        handles the help command
        """

        return True

    def do_quit(self, line):
        """
        habdles the quit command
        """

        return True

    def do_EOF(self, line):
        """
        checks for end of file
        """

        return True


if __name__ == '__main__':
    HBNBCommand().cmdloop()
