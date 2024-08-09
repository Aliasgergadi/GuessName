// script.js

// Simulate an admin check (in real scenarios, this should be based on user authentication)
const isAdmin = true; // Assume the user is an admin for this example

// Show the download button only if the user is an admin
if (isAdmin) {
    document.getElementById('download-excel').style.display = 'block';
}

let surveyData = []; // To store all survey responses

document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());

    // Add the form data to the surveyData array
    surveyData.push(formObject);

    // Log the form data to the console for testing purposes
    console.log('Form Data:', formObject);

    // Alert the user
    alert('Thank you for submitting the survey!');
});

document.getElementById('download-excel').addEventListener('click', function() {
    if (surveyData.length === 0) {
        alert('No data to download.');
        return;
    }

    // Use SheetJS to create an Excel file from surveyData
    const worksheet = XLSX.utils.json_to_sheet(surveyData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Survey Data');

    // Generate an Excel file
    XLSX.writeFile(workbook, 'survey_data.xlsx');
});

