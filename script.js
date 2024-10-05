// Selecting necessary elements
const createProfileBtn = document.getElementById('createProfileBtn');
const studentFormSection = document.querySelector('.student-form');
const profileFormSection = document.querySelector('.profile-form');
const profileForm = document.getElementById('profileForm');

// Show profile form and hide the student table when "Create New Profile" button is clicked
createProfileBtn.addEventListener('click', () => {
    studentFormSection.style.display = 'none'; // Hide student table
    profileFormSection.style.display = 'block'; // Show profile form
});

// Handle form submission
profileForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from actually submitting

    // Get form data
    const name = document.getElementById('name').value;
    const regno = document.getElementById('regno').value;
    const dept = document.getElementById('dept').value;
    const section = document.getElementById('section').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Update the student table with new entry
    const studentTableBody = document.getElementById('studentTableBody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${dept}</td>
        <td>${regno}</td>
        <td>${phone}</td>
        <td>${email}</td>
    `;
    studentTableBody.appendChild(newRow); // Add new row to the table

    // Hide the form and show the student table again
    profileFormSection.style.display = 'none';
    studentFormSection.style.display = 'block';

    // Reset the form fields
    profileForm.reset();
});
