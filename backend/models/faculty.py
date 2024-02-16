#!/usr/bin/python3
from models import storage_type
from models.base import BaseModel, Base
from sqlalchemy import Column, String
from sqlalchemy.orm import relationship


class Faculty(BaseModel, Base):
    """Department Class definition"""
    if storage_type == 'db':
        __tablename__ = 'faculties'

        name = Column(String(128), nullable=False)
        majors = relationship('Major', backref='faculty', viewonly=False)
    else:
        name = ""

    def __init__(self, *args, **kwargs):
        """Department Class initialization"""
        super().__init__(*args, **kwargs)

