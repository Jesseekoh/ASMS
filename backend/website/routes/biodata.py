#!/usr/bin/python3
from flask import render_template, url_for, redirect, jsonify
from models.student import Student
from models import storage
from website.routes import app_routes
from website.routes import session
from website.utils import parse


@app_routes.route('/biodata', methods=['GET'], strict_slashes=False)
def bioData():
    """return all data related to the student"""

    if 'id' in session:
        student = storage.get(Student, session['id'])

        studentData = parse.formatStudent(student)
        studentData['state'] = student.state.name
        del studentData['url']

        return jsonify(studentData)

    return redirect(url_for('login'))

