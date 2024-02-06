async function registerServiceWorker() {
  // Register service worker
  if ("serviceWorker" in navigator) {
    // checking if the browser supports service workers
    window.addEventListener("load", function () {
      // when app loads, fire callback
      navigator.serviceWorker.register("/sw.js").then(
        function () {
          // register sw
          console.log("ServiceWorker registration successful"); // registration was successful
        },
        function (err) {
          console.log("ServiceWorker registration failed", err); // registration failed
        }
      );
    });
  }
}

/**
 * Main function to handle the student form and display logic.
 */
async function main() {
  // Select form and input elements
  const form = document.querySelector("form");
  const nameInput = document.querySelector("[name='sname']");
  const idInput = document.querySelector("[name='sid']");
  const cityInput = document.querySelector("[name='city']");
  const studentsList = document.getElementById("students");

  // Retrieve existing students from the database
  const existingStudents = (await getAllStudentsFromDB()) || [];

  // Store students data locally
  const studentData = existingStudents.slice();

  // Populate initial student list
  existingStudents.forEach((student) => {
    addStudent(student.name, student.id, student.city);
  });

  /**
   * Adds a student to the list and updates the storage.
   */
  function addStudent(name, id, city) {
    // Create student elements
    const div = document.createElement("div");
    div.classList.add("student");
    const h1 = document.createElement("h1");
    h1.textContent = name;
    const h2 = document.createElement("h2");
    h2.textContent = id;
    const p = document.createElement("p");
    p.textContent = city;

    // Append to DOM
    div.append(h1, h2, p);
    studentsList.appendChild(div);

    // Update storage
    studentData.push({ name, id, city });
    localStorage.setItem("students", JSON.stringify(studentData));
    addStudentToDB(name, id, city); // Assuming addStudentToDB is defined

    // Clear input fields
    [nameInput, idInput, cityInput].forEach((input) => (input.value = ""));
  }

  // Handle form submission
  form.onsubmit = (event) => {
    event.preventDefault();
    addStudent(nameInput.value, idInput.value, cityInput.value);
  };
}

// Initialize service worker and main application logic
registerServiceWorker();
main();
