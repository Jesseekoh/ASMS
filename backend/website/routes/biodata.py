#!/usr/bin/python3
from flask import render_template, url_for, redirect, jsonify
from flask_cors import cross_origin
from models.student import Student
from models import storage
from website.routes import app_routes
from website.routes import session
from website.utils import parse
from website.routes import default_img

@app_routes.route('/biodata', methods=['GET'], strict_slashes=False)
@cross_origin(supports_credentials=True)
def bioData():
    """return all data related to the student"""

    if 'id' in session:
        student = storage.get(Student, session['id'])
        path = default_img

        if student.profile_pic:
            path = student.profile_pic[0].img

        compulsoryCourseNo, optionalCourseNo = 0, 0

        dep_courses = student.major.courses
        
        for course in student.courses:
            optionalCourseNo += 1


        for course in dep_courses:
            compulsoryCourseNo += 1

        studentData = parse.formatStudent(student)

        studentData['state'] = student.state.name
        studentData['profileImageUrl'] = '/profileImage'
        studentData['compulsoryCourses'] = compulsoryCourseNo
        studentData['optionalCourses'] = optionalCourseNo

        del studentData['url']
        del studentData['profile_pic']
        del studentData['courses']

        return jsonify(studentData)

    return redirect(url_for('login'))

