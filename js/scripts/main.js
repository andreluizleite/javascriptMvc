import { StudentController } from '../controllers/studentController.js';

document.addEventListener('DOMContentLoaded', function () {
    const studentController = new StudentController();
    studentController.initialize();
});
