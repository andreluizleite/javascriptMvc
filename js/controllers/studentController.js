import { StudentFormView } from '../views/studentFormView.js';
import { StudentsListView } from '../views/studentsListView.js';
import { StudentModel } from '../models/studentModel.js';

export class StudentController {
    constructor() {
        this.studentFormView = new StudentFormView();
        this.studentsListView = new StudentsListView();
        this.studentModel = new StudentModel();
    }

    initialize() {
        this.studentFormView.init(this.addStudent.bind(this));
        this.updateStudentsList();
    }

    addStudent(studentData) {
        debugger;
        this.studentModel.addStudent(studentData);
        this.updateStudentsList();
    }

    updateStudentsList() {
        debugger;
        const students = this.studentModel.getAllStudents();
        this.studentsListView.render(students, this.deleteStudent.bind(this));
    }

    deleteStudent(studentId) {
        this.studentModel.deleteStudent(studentId);
        this.updateStudentsList();
    }
}
