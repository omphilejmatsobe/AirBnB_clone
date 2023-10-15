#!/usr/bin/python3
"""
class user that inherites from BaseModel
"""

from models.base_model import BaseModel


class User(BaseModel):
    """
    class user
    """

    email = ""
    password = ""
    first_name = ""
    last_name = ""
