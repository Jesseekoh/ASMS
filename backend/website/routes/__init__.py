from flask import Blueprint
from flask import session
from os import getenv
app_routes = Blueprint('app_routes', __name__, url_prefix='/asms')

ASMS_MYSQL_USER = getenv('ASMS_MYSQL_USER')
ASMS_MYSQL_PWD = getenv('ASMS_MYSQL_PWD')
ASMS_MYSQL_HOST = getenv('ASMS_MYSQL_HOST')
ASMS_MYSQL_DB = getenv('ASMS_MYSQL_DB')

UPLOAD_FOLDER = '/home/ubuntu/ASMS/backend/website/static/uploads/'
default_img = '/home/ubuntu/ASMS/backend/website/static/uploads/default_profile_1.png'
default_name = 'default_profile_1.png'

DATABASE_URI = 'mysql+mysqldb://{}:{}@{}/{}'.format(ASMS_MYSQL_USER, ASMS_MYSQL_PWD, ASMS_MYSQL_HOST, ASMS_MYSQL_DB)
from website.routes.courses import *
from website.routes.announcement import *
from website.routes.result import *
from website.routes.settings import *
from website.routes.biodata import *
from website.routes.profileImage import *
from website.routes.fees import *
from website.routes.login import *
