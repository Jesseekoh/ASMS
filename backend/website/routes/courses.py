#!/usr/bin/python3
from flask import render_template, url_for, redirect, jsonify
from flask_cors import cross_origin
from models.student import Student
from models import storage
from website.routes import app_routes
from website.routes import session


@app_routes.route('/courses', methods=['GET'], strict_slashes=False)
@cross_origin(supports_credentials=True)
def my_courses():
    """return all course related to the student"""
    if 'id' in session:
        student = storage.get(Student, session['id'])

        value = {}
        result = []
        dep_courses = student.major.courses;

        for course in student.courses:
            value['name'] = course.name
            value['status'] = 'O'
            value['code'] = course.code
            value['unit'] = 1
            result.append(dict(value))

        for course in dep_courses:
            value['name'] = course.name
            value['status'] = 'C'
            value['code'] = course.code
            value['unit'] = course.weight
            result.append(dict(value))

        return jsonify(result)


    return redirect(url_for('login'))

@app_routes.route('/courses/student/major', methods=['GET'], strict_slashes=False)
def major_courses():
    """return all course related to the student major"""
    if 'id' in session:
        student = storage.get(Student, session['id'])

        result = []
        major = student.major

        for course in major.courses:
            result.append(course.name)
        return jsonify(result)

    return redirect(url_for('login'))
