export class StudentModel {
    constructor() {
        this.students = [];
        this.nextId = 1; // To track unique IDs
    }

    addStudent(studentData) {
        const newStudent = {
            id: this.nextId++,
            name: studentData.name,
            age: studentData.age,
            grade: studentData.grade
        };
        this.students.push(newStudent);
    }

    getAllStudents() {
        return this.students;
    }

    deleteStudent(studentId) {
        const index = this.students.findIndex(student => student.id === studentId);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    }
}



