#!/usr/bin/python3
"""
initialize the storage Class
"""
from os import getenv


storage_type = getenv("ASMS_TYPE_STORAGE")

if storage_type == "db":
    from models.database_conn.connection import DBStorage
    storage = DBStorage()
else:
    from models.database_conn.fileStorage import FileStorage
    storage = FileStorage()

storage.reload()
