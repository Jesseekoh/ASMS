from flask import Blueprint
from flask import session

app_routes = Blueprint('app_routes', __name__, url_prefix='/asms')

UPLOAD_FOLDER = '/home/jesseekoh-ordan/Code/projects/ASMS/backend/website/static/uploads'
default_img = '/home/jesseekoh-ordan/Code/projects/ASMS/backend/website/static/uploads/default_profile_1.png'
default_name = 'default_profile_1.png'

from website.routes.courses import *
from website.routes.announcement import *
from website.routes.result import *
from website.routes.settings import *
from website.routes.biodata import *
from website.routes.profileImage import *
from website.routes.fees import *
from website.routes.login import *
