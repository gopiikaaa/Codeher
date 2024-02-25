var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

function selectTemplate(template) {
    // Hide all sections
    var sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Show sections related to the selected template
    var templateSections = document.querySelectorAll('.' + template);
    templateSections.forEach(section => {
        section.classList.remove('hidden');
    });

    // Show generate resume button and resume output section
    document.getElementById('generate-resume').classList.remove('hidden');
    document.getElementById('resume-output').classList.remove('hidden');
}

document.getElementById('generate-resume').addEventListener('click', function() {
    // Gather user inputs
    var personalInfo = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };

    var educationInfo = {
        degree: document.getElementById('degree').value,
        university: document.getElementById('university').value,
        graduationYear: document.getElementById('graduation-year').value
    };

    var experienceInfo = {
        jobTitle: document.getElementById('job-title').value,
        company: document.getElementById('company').value,
        experienceYears: document.getElementById('experience-years').value
    };

    // Generate resume output based on the selected template and user inputs
    var selectedTemplate = document.querySelector('.section:not(.hidden)');
    var resumeOutput = document.getElementById('resume-output');
    resumeOutput.innerHTML = `
        <h2>Resume Output</h2>
        <h3>Template: ${selectedTemplate.id}</h3>
        <h3>Personal Information</h3>
        <p>Name: ${personalInfo.name}</p
