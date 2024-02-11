#!/usr/bin/python3
from models import storage_type
from models.base import BaseModel, Base
from sqlalchemy import Column, ForeignKey, String, Table
from sqlalchemy.orm import relationship

if storage_type == 'db':
    major_courses = Table('major_courses', Base.metadata,
            Column('major_id', String(60),
                ForeignKey('majors.id', onupdate='CASCADE', ondelete='CASCADE'), primary_key=True),
            Column('courses_id', String(60),
                ForeignKey('courses.id', onupdate='CASCADE', ondelete='CASCADE'), primary_key=True)
            )

class Major(BaseModel, Base):
    """Department Class definition"""
    if storage_type == 'db':
        __tablename__ = 'majors'

        name = Column(String(128), nullable=False)
        faculty_id  = Column(String(60), ForeignKey('faculties.id'), nullable=False)
        students = relationship('Student', backref='major', viewonly=False)
        courses = relationship('Course', secondary=major_courses, backref='majors', viewonly=False)
    else:
        name = ""

    def __init__(self, *args, **kwargs):
        """Department Class initialization"""
        super().__init__(*args, **kwargs)

