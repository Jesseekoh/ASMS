from flask import Blueprint
from flask import session

app_routes = Blueprint('app_routes', __name__)

from website.routes.courses import *
from website.routes.announcement import *
from website.routes.result import *
from website.routes.settings import *
from website.routes.biodata import *
