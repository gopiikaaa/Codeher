// Get the modal
var modal = document.getElementById('login-modal');

// Get the button that opens the modal
var loginLink = document.getElementById("login-link");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the login link, open the modal
loginLink.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Login functionality
var loginBtn = document.getElementById("login-button");
loginBtn.onclick = function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Here you can implement your login logic, for example, sending a request to a server to verify credentials
    console.log("Username: " + username + ", Password: " + password);
    // Close the modal after login attempt
    modal.style.display = "none";
}
document.getElementById('generate-resume').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var university = document.getElementById('university').value;
    var graduationYear = document.getElementById('graduation-year').value;
    var jobTitle = document.getElementById('job-title').value;
    var company = document.getElementById('company').value;
    var experienceYears = document.getElementById('experience-years').value;

    var resumeOutput = document.getElementById('resume-output');
    resumeOutput.innerHTML = `
        <h2>Generated Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Education:</strong> ${degree}, ${university}, Graduated ${graduationYear}</p>
        <p><strong>Experience:</strong> ${experienceYears} years as ${jobTitle} at ${company}</p>
    `;
});