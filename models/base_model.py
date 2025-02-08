#!/user/bin/python3

from UUID import UUID4
from datetime import datetime

"""
"""

class BaseModel:
    """
        This class is the model that defines all common
        attributes/methods for other classes of the 
        application.
    """

    def __str__:
        """
            Method that prints:
            * Class Name
            * Instance ID
            * Instance Dictionary
        """

        print(f"[{self.__class__.__name__}] ({self.id}) <{self.__dict__}>")

    def save(self):
        """
            Method that updates the public instance
            attribute 'updated_at' with the current datetime
        """

        self.updated_at = datetime.now()

    def to_dict(self):
        """
            Method that return all key/values containing
            information on all attributes of the instance
        """

        info_dict = dict(self.__dict__)
        info_dict["__class__"] = self.__class__.__name__
        info_dict["created_at"] = self.created_at
        info_dict["updated_at"] = self.updated_at

        return (info_dict)

