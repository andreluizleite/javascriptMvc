import { StudentController } from './StudentController/studentController.js';

document.addEventListener('DOMContentLoaded', function () {
    const studentController = new StudentController();
    studentController.initialize();
});
