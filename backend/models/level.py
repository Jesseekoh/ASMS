#!/usr/bin/python3
"""Result class definition"""
from models import storage_type
from models.base import Base, BaseModel
from sqlalchemy import Column, Integer
from sqlalchemy.orm import relationship

class Level(BaseModel, Base):
    """Definition of the Level Class"""

    if storage_type == 'db':
        __tablename__ = 'levels'

        number = Column(Integer, nullable=False)
        result = relationship('Result', backref='levels', viewonly=False)
        student = relationship('Student', backref='levels', viewonly=False)
    else:
        level = ""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
