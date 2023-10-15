#!/usr/bin/python3
"""class that inherites from BaseModel"""

from models.base_model import BaseModel


class Amenity(BaseModel):
    """class amenity"""

    name = ""

    def __init__(self, *args, **kwargs):
        """initializes Amenity"""
        super().__init__(*args, **kwargs)
