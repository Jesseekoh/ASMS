#!/usr/bin/python3
from flask import render_template, url_for, redirect, jsonify
from flask_cors import cross_origin
from models.student import Student
from models import storage
from website.routes import app_routes
from website.routes import session
from website.utils.utilities import sess

@app_routes.route('/announcement', methods=['GET'], strict_slashes=False)
@cross_origin(supports_credentials=True)
def my_announcement():
    """return all announcement related to the student"""

    if 'id' in session:
        result = []

        student = storage.get(Student, session['id'])

        for mesg in student.announcements:
            date_in_words = mesg.created_at.strftime("%B %d, %Y")
            result.append({
                'from': mesg.source,
                'info': mesg.info,
                'date': date_in_words})
        return jsonify(result)


    return redirect(url_for('app_routes.login'))

