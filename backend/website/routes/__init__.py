from flask import Blueprint
from flask import session

app_routes = Blueprint('app_routes', __name__)

UPLOAD_FOLDER = '/home/edward/ASMS/backend/website/static/uploads'
default_img = '/home/edward/ASMS/backend/website/static/uploads/default_profile_1.png'

from website.routes.courses import *
from website.routes.announcement import *
from website.routes.result import *
from website.routes.settings import *
from website.routes.biodata import *
