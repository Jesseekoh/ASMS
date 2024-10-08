#!/usr/bin/python3
from flask import Blueprint

app_views = Blueprint('app_views', __name__, url_prefix='/asms/api/v1')

from api.v1.views.student import *
from api.v1.views.major import *
from api.v1.views.state import *
from api.v1.views.level import *
