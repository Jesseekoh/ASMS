#!/usr/bin/python3
"""Semister class definition"""
from models import storage_type
from models.base import Base, BaseModel
from sqlalchemy import Column, Integer
from sqlalchemy.orm import relationship

class Semister(BaseModel, Base):
    """Definition of the Semister Class"""

    if storage_type == 'db':
        __tablename__ = 'semisters'

        number = Column(Integer, nullable=False)
        results = relationship('Result', backref='semisters', cascade='all, delete, delete-orphan')
    else:
        number = ""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
