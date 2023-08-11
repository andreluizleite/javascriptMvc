export class StudentsListView {
    constructor() {
        this.tableElement = document.getElementById('studentsTable');
        this.tbodyElement = this.tableElement.querySelector('tbody');
    }

    render(students, deleteStudent) {
        this.tbodyElement.innerHTML = '';

        for (const student of students) {
            const row = this.tbodyElement.insertRow();
            row.insertCell(0).textContent = student.name;
            row.insertCell(1).textContent = student.age;
            row.insertCell(2).textContent = student.grade;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                deleteStudent(student.id);
            });
            row.insertCell(3).appendChild(deleteButton);
        }
    }
}
