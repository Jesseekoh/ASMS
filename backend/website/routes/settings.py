#!/usr/bin/python3
from flask import render_template, url_for, redirect, jsonify, request
from flask import flash, send_from_directory
from models.student import Student
from models import storage
from models.profile_pic import Profile_picture
import os
from website.routes import app_routes
from website.routes import session
from website.routes import UPLOAD_FOLDER
from werkzeug.utils import secure_filename

ALLOWED_EXTENSIONS = {'txt', 'png', 'jpg', 'jpeg', 'gif'}

def allowed_img(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
"""
@app_routes.route('/settings', methods=['GET'], strict_slashes=False)
def settings():
    if 'id' in session:
        return render_template('settings.html')

    return redirect(url_for('login'))
"""
@app_routes.route('/settings/upload', methods=['POST'], strict_slashes=False)
def upload():
    """upload file return the path to the uploaded file"""

    if 'id' in session:
        data = {}
        student = storage.get(Student, session['id'])

        img = request.files['picture']

        if not img:
            return jsonify({'message': 'No picture found!'})

        if img == '':
            return jsonify({'message': 'No picture selected!'})

        if img and allowed_img(img.filename):
            data['name'] = secure_filename(img.filename)
            path = (os.path.join(UPLOAD_FOLDER, data['name']))
            data['img'] = path
            data['mimetype'] = img.mimetype
            img.save(path)
        else:
            return jsonify({
                'erorr': 'Image type not supported!'
                })

        if student.profile_pic:
            existProfile_pic = student.profile_pic[0]
            oldImage = existProfile_pic.img
            existProfile_pic.update(**data)

            os.remove(oldImage)
            existProfile_pic.save()
            
            return jsonify({
                'message': 'Profile picture updated successfully!'
                })

        data['student_id'] = session['id']
        image = Profile_picture(**data);
        image.save()

        return jsonify({
            'message': 'Image uploaded successfully!'
            })

    return redirect(url_for('login'))
