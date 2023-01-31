async function registerServiceWorker() {
    // Register service worker
    if ('serviceWorker' in navigator) { // checking if the browser supports service workers
        window.addEventListener('load', function () { // when app loads, fire callback
            navigator.serviceWorker.register('/sw.js').then(function () { // register sw
                console.log('ServiceWorker registration successful');  // registration was successful
            }, function (err) {
                console.log('ServiceWorker registration failed', err); // registration failed
            });
        });
    }
}

async function main() {
    const form = document.querySelector('form');
    const name_input = document.querySelector("[name='sname']");
    const id_input = document.querySelector("[name='sid']");
    const city_input = document.querySelector("[name='city']");
    const studentsList = document.getElementById('students');

    // const existingStudents = JSON.parse(localStorage.getItem('students')) || [];
    const existingStudents = await getAllStudentsFromDB()

    const studentData = [];

    if (existingStudents) {
        existingStudents.forEach(student => {
            addStudent(student.name, student.id, student.city);
        });
    }

    function addStudent(name, id, city) {
        const div = document.createElement('div')
        div.classList.add('student')
        const h1 = document.createElement('h1')
        h1.innerHTML = name;
        const h2 = document.createElement('h2')
        h2.innerHTML = id;
        const p = document.createElement('p')
        p.innerHTML = city;

        studentData.push({ name, id, city });

        div.appendChild(h1)
        div.appendChild(h2)
        div.appendChild(p)
        studentsList.appendChild(div)

        localStorage.setItem('students', JSON.stringify(studentData));
        addStudentToDB(name, id, city)
        name_input.value = ''
        id_input.value = ''
        city_input.value = ''
    }

    // Events
    form.onsubmit = (event) => {
        event.preventDefault();
        addStudent(name_input.value, id_input.value, city_input.value);
    }
}

registerServiceWorker()
main()