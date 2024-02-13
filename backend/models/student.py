#!/usr/bin/python3
from models.base import Base, BaseModel
from models import storage_type
from sqlalchemy import Column, String, ForeignKey, Integer, Table
from sqlalchemy.orm import relationship

if storage_type == 'db':
    students_results = Table('students_results', Base.metadata,
                            Column('student_id', String(60),
                                     ForeignKey('students.id', onupdate='CASCADE',
                                                ondelete='CASCADE'),
                                    primary_key=True),
                            Column('result_id', String(60),
                                     ForeignKey('results.id', onupdate='CASCADE',
                                                ondelete='CASCADE'),
                                    primary_key=True))

    students_announcement = Table('students_announcement', Base.metadata,
                            Column('student_id', String(60),
                                     ForeignKey('students.id', onupdate='CASCADE',
                                                ondelete='CASCADE'),
                                    primary_key=True),
                            Column('announcement_id', String(60),
                                     ForeignKey('announcements.id', onupdate='CASCADE',
                                                ondelete='CASCADE'),
                                    primary_key=True))

class Student(BaseModel, Base):
    """Student class definition"""
    if storage_type == 'db':
        __tablename__ = 'students'

        first_name = Column(String(70), nullable=False)
        last_name = Column(String(70), nullable=True)
        student_id = Column(String(20), nullable=False)
        email = Column(String(128), nullable=False)
        password = Column(String(128), nullable=False)
        level_id = Column(String(60), ForeignKey('levels.id'), nullable=False)
        major_id = Column(String(60), ForeignKey('majors.id'), nullable=False)
        state_id  = Column(String(60), ForeignKey('states.id'), nullable=False)
        announcements = relationship('Announcement', secondary=students_announcement, backref='students', viewonly=False)
        profile_pic = relationship('Profile_picture', backref='students', cascade='all, delete, delete-orphan')
        fees = relationship('Fees', backref='student', cascade='all, delete, delete-orphan')
        results = relationship('Result', secondary=students_results, backref='students', viewonly=False)
    else:
        first_name = ""
        last_name = ""
        email = ""
        password = ""
        level = ""
        dep_id = ""
        cources = ""
        announcement = ""
        fees = ""

    def __init__(self, *args, **kwargs):
        """Student Class initialization"""
        super().__init__(*args, **kwargs)
