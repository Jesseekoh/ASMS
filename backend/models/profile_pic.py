#!/usr/bin/python3
"""Announcement class definition module"""
from models import storage_type
from models.base import BaseModel, Base
from sqlalchemy import String, Column, ForeignKey, Text

class Profile_picture(BaseModel, Base):

    if storage_type == 'db':
        __tablename__ = 'profile_pictures'

        student_id = Column(String(60), ForeignKey('students.id'), nullable=False)
        img = Column(String(1025), nullable=False)
        name = Column(String(50), nullable=False)
        mimetype = Column(String(30), nullable=False)
    else:
        student_id = ""
        img = ""
        name = ""
        mimetype = ""

    def __init__(self, *args, **kwargs):
        """Initialize Announcement Class"""
        super().__init__(*args, **kwargs)
