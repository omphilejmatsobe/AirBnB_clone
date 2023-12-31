#!/usr/bin/python3
"""
defines all common attributes/methods for other classes
"""

import uuid
from datetime import datetime
import models


class BaseModel():
    """class Base for the all the model"""

    def __init__(self, *args, **kwargs):
        """class constructor init"""

        if kwargs:
            kwargs['created_at'] = datetime.strptime(kwargs['created_at'],
                                                     '%Y-%m-%dT%H:%M:%S.%f')
            kwargs['updated_at'] = datetime.strptime(kwargs['updated_at'],
                                                     '%Y-%m-%dT%H:%M:%S.%f')

            for key, value in kwargs.items():
                if key != '__class__':
                    setattr(self, key, value)
        else:
            self.id = str(uuid.uuid4())
            self.created_at = datetime.now()
            self.updated_at = datetime.now()
            models.storage.new(self)

    def __str__(self):
        """string representation of BaseModel instance"""

        return "[{}] ({}) {}".format(self.__class__.__name__, self.id,
                                     self.__dict__)

    def save(self):
        """updates 'updated_at' instance with current datetime"""

        self.updated_at = datetime.now()
        models.storage.save()

    def to_dict(self):
        """dictionary representation of instance"""

        updatedDict = dict(self.__dict__)
        updatedDict['created_at'] = self.__dict__['created_at'].isoformat()
        updatedDict['updated_at'] = self.__dict__['updated_at'].isoformat()
        updatedDict['__class__'] = self.__class__.__name__
        return (updatedDict)
