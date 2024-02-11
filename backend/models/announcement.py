#!/usr/bin/python3
"""Announcement class definition module"""
from models import storage_type
from models.base import BaseModel, Base
from sqlalchemy import String, Column, ForeignKey

class Announcement(BaseModel, Base):

    if storage_type == 'db':
        __tablename__ = 'announcements'

        source = Column(String(100), nullable=False)
        info = Column(String(1027), nullable=False)
    else:
        source = ""
        info = ""
        user_id = ""

    def __init__(self, *args, **kwargs):
        """Initialize Announcement Class"""
        super().__init__(*args, **kwargs)
