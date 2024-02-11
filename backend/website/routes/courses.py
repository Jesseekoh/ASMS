#!/usr/bin/python3
from flask import render_template, url_for, redirect, jsonify
from models.student import Student
from models import storage
from website.routes import app_routes
from website.routes import session

@app_routes.route('/courses', methods=['GET'], strict_slashes=False)
def courses():
    if 'id' in session:
        return render_template('course.html')

    return redirect(url_for('login'))

@app_routes.route('/courses/student', methods=['GET'], strict_slashes=False)
def my_courses():
    """return all course related to the student"""


    if 'id' in session:
        student = storage.get(Student, session['id'])

        result = []

        for course in student.courses:
            result.append(course.name)
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
