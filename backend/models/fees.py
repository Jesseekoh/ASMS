#!/usr/bin/python3
from models import storage_type
from models.base import Base, BaseModel
from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship

class Fees(BaseModel, Base):
    """Definition of Fees class"""
    if storage_type == 'db':
        __tablename__ = 'fees'
        student_id = Column(String(70), ForeignKey('students.id'), nullable=False)
        amount = Column(Integer, nullable=False)
    else:
        student_id = ""
        amount = ""

    def __init__(self, *args, **kwargs):
        """Fees Class initialization"""
        super().__init__(*args, **kwargs)
