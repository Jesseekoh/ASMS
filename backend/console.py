#!/usr/bin/python3
""" console """
import MySQLdb
import sqlalchemy
import cmd
from datetime import datetime
import models
from models import storage
from models.announcement import Announcement
from models.base import Base
from models.cources import Course
from models.major import Major
from models.faculty import Faculty
from models.fees import Fees
from models.student import Student
from models.state import State
from models.result import Result
from models.level import Level
from models.semister import Semister
from models.profile_pic import Profile_picture
import shlex  # for splitting the line along spaces except in double quotes
classes = {"Student": Student, "Major": Major, "Faculty": Faculty,
        "Profile_picture": Profile_picture, "Fees": Fees, "Course": Course,
        "Announcement": Announcement, "State": State, "Level": Level, "Semister": Semister}

relationship = ['Student', 'Course', 'Major']

class ASMSCommand(cmd.Cmd):
    """ HBNH console """
    prompt = '(asms) '

    def do_EOF(self, arg):
        """Exits console"""
        return True

    def emptyline(self):
        """ overwriting the emptyline method """
        return False

    def do_quit(self, arg):
        """Quit command to exit the program"""
        return True

    def _key_value_parser(self, args):
        """creates a dictionary from a list of strings"""
        new_dict = {}
        for arg in args:
            if "=" in arg:
                kvp = arg.split('=', 1)
                key = kvp[0]
                value = kvp[1]
                if value[0] == value[-1] == '"':
                    value = shlex.split(value)[0].replace('_', ' ')
                else:
                    try:
                        value = int(value)
                    except:
                        try:
                            value = float(value)
                        except:
                            pass

                new_dict[key] = value
        return new_dict

    def do_create(self, arg):
        """Creates a new instance of a class"""
        args = arg.split()
        if len(args) == 0:
            print("** class name missing **")
            return False
        if args[0] in classes:
            new_dict = self._key_value_parser(args[1:])
            if new_dict.get('name'):
                new_dict['name'] = new_dict['name'].replace('_', ' ');
            instance = classes[args[0]](**new_dict)
        else:
            print("** class doesn't exist **")
            return False
        print(instance.id)
        instance.save()

    def relate(self, cls, args):
        try:
            for id in args[1:]:
                obj = storage.get(classes[args[0]], id)
                if obj:
                    if args[0] == 'Major':
                        cls.majors.append(obj)
                    elif args[0] == 'Course':
                        cls.courses.append(obj)
                    elif args[0] == 'Result':
                        cls.results.append(obj)
                    elif args[0] == 'Student':
                        cls.student.append(obj)
                    elif args[0] == 'Announcement':
                        cls.announcements.append(obj)
                    storage.save()
                    print('added:', obj.id)
                else:
                    print(id, 'instance not found!')
        except (MySQLdb.IntegrityError, sqlalchemy.exc.IntegrityError):
            print('relationship already exist!')
        """    
        except AttributeError:
            print(cls.__class__.__name__, 'object does not have relationship with the specified object!')
        """

    def view_relate(self, cls, args):
        try:
            if args[0] == 'Major':
                print([str(obj) for obj in cls.majors])
            elif args[0] == 'Course':
                print([str(obj) for obj in cls.courses])
            elif args[0] == 'Student':
                print([str(obj) for obj in cls.student])
            elif args[0] == 'Result':
                print([str(obj) for obj in cls.results])
        except AttributeError:
            print(cls.__class__.__name__, 'object has no relationship with the specified object!')

    def do_link(self, arg):
        args = shlex.split(arg)
        if len(args) == 0:
            print("** class name missing **")
            return False
        if args[0] in classes:
            if args[0] in relationship:
                if len(args) > 1:
                    key = args[0] + "." + args[1]
                    if key in models.storage.all():
                        self.relate(models.storage.all()[key], args[2:])
                    else:
                        print("** no instance found **")
                else:
                    print("** instance id missing **")
            else:
                print("** no relationship found **")
        else:
            print("** class doesn't exist **")

    def do_view(self, arg):
        args = shlex.split(arg)
        if len(args) == 0:
            print("** class name missing **")
            return False
        if args[0] in classes:
            if args[0] in relationship:
                if len(args) > 1:
                    key = args[0] + "." + args[1]
                    if key in models.storage.all():
                        self.view_relate(models.storage.all()[key], args[2:])
                    else:
                        print("** no instance found **")
                else:
                    print("** instance id missing **")
            else:
                print("** no relationship found **")
        else:
            print("** class doesn't exist **")

    def do_show(self, arg):
        """Prints an instance as a string based on the class and id"""
        args = shlex.split(arg)
        if len(args) == 0:
            print("** class name missing **")
            return False
        if args[0] in classes:
            if len(args) > 1:
                key = args[0] + "." + args[1]
                if key in models.storage.all():
                    print(models.storage.all()[key])
                else:
                    print("** no instance found **")
            else:
                print("** instance id missing **")
        else:
            print("** class doesn't exist **")

    def do_destroy(self, arg):
        """Deletes an instance based on the class and id"""
        args = shlex.split(arg)
        if len(args) == 0:
            print("** class name missing **")
        elif args[0] in classes:
            if len(args) > 1:
                key = args[0] + "." + args[1]
                if key in models.storage.all():
                    storage.delete(models.storage.all().get(key))
                    models.storage.save()
                else:
                    print("** no instance found **")
            else:
                print("** instance id missing **")
        else:
            print("** class doesn't exist **")

    def do_all(self, arg):
        """Prints string representations of instances"""
        args = shlex.split(arg)
        obj_list = []
        if len(args) == 0:
            obj_dict = models.storage.all()
        elif args[0] in classes:
            obj_dict = models.storage.all(classes[args[0]])
        else:
            print("** class doesn't exist **")
            return False
        for key in obj_dict:
            obj_list.append(str(obj_dict[key]))
        print("[", end="")
        print(", ".join(obj_list), end="")
        print("]")

    def do_update(self, arg):
        """Update an instance based on the class name, id, attribute & value"""
        args = shlex.split(arg)
        integers = ["amount", "score"]
        #floats = ["CGPA"]
        if len(args) == 0:
            print("** class name missing **")
        elif args[0] in classes:
            if len(args) > 1:
                k = args[0] + "." + args[1]
                if k in models.storage.all():
                    if len(args) > 2:
                        if len(args) > 3:
                            if args[0] == "Fees":
                                if args[2] in integers:
                                    try:
                                        args[3] = int(args[3])
                                    except:
                                        args[3] = 0
                            """
                            Add logic for CGPA
                                elif args[2] in floats:
                                    try:
                                        args[3] = float(args[3])
                                    except:
                                        args[3] = 0.0
                            """
                            setattr(models.storage.all()[k], args[2], args[3])
                            models.storage.all()[k].save()
                        else:
                            print("** value missing **")
                    else:
                        print("** attribute name missing **")
                else:
                    print("** no instance found **")
            else:
                print("** instance id missing **")
        else:
            print("** class doesn't exist **")

if __name__ == '__main__':
    ASMSCommand().cmdloop()
