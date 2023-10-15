#!/usr/bin/python3
"""
Module: file_storage
"""

import json
import os
from models.base_model import BaseModel
from models.user import User

class FileStorage():
    """
    serializes instances to a JSON file and
    deserializes JSON file to instances
    """

    __file_path = "file.json"
    __objects = {}

    def all(self):
        """
        returns dictionary __objects
        """
        return FileStorage.__objects

    def new(self, obj):
        """
        sets in __objects the obj with key <obj class name>.id
        """
        key = "{}.{}".format(type(obj).__name__, obj.id)
        FileStorage.__objects[key] = obj

    def save(self):
        """
        serializes __objects to JSON
        """
        with open(FileStorage.__file_path, 'w') as f:
            json.dump(
                {k: v.to_dict() for k, v in FileStorage.__objects.items()}, f)


    def reload(self):
        """
        deserializes a JSON file to __objects
        """
        try:
            with open(FileStorage.__file_path, mode='r') as __file:
                __dict = json.load(__file)

            for key, value in __dict.items():
                __class = value.get('__class__')
                obj = eval(__class + '(**value)')
                FileStorage.__objects[key] = obj

        except FileNotFoundError:
            pass
