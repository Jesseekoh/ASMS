from flask import request
import hashlib
import json
import base64

class StringUtils:
    """String manipulation Class"""
    @staticmethod
    def capitalize(text):
        """Capitalize the first letter of a string"""
        return text.capitalize()

    @staticmethod
    def encrypt_password(password):
        """encrypt passord with md5"""
        password_bytes = password.encode('utf-8')

        md5_hash = hashlib.md5()

        md5_hash.update(password_bytes)

        encrypted_password = md5_hash.hexdigest()

        return encrypted_password


class Format:
    """Class definition for Formating objects"""

    @staticmethod
    def formatStudent(student):
        """format student object"""

        studentValue = student.to_dict()
        studentValue['major'] = student.major.name
        del studentValue['created_at']
        del studentValue['updated_at']
        del studentValue['major_id']
        del studentValue['state_id']
        del studentValue['__class__']
        del studentValue['level_id']
        del studentValue['id']
        studentValue['level'] = student.levels.number
        studentValue['gender'] = student.gender
        studentValue['url'] = '/login'

        return studentValue


class Validate:
    """utility for validation"""

    @staticmethod
    def validate_signup(**data):

        required_fields = ['first_name', 'email', 'password',
                'major_id', 'state_id', 'level_id', 'last_name', 
                'gender']

        if not data:
            return "No data provided"

        for key in required_fields:
            if not key in data or data[key] == "":
                return "Missing - {}".format(key)


        return "Success"

    @staticmethod
    def validate_login(**data):

        required_fields = ['email', 'password']

        if not data:
            return "No data provided"

        for key in required_fields:
            if not key in data or data[key] == "":
                return "Missing - {}".format(key)

        return "Success"


def sess():
    """Decode user session cookies"""
    encoded_string = request.cookies.get('student_session')

    if encoded_string:
        # Ensure the length of the encoded string is a multiple of 4
        padding_length = 4 - (len(encoded_string) % 4)
        encoded_string += '=' * padding_length

        try:
            # Decode the Base64 string
            decoded_bytes = base64.b64decode(encoded_string)

            # Find the index of the first non-JSON character
            end_of_json_index = decoded_bytes.index(b'}') + 1

            # Extract the JSON part
            json_part = decoded_bytes[:end_of_json_index]

            # Decode the JSON part
            decoded_json = json_part.decode('utf-8')

            # Parse the JSON string
            data = json.loads(decoded_json)

            return data

        except (base64.binascii.Error, ValueError, KeyError, IndexError) as e:
            # Handle decoding or parsing errors
            print(f"Error decoding session cookie: {e}")
            return None

    return None

