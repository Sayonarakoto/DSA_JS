let students = [];

// select the form
const studentForm = document.getElementById('studentForm');

studentForm.addEventListener('submit', function(event){
    event.preventDefault(); // stop page reload

    // get input values
    const name = document.getElementById('name').value;
    const roll = document.getElementById('roll').value;
    const dept = document.getElementById('dept').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // create student object
    const student = {
        name: name,
        roll: roll,
        dept: dept,
        email: email,
        phone: phone
    };

    // push to array
    students.push(student);

    // show in console
    console.table(students);

    // optional: clear form for next entry
    studentForm.reset();
});
