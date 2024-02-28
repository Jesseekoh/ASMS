#/usr/bin/python3
from os import getenv
from flask_cors import CORS, cross_origin
from flask import Flask
from flask import jsonify
from flask import render_template, request, redirect, url_for
from flask_session import Session
from models import storage
from models.student import Student
from hashlib import md5
from .utils import stringUtils, validate, parse
from website.routes import app_routes
from website.routes import session
from website.routes import UPLOAD_FOLDER, default_img, DATABASE_URI
import secrets
from werkzeug.middleware.proxy_fix import ProxyFix

app = Flask(__name__)
app.wsgi_app = ProxyFix(app.wsgi_app, x_proto=1, x_host=1)

app.config['SESSION_COOKIE_NAME'] = 'student_session'

app.config['SESSION_COOKIE_HTTPONLY'] = True
app.config['SESSION_COOKIE_SECURE'] = True  # if using HTTPS
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['SESSION_COOKIE_SAMESITE'] = 'Strict'
app.secret_key = secrets.token_hex(16) #This will be changed later
app.register_blueprint(app_routes)

CORS(app, resources={r"/asms/*": {"origins": "*"}})
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URI
app.config['SESSION_TYPE'] = 'sqlalchemy'
app.config['SESSION_SQLALCHEMY'] = storage.session
db_sess = Session(app)

@app.route('/', strict_slashes=False)
# @cross_origin(supports_credentials=True)
def main():
    return render_template('index.html')


# Middleware to block requests from unauthorized IP addresses
"""
@app.before_request
def block_unauthorized_ips():
    client_ip = request.headers.get('X-Forwarded-For')
    if client_ip != allowed_ip:
        return jsonify(message="Unauthorized", ip=client_ip), 403
"""
@app.errorhandler(404)
def page_not_found(e):
    error_dic = {"error": "Not found"}
    return jsonify(error_dic), 404

@app.teardown_appcontext
def close_db(error):
    """ Remove the current SQLAlchemy Session """
    storage.close()

if __name__ == "__main__":
    """ Main Function """
    host = getenv('ASMS_API_HOST')
    port = getenv('ASMS_API_PORT')
    if not host:
        host = '0.0.0.0'
    if not port:
        port = '5001'
    app.run(host=host, port=port, threaded=True, debug=True)
