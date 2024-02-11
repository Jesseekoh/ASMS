#!/usr/bin/python3
from api.v1.views import app_views
from flask import jsonify
from models import storage
from models.major import Major


@app_views.route('/majors', methods=['GET'], strict_slashes=False)
def all_major():
    """return all major"""
    result = []
    values = {}
    majors = storage.all(Major)

    for major in majors.values():
        values['name'] = major.name
        values['id'] = major.id
        result.append(dict(values))
    
    return jsonify(result)
