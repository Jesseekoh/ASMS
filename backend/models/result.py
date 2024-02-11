#!/usr/bin/python3
"""Result class definition"""
from models import storage_type
from models.base import Base, BaseModel
from sqlalchemy import String, Column, ForeignKey, Integer

class Result(BaseModel, Base):
    """Definition of the Result Class"""

    if storage_type == 'db':
        __tablename__ = 'results'

        level_id = Column(String(60), ForeignKey('levels.id'), nullable=False)
        semister_id = Column(String(60), ForeignKey('semisters.id'), nullable=False)
        course_id = Column(String(60), ForeignKey('courses.id'), nullable=False)
        score = Column(Integer, nullable=False, default=0)
    else:
        level_id = ""
        semister_id = ""
        course_id = ""
        score = 0

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
