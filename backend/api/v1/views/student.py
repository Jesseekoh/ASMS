#!/usr/bin/python3

from api.v1.views import app_views
from flask import abort, jsonify, make_response, request
from models import storage
from models.student import Student

@app_views.route('/students/<student_id>', methods=['GET'], strict_slashes=False)
def get_user(student_id):
    """ Retrieves a Student """
    print("entered!")
    student = storage.get(Student, student_id)
    if not student:
        print("not found!")
        abort(404)

    return jsonify(student.to_dict())
