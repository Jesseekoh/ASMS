#!/usr/bin/python3
from api.v1.views import app_views
from flask import jsonify
from models import storage
from models.state import State


@app_views.route('/states', methods=['GET'], strict_slashes=False)
def all_state():
    """return all state"""
    result = []
    values = {}
    states = storage.all(State)

    for state in states.values():
        values['name'] = state.name
        values['id'] = state.id
        result.append(dict(values))
    
    return jsonify(result)
