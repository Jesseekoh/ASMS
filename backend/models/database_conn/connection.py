#!/usr/bin/python3
import models
from models.announcement import Announcement
from models.base import Base
from models.cources import Course
from models.major import Major
from models.fees import Fees
from models.student import Student
from models.state import State
from models.result import Result
from models.faculty import Faculty
from models.level import Level
from models.semister import Semister
from models.profile_pic import Profile_picture
from os import getenv
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

classes = {"Student": Student, "Major": Major, "Faculty": Faculty, "Fees": Fees,
        "Course": Course, "Announcement": Announcement, "Profile_picture": Profile_picture,
        "Result": Result, "State": State, "Level": Level, "Semister": Semister}

class DBStorage:
    """interaacts with the MySQL database"""
    __engine = None
    __session = None

    def __init__(self):
        """Instantiate a DBStorage object"""
        ASMS_MYSQL_USER = getenv('ASMS_MYSQL_USER')
        ASMS_MYSQL_PWD = getenv('ASMS_MYSQL_PWD')
        ASMS_MYSQL_HOST = getenv('ASMS_MYSQL_HOST')
        ASMS_MYSQL_DB = getenv('ASMS_MYSQL_DB')
        ASMS_ENV = getenv('ASMS_ENV')
        self.__engine = create_engine('mysql+mysqldb://{}:{}@{}/{}'.
                                      format(ASMS_MYSQL_USER,
                                             ASMS_MYSQL_PWD,
                                             ASMS_MYSQL_HOST,
                                             ASMS_MYSQL_DB))
        if ASMS_ENV == "test":
            Base.metadata.drop_all(self.__engine)

    def all(self, cls=None):
        """query on the current database session"""
        new_dict = {}
        for clss in classes:
            if cls is None or cls is classes[clss] or cls is clss:
                objs = self.__session.query(classes[clss]).all()
                for obj in objs:
                    key = obj.__class__.__name__ + '.' + obj.id
                    new_dict[key] = obj
        return (new_dict)

    def new(self, obj):
        """add the object to the current database session"""
        self.__session.add(obj)

    def save(self):
        """commit all changes of the current database session"""
        self.__session.commit()

    def delete(self, obj=None):
        """delete from the current database session obj if not None"""
        if obj is not None:
            self.__session.delete(obj)

    def reload(self):
        """reloads data from the database"""
        Base.metadata.create_all(self.__engine)
        sess_factory = sessionmaker(bind=self.__engine, expire_on_commit=False)
        Session = scoped_session(sess_factory)
        self.__session = Session

    def close(self):
        """call remove() method on the private session attribute"""
        self.__session.remove()

    def get(self, cls, id):
        """
        Returns the object based on the class name and its ID, or
        None if not found
        """
        if not cls in classes.values():
            return None

        all_cls = self.all(cls)
        for value in all_cls.values():
            if (value.id == id):
                return value

        return None

    def get_student(self, cls, email):
        """
        Returns the object based on the class name and its email, or
        None if not found
        """

        if not cls in classes.values():
            return None

        all_cls = self.all(cls)
        for value in all_cls.values():
            if (value.email == email):
                return value

        return None

    def count(self, cls=None):
        """
        count the number of objects in storage
        """
        all_class = classes.values()

        if not cls:
            count = 0
            for clas in all_class:
                count += len(models.storage.all(clas).values())
        else:
            count = len(models.storage.all(cls).values())

        return count
