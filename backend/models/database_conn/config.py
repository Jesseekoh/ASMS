#!/usr/bin/python3
from os import getenv

ASMS_MYSQL_USER = getenv('ASMS_MYSQL_USER')
ASMS_MYSQL_PWD = getenv('ASMS_MYSQL_PWD')
ASMS_MYSQL_HOST = getenv('ASMS_MYSQL_HOST')
ASMS_MYSQL_DB = getenv('ASMS_MYSQL_DB')
ASMS_ENV = getenv('ASMS_ENV')
DATABASE_URI = 'mysql+mysqldb://{}:{}@{}/{}'.format(
        ASMS_MYSQL_USER, ASMS_MYSQL_PWD,
        ASMS_MYSQL_HOST, ASMS_MYSQL_DB)
