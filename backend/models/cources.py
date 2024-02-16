#!/usr/bin/python3
"""Course class definition"""
from models import storage_type
from models.base import Base, BaseModel
from sqlalchemy import String, Column, ForeignKey, Table, Integer
from sqlalchemy.orm import relationship

if storage_type == 'db':
    student_cources = Table('student_courses', Base.metadata,
                            Column('student_id', String(60),
                                     ForeignKey('students.id', onupdate='CASCADE',
                                                ondelete='CASCADE'),
                                    primary_key=True),
                            Column('courses_id', String(60),
                                     ForeignKey('courses.id', onupdate='CASCADE',
                                                ondelete='CASCADE'),
                                    primary_key=True))

class Course(BaseModel, Base):
    """Definition of the Cource Class"""

    if storage_type == 'db':
        __tablename__ = 'courses'

        name = Column(String(128), nullable=False)
        code = Column(String(20), nullable=True)
        weight = Column(Integer, nullable=False) 
        student = relationship("Student", secondary=student_cources,
                                viewonly=False, backref='courses')
        results = relationship('Result', backref='courses', cascade='all, delete, delete-orphan')
    else:
        name = ""
        score = ""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
