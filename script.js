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

    const studentlist = document.getElementById('student-List');
console.log(studentlist);
studentlist.innerHTML = ""
for(let i = 0; i < students.length; i++){
    s=students[i];
    const studentDiv = document.createElement('div');
    const Pname=document.createElement('p');
    const Roll=document.createElement('p');
    const Dept=document.createElement('p');
    const Email=document.createElement('p');
    const Phone=document.createElement('p');
    
    Pname.innerText=`Name: ${s.name}`;
    Roll.innerText=`Roll: ${s.roll}`;
    Dept.innerText=`Department: ${s.dept}`;
    Email.innerText=`Email: ${s.email}`;
    Phone.innerText=`Phone: ${s.phone}`;
    
    studentDiv.appendChild(Pname);
    studentDiv.appendChild(Roll);
    studentDiv.appendChild(Dept);
    studentDiv.appendChild(Email);
    studentDiv.appendChild(Phone);
    studentlist.appendChild(studentDiv);
    studentDiv.classList.add('student-card');
    
    
}// optional: clear form for next entry
    studentForm.reset();
});

