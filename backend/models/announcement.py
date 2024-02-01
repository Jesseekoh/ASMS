"""Announcement class definition module"""

class Announcement:
    __table__ = 'announcement'

    source = Column(String(100))
    info = Column(String(string(1027))
