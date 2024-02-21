#!/usr/bin/python3
from models import storage_type
from models.base import Base, BaseModel
from sqlalchemy import Column, String, Integer, ForeignKey, Table
from sqlalchemy.orm import relationship

if storage_type == 'db':
    other_fees = Table('other_fees', Base.metadata,
                            Column('fees_id', String(60),
                                     ForeignKey('fees.id', onupdate='CASCADE',
                                                ondelete='CASCADE'),
                                    primary_key=True),
                            Column('bill_id', String(60),
                                     ForeignKey('otherbills.id', onupdate='CASCADE',
                                              ondelete='CASCADE'),
                                    primary_key=True))

    student_bill = Table('student_bill', Base.metadata,
                            Column('student_id', String(60),
                                     ForeignKey('students.id', onupdate='CASCADE',
                                                ondelete='CASCADE'),
                                    primary_key=True),
                            Column('bill_id', String(60),
                                     ForeignKey('otherbills.id', onupdate='CASCADE',
                                              ondelete='CASCADE'),
                                    primary_key=True))


class OtherBill(BaseModel, Base):
    """Definition of Fees class"""
    if storage_type == 'db':
        __tablename__ = 'otherbills'
        name = Column(String(50), nullable=False)
        amount = Column(Integer, nullable=False)
        fees = relationship('Fees', secondary='other_fees', backref='others', viewonly=False)
        student_bill = relationship('Student', secondary='student_bill', backref='others', viewonly=False)
    else:
        name = ""
        amount = ""

    def __init__(self, *args, **kwargs):
        """Fees Class initialization"""
        super().__init__(*args, **kwargs)
