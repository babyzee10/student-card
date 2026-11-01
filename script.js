document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();
    const school = document.getElementById("schoolName").value.trim();
    const course = document.getElementById("course").value.trim();

    if (!name || !school || !course) {
        alert("Please fill in all fields!");
        return;
    }

    document.getElementById("cardStudentName").textContent = name;
    document.getElementById("cardSchoolName").textContent = school;
    document.getElementById("cardCourse").textContent = course;
    document.getElementById("cardNumber").textContent =
        "STU-" + Date.now().toString().slice(-6);

    document.getElementById("cardResult").hidden = false;
});