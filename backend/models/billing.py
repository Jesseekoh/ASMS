#!/usr/bin/python3
from models import storage_type
from models.base import Base, BaseModel
from sqlalchemy import Column, String, Integer, ForeignKey, Table
from sqlalchemy.orm import relationship

if storage_type == 'db':
    major_bill = Table('major_bill', Base.metadata,
                            Column('major_id', String(60),
                                     ForeignKey('majors.id', onupdate='CASCADE',
                                                ondelete='CASCADE'),
                                    primary_key=True),
                            Column('bill_id', String(60),
                                     ForeignKey('bills.id', onupdate='CASCADE',
                                              ondelete='CASCADE'),
                                    primary_key=True))

    level_bill = Table('level_bill', Base.metadata,
                            Column('level_id', String(60),
                                     ForeignKey('levels.id', onupdate='CASCADE',
                                                ondelete='CASCADE'),
                                    primary_key=True),
                            Column('bill_id', String(60),
                                     ForeignKey('bills.id', onupdate='CASCADE',
                                              ondelete='CASCADE'),
                                    primary_key=True))

class Bill(BaseModel, Base):
    """Definition of Fees class"""
    if storage_type == 'db':
        __tablename__ = 'bills'
        name = Column(String(50), nullable=False)
        amount = Column(Integer, nullable=False)
        dept_bill = relationship('Major', secondary='major_bill', backref='billings', viewonly=False)
        level_bill = relationship('Level', secondary='level_bill', backref='billings', viewonly=False)
    else:
        name = ""
        amount = ""

    def __init__(self, *args, **kwargs):
        """Fees Class initialization"""
        super().__init__(*args, **kwargs)
