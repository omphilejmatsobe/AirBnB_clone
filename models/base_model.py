#!/usr/bin/python3

"""
This is the class that defines all common attributes and methods
"""

import UUID
import datetime

class Base:

    def __int__ (self):
        """
        Method to initialize instance attributes
        """
        self.id = str(uuid.uuid4())
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()

    def save(self):
        """
        Method to update instance attributes
        """
        self.updated_at = datetime.utcnow()
