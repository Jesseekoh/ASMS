#/usr/bin/python3
from os import getenv
from flask_cors import CORS
from flask import Flask
from flask import Flask, jsonify
from flask import Flask, render_template, request, redirect, url_for
from models import storage
from models.student import Student
from hashlib import md5
from .utils import stringUtils, validate
from website.routes import app_routes
from website.routes import session
import secrets

UPLOAD_FOLDER = '/home/edward/ASMS/backend/website/static/uploads'

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.secret_key = secrets.token_hex(16) #This will be changed later
app.register_blueprint(app_routes)

CORS(app, resources={r"/*": {"origins": "*"}})


@app.route('/', strict_slashes=False)
def main():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'], strict_slashes=False)
def login():
    if request.method == 'POST':
        data = request.get_json()
        student = storage.get_student(Student, data.get('email'))

        status = validate.validate_login(**data)
        if status != 'Success':
            return jsonify({'error': status})

        if student:
            password = data['password']
            email  = data['email']
            if md5(password.encode()).hexdigest() == student.password:
                session['id'] = student.id
                return jsonify({'url': '/dashbord'}), 200
            else:
                return jsonify({'error': 'invalid email or password!!'})
        else:
            return jsonify({'error': 'invalid email or password!!'})

    return render_template('login.html')

@app.route('/logout', strict_slashes=False)
def logout():
    if 'id' in session:
        del session['id']

    return redirect(url_for('login'))

@app.route('/signup', methods=['GET', 'POST'], strict_slashes=False)
def signup():
    if request.method == 'POST':
        data = request.get_json()

        message = register_user(**data)
        if message != 'Success':
            return jsonify({"error": message})

        student = storage.get_student(Student, data['email'])

        studentValue = formatStudent(student)
        return jsonify(studentValue), 201

    return render_template('signup.html'), 200

def formatStudent(student):
    """format student object"""

    studentValue = dict(student.to_dict())
    studentValue['major'] = student.major.name
    del studentValue['created_at']
    del studentValue['updated_at']
    del studentValue['major_id']
    del studentValue['state_id']
    del studentValue['__class__']
    studentValue['url'] = '/login'

    return studentValue

@app.route('/dashbord', strict_slashes=False)
def dashbord():


    if 'id' in session:
        student = storage.get(Student, session['id'])
        if student:
            return render_template('dashbord.html', student=student)

    return redirect(url_for('login'))


def register_user(**data):
    """Register a new user."""

    status = validate.validate_signup(**data)
    if status != 'Success':
        return status

    student = storage.get_student(Student, data.get('email'))
    if student:
        return "student already exists!"

    data['password'] = stringUtils.encrypt_password(data['password'])
    data['first_name'] = stringUtils.capitalize(data['first_name'])
    data['last_name'] = stringUtils.capitalize(data['last_name'])


    instance = Student(**data)
    id = instance.id[-12:]
    student_id = ''.join(c.upper() if c.isalpha() else c for c in id)
    instance.student_id = student_id 
    instance.save()

    return "Success"

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
    app.run(host=host, port=port, threaded=True)
