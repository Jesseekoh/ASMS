#!/usr/bin/python3
from models import storage_type
from models.base import BaseModel, Base
from sqlalchemy import String, Column, ForeignKey
from sqlalchemy.orm import relationship

class State(BaseModel, Base):
    """Class definition for State"""

    if storage_type == 'db':
        __tablename__ = 'states'

        name = Column(String(128), nullable=False)
        students = relationship('Student', backref='state', viewonly=False)
    else:
        name = ""
        student_id = ""

    def __init__(self, *args, **kwargs):
        """initialize state class"""
        super().__init__(*args, **kwargs)
