#!/usr/bin/python3
from flask import render_template, url_for, redirect, jsonify, request
from flask import flash, send_from_directory
from models.student import Student
from models import storage
from models.profile_pic import Profile_picture
import os
from website.routes import app_routes
from website.routes import session
from werkzeug.utils import secure_filename

ALLOWED_EXTENSIONS = {'txt', 'png', 'jpg', 'jpeg', 'gif'}

def allowed_img(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app_routes.route('/settings', methods=['GET'], strict_slashes=False)
def settings():
    if 'id' in session:
        return render_template('settings.html')

    return redirect(url_for('login'))

@app_routes.route('/settings/upload', methods=['POST'], strict_slashes=False)
def upload():
    """return all announcement related to the student"""

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
            data['img'] = img.read()
            data['mimetype'] = img.mimetype

            img.save(os.path.join('/home/edward/ASMS/backend/website/static/uploads', data['name']))
            return redirect(url_for('app_routes.download_file', name=data['name']))
    """
        if student.profile_pic:
            existProfile_pic = student.profile_pic[0]
            existProfile_pic.update(**data)
            existProfile_pic.save()
            return jsonify({'message': 'Profile picture updated successfully!'})

        data['student_id'] = session['id']
        #image = Profile_picture(**data);
        #image.save()

        return {'message': 'Image uploaded successfully!'}

    """
    return redirect(url_for('login'))

@app_routes.route('/uploads/<name>')
def download_file(name):
    return send_from_directory('/home/edward/ASMS/backend/website/static/uploads', name)

