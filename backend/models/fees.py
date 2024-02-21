#!/usr/bin/python3
from models import storage_type
from models.base import Base, BaseModel
from sqlalchemy import Column, String, Integer, ForeignKey, Boolean, Table
from sqlalchemy.orm import relationship

if storage_type == 'db':
    fees_bills = Table('fees_bills', Base.metadata,
                            Column('fee_id', String(60),
                                     ForeignKey('fees.id', onupdate='CASCADE',
                                                ondelete='CASCADE'),
                                    primary_key=True),
                            Column('bill_id', String(60),
                                     ForeignKey('bills.id', onupdate='CASCADE',
                                              ondelete='CASCADE'),
                                    primary_key=True))
class Fees(BaseModel, Base):
    """Definition of Fees class"""
    if storage_type == 'db':
        __tablename__ = 'fees'
        student_id = Column(String(60), ForeignKey('students.id'), nullable=False)
        status = Column(Boolean, default=False)
        level_id = Column(String(60), ForeignKey('levels.id'), nullable=False)
        semister_id = Column(String(60), ForeignKey('semisters.id'), nullable=False)
        billings = relationship('Bill', secondary='fees_bills', backref='fees', viewonly=False)
        amount_paid = Column(Integer, nullable=False)
    else:
        student_id = ""
        semister_id = ""
        level_id = ""
        status = False

    def __init__(self, *args, **kwargs):
        """Fees Class initialization"""
        super().__init__(*args, **kwargs)
