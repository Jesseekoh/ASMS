from os import getenv

from api.v1.views import app_views
from flask import Flask, make_response, jsonify
from flask_cors import CORS
from models import storage

allowed_ip = '54.198.34.163'
app = Flask(__name__)

app.register_blueprint(app_views)
cors = CORS(app, resources={r"/asms/api/v1/*": {"origins": "*"}})
"""
# Middleware to block requests from unauthorized IP addresses
@app.before_request
def block_unauthorized_ips():
    client_ip = request.headers.get('X-Forwarded-For')
    if client_ip != allowed_ip:
        return jsonify(message="Unauthorized", ip=client_ip), 403
"""
@app.teardown_appcontext
def close_db(error):
    """ Close Storage """
    storage.close()


@app.errorhandler(404)
def not_found(error):
    """ 404 Error
    ---
    responses:
      404:
        description: a resource was not found
    """
    return make_response(jsonify({'error': "Not found"}), 404)


if __name__ == "__main__":
    """ Main Function """
    host = getenv('ASMS_API_HOST')
    port = getenv('ASMS_API_PORT')
    if not host:
        host = '0.0.0.0'
    if not port:
        port = '5001'
    app.run(host=host, port=port, threaded=True)
