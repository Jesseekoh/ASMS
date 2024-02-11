#!/usr/bin/python3
from flask import render_template, url_for, redirect, jsonify
from models.student import Student
from models import storage
from website.routes import app_routes
from website.routes import session

@app_routes.route('/announcements', methods=['GET'], strict_slashes=False)
def announcement():
    if 'id' in session:
        return render_template('announcement.html')

    return redirect(url_for('login'))

@app_routes.route('/announcement/student', methods=['GET'], strict_slashes=False)
def my_announcement():
    """return all announcement related to the student"""

    if 'id' in session:
        student = storage.get(Student, session['id'])

        result = []

        for mesg in student.announcements:
            result.append({'from': mesg.source, 'info': mesg.info})
        return jsonify(result)

    return redirect(url_for('login'))

