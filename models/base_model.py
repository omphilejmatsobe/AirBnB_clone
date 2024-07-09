#!/usr/bin/python3

"""
This is the class that defines all common attributes and methods
"""

import datetime

class Base:

    def __int__ (self, id, created_at, updated_at):
        self.id = id
        self.created_at = datetime
        self.updated_at = datetime

    def save(self):
        self.updated_at = datetime

if __name__ == "__main__":
