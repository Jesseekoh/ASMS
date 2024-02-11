#!/usr/bin/python3
from flask import render_template, url_for, redirect, jsonify
from models.student import Student
from models.level import Level
from models.semister import Semister
from models import storage
from website.routes import app_routes
from website.routes import session

@app_routes.route('/result', methods=['GET'], strict_slashes=False)
def result():
    if 'id' in session:
        return render_template('result.html')

    return redirect(url_for('login'))

@app_routes.route('/results/student', methods=['GET'], strict_slashes=False)
def my_results():
    """return all result related to the student"""

    if 'id' in session:
        student = storage.get(Student, session['id'])
        levels = storage.all(Level)
        semisters = storage.all(Semister)

        result_arr = []
        semister_arr = []
        main_arr = []
        main = {}
        grand_total = 0
        total = 0

        for level in levels.values():
            levels_dict = {}
            levels_dict['level_no'] = level.number

            for semister in semisters.values():
                semister_dict = {}
                semister_dict['semister_no'] = semister.number

                for result in student.results:
                    if result.levels.number == level.number and result.semisters.number == semister.number:
                        result_dict = {}
                        result_dict['subject'] = result.courses.name
                        result_dict['score'] = result.score
                        total += result.score
                        result_arr.append(result_dict)
                semister_dict['courses'] = result_arr
                semister_dict['Total'] = total
                grand_total += total
                result_arr = []
                total = 0

                semister_arr.append(semister_dict)
        
            levels_dict['semisters'] = semister_arr
            semister_arr = []
            if semister_dict['courses']:
                main_arr.append(levels_dict)

        main['results'] = main_arr
        main['grandTotal'] = grand_total
        main['cgpa'] = float(grand_total/50)
        return jsonify(main)

    return redirect(url_for('login'))

@app_routes.route('/result/student', methods=['GET'], strict_slashes=False)
def current_results():

    if 'id' in session:
        total = 0
        grand_total = 0
        result_arr = []
        semister_arr = []
        main = {}

        semisters = storage.all(Semister)
        student = storage.get(Student, session['id'])

        level_no = student.levels.number
        levels_dict = {}
        levels_dict['level_no'] = level_no

        for semister in semisters.values():
            semister_dict = {}
            semister_dict['semister_no'] = semister.number

            for result in student.results:
                if result.levels.number == level_no and result.semisters.number == semister.number:
                    result_dict = {}
                    result_dict['subject'] = result.courses.name
                    result_dict['score'] = result.score
                    total += result.score
                    result_arr.append(result_dict)
            semister_dict['courses'] = result_arr
            semister_dict['Total'] = total
            grand_total += total
            result_arr = []
            total = 0

            if semister_dict['courses']:
                semister_arr.append(semister_dict)

            levels_dict['semisters'] = semister_arr

            main['results'] = levels_dict
            main['grandTotal'] = grand_total
            main['cgpa'] = float(grand_total/50)

        return jsonify(main)

    return redirect(url_for('login'))
