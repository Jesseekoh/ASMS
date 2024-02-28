#!/usr/bin/python3
import json
import base64
from flask import render_template, request, redirect, url_for, redirect
from flask import jsonify
from website.routes import session
from flask_cors import cross_origin
from models import storage
from models.student import Student
from hashlib import md5
from website.utils import stringUtils, validate, parse
from website.utils.utilities import sess
from website.routes import app_routes
from website.routes import default_img

@app_routes.route('/login', methods=['GET', 'POST'], strict_slashes=False)
@cross_origin(supports_credentials=True)
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

                studentValue = parse.formatStudent(student)
                studentValue['url'] = '/dashboard'
                return jsonify(studentValue), 200
            else:
                return jsonify({'error': 'invalid email or password!!'})
        else:
            return jsonify({'error': 'invalid email or password!!'})

    return jsonify(message="Unauthorized")

@app_routes.route('/logout', strict_slashes=False)
@cross_origin(supports_credentials=True)
def logout():
    if 'id' in session:
        del session['id']

    return jsonify(message='success')

@app_routes.route('/signup', methods=['GET', 'POST'], strict_slashes=False)
@cross_origin(supports_credentials=True)
def signup():
    if request.method == 'POST':
        data = request.get_json()

        message = register_user(**data)
        if message != 'Success':
            return jsonify({"error": message})

        student = storage.get_student(Student, data['email'])

        studentValue = parse.formatStudent(student)
        return jsonify(studentValue), 201

    return jsonify(message="Unauthorized"), 403

@app_routes.route('/dashboard', methods=['GET'], strict_slashes=False)
@cross_origin(supports_credentials=True)
def dashbord():
    """return student basic information"""

    if 'id' in session:
        student = storage.get(Student, session['id'])
        if student:
            studentValue = parse.formatStudent(student)
            del studentValue['url']

        path = default_img

        if student.profile_pic:
            path = student.profile_pic[0].img

        #del studentValue['profile_pic']
        studentValue['profileImageUrl'] = '/profileImage'
            
        return jsonify(studentValue)
    return jsonify(id=value)

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
