export class StudentFormView {
    constructor() {
        this.formElement = document.getElementById('studentForm');
        this.nameInput = document.getElementById('name');
        this.ageInput = document.getElementById('age');
        this.gradeInput = document.getElementById('grade');
    }

    init(addStudent) {
        this.formElement.addEventListener('submit', (event) => {
            event.preventDefault();

            const studentData = {
                name: this.nameInput.value,
                age: parseInt(this.ageInput.value),
                grade: this.gradeInput.value
            };

            addStudent(studentData);
            this.formElement.reset();
        });
    }
}
