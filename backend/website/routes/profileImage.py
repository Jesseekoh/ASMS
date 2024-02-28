#!/usr/bin/python3
from flask import redirect, url_for
from flask_cors import cross_origin
from flask import send_from_directory
from models.student import Student
from models import storage
from website.routes import app_routes
from website.routes import session
from website.routes import UPLOAD_FOLDER
from website.routes import default_img, default_name

@app_routes.route('/profileImage', methods=['GET'], strict_slashes=False)
@cross_origin(supports_credentials=True)
def download_image():
    """Download student profile image"""

    if 'id' in session:
        student = storage.get(Student, session['id'])

        if student.profile_pic:
            filename = student.profile_pic[0].name
        else:
            filename = default_name

        return UPLOAD_FOLDER + filename
        # return send_from_directory(UPLOAD_FOLDER, filename)

    return redirect(url_for('app_routes.login'))
