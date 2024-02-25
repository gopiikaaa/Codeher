
var modal = document.getElementById('login-modal');
var loginLink = document.getElementById("login-link");


var closeBtn = document.getElementsByClassName("close")[0];


loginLink.onclick = function() {
    modal.style.display = "block";
}


closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var loginBtn = document.getElementById("login-button");
loginBtn.onclick = function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    console.log("Username: " + username + ", Password: " + password);
    modal.style.display = "none";
};
const createResumeButton = document.getElementById('create-resume-button');
const templatesSection = document.getElementById('templates');

createResumeButton.addEventListener('click', () => {
  templatesSection.scrollIntoView({ behavior: 'smooth' });
});

