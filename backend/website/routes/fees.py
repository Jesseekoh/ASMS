#!/usr/bin/python3
from flask import render_template, url_for, redirect, jsonify
from flask_cors import cross_origin
from models.student import Student
from models import storage
from website.routes import app_routes
from website.routes import session
from models.fees import Fees


@app_routes.route('/fees', methods=['GET'], strict_slashes=False)
@cross_origin(supports_credentials=True)
def fees():
    """return all fees related to the student"""
    if 'id' in session:
        student = storage.get(Student, session['id'])
    
        value = {}
        result = []
        othersBills = []
        total = 0
        dep_bills = student.major.billings;
        level_bills = student.levels.billings
        student_bills = student.others

        for bill in dep_bills:
            value['name'] = bill.name
            value['amount'] = bill.amount
            result.append(dict(value))
            total += bill.amount

        for bill in level_bills:
            value['name'] = bill.name
            value['amount'] = bill.amount
            result.append(dict(value))
            total += bill.amount

        for bill in student_bills:
            value['name'] = bill.name
            value['amount'] = bill.amount
            othersBills.append(dict(value))
            total += bill.amount

        return jsonify({
            "fees": result,
            "othersCharges": othersBills,
            "Total": total
            })


    return redirect(url_for('login'))

@app_routes.route('/fees/history', methods=['GET'], strict_slashes=False)
def feesHistory():
    if 'id' in session:
        student = storage.get(Student, session['id'])

        payments = student.fees
        data = []
        value = {}
        result, othersBills = [], []
        total = 0

        if not payments:
            return jsonify({"message": "No payments exist!"})

        for payment in payments:
            for bill in payment.billings:
                value['name'] = bill.name
                value['amount'] = bill.amount
                result.append(dict(value))
                total += bill.amount

            for bill in payment.others:
                value['name'] = bill.name
                value['amount'] = bill.amount
                othersBills.append(dict(value))
                total += bill.amount

            data.append({
                "level": payment.levels.number,
                "semister": payment.semister.number,
                "fees": result,
                "othersCharges": othersBills,
                "Total": total,
                "completed": payment.status,
                "Paid": payment.amount_paid
            })
            total = 0
            result = []
            othersBills = []
        return jsonify(data)

    return redirect(url_for('login'))

@app_routes.route('/fees/make_payment', methods=['GET'], strict_slashes=False)
def makePayment():
    if 'id' in session:
        student = storage.get(Student, session['id'])

        #
        # payment logic hear!
        #
    
        # if success

        data = {}
        dep_bills = student.major.billings;
        level_bills = student.levels.billings
        student_bills = student.others

        data['student_id'] = student.id
        data['level_id'] = student.levels.id
        data['semister_id'] = '72fbc53c-2bf8-412b-8507-ad120e6c38a6' # Replace this with main school data that moves with time.
        data['amount_paid'] = 127501

        fees = Fees(**data)


        for bill in dep_bills:
            fees.billings.append(bill)

        for bill in level_bills:
            fees.billings.append(bill)

        for bill in student_bills:
            fees.others.append(bill)

        if totalBill(student) <= data['amount_paid']:
            data['status'] = True
            for bill in fees.others:
                student_bills.remove(bill)
            fees.update(**data)

        fees.save()
        return jsonify({'message': 'payment made successfully!'})

    return redirect(url_for('login'))


def totalBill(student):

    total = 0
    dep_bills = student.major.billings;
    level_bills = student.levels.billings
    student_bills = student.others

    for bill in dep_bills:
        total += bill.amount

    for bill in level_bills:
        total += bill.amount

    for bill in student_bills:
        total += bill.amount

    return total
