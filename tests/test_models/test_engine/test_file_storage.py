#!/usr/bin/python3
"""
this is a test module for the file_storage
"""

import os
import models
import unittest
from models.base_model import BaseModel
from models.engine.file_storage import FileStorage
from models.user import User
from models.state import State
from models.place import Place
from models.city import City
from models.amenity import Amenity
from models.review import Review


class TestFileStorage_instantiation(unittest.TestCase):
    """Unittests for testing instantiation of the FileStorage class."""

    def test_FileStorage_instantiation_no_args(self):
        self.assertEqual(type(FileStorage()), FileStorage)

    def test_FileStorage_instantiation_with_arg(self):
        with self.assertRaises(TypeError):
            FileStorage(None)

    def test_FileStorage_file_path_is_private_str(self):
        self.assertEqual(str, type(FileStorage._FileStorage__file_path))

    def testFileStorage_objects_is_private_dict(self):
        self.assertEqual(dict, type(FileStorage._FileStorage__objects))

    def test_storage_initializes(self):
        self.assertEqual(type(models.storage), FileStorage)


class TestFileStorage_methods(unittest.TestCase):
    """Unittests for testing methods of the FileStorage class."""

    def setUp(self):
        pass

    def tearDown(self) -> None:
        """Resets FileStorage data."""
        FileStorage._FileStorage__objects = {}
        if os.path.exists(FileStorage._FileStorage__file_path):
            os.remove(FileStorage._FileStorage__file_path)

    def test_new(self):
        models.storage.new(BaseModel())
        models.storage.new(User())
        models.storage.new(State())
        models.storage.new(Place())
        models.storage.new(City())
        models.storage.new(Amenity())
        models.storage.new(Review())

        self.assertIn("BaseModel." + BaseModel().id, models.storage.all().keys())
        self.assertIn(BaseModel(), models.storage.all().values())
        self.assertIn("User." + User().id, models.storage.all().keys())
        self.assertIn(User(), models.storage.all().values())
        self.assertIn("State." + State().id, models.storage.all().keys())
        self.assertIn(State(), models.storage.all().values())
        self.assertIn("Place." + Place().id, models.storage.all().keys())
        self.assertIn(Place(), models.storage.all().values())
        self.assertIn("City." + City().id, models.storage.all().keys())
        self.assertIn(City(), models.storage.all().values())
        self.assertIn("Amenity." + Amenity().id, models.storage.all().keys())
        self.assertIn(Amenity(), models.storage.all().values())
        self.assertIn("Review." + Review().id, models.storage.all().keys())
        self.assertIn(Review(), models.storage.all().values())

    def test_reload(self):
        models.storage.new(BaseModel())
        models.storage.new(User())
        models.storage.new(State())
        models.storage.new(Place())
        models.storage.new(City())
        models.storage.new(Amenity())
        models.storage.new(Review())
        models.storage.save()
        models.storage.reload()
        objs = FileStorage._FileStorage__objects
        self.assertIn("BaseModel." + BaseModel().id, objs)
        self.assertIn("User." + User().id, objs)
        self.assertIn("State." + State().id, objs)
        self.assertIn("Place." + Place().id, objs)
        self.assertIn("City." + City().id, objs)
        self.assertIn("Amenity." + Amenity().id, objs)
        self.assertIn("Review." + Review().id, objs)

if __name__ == "__main__":
    unittest.main()
