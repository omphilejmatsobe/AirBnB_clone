#!/usr/bin/python3

import uuid;
from datetime import datetime;
import models;

class BaseModel:
    """
    This class defines all methods for other classes of
    the program
    """

    __counter = 0;

    def __init__(self):
        """
        This method is a constructor which is used to initialize
        all variables of the class instance
        """
        self.id  = str(uuid.uuid4());
        self.created_at = datetime.now();
        self.updated_at = datetime.now();
        type(self).__counter += 1;

    def __str__(self):
        return f"[{type(self).__name__}] [{self.id}] [{self.__dict__}]";

    def __del__(self):
        BaseModel.__counter -= 1;

    @classmethod
    def save(self):
        """
        This method updates the "update_at" variable
        with the current datetime
        """
        self.updated_at = datetime.now();

    @classmethod
    def to_dict(self):
        return self.__dict__;

    @staticmethod
    def ModelInstance(self):
        return BaseModel.__counter;
