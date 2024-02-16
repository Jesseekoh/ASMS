#!/usr/bin/python3
from api.v1.views import app_views
from flask import jsonify
from models import storage
from models.level import Level


@app_views.route('/levels', methods=['GET'], strict_slashes=False)
def levels():
    """return all state"""
    result = []
    values = {}
    levels = storage.all(Level)

    for level in levels.values():
        values['level'] = level.number
        values['id'] = level.id
        result.append(dict(values))
    
    return jsonify(result)
