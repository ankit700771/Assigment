document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const inputType = document.getElementById('dropdown').value;
    const agree = document.getElementById('checkbox').checked ? 'Yes' : 'No';
    const resume = document.getElementById('resume').files[0] ? document.getElementById('resume').files[0].name : '';

    // Validate that all required fields are filled
    if (!name || !email || !inputType || !agree || !resume) {
        alert('Please fill in all required fields.');
        return;
    }

    // Create a new row in the table
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${inputType}</td>
        <td>${agree}</td>
        <td>${resume}</td>
    `;

    // Append the new row to the table
    document.querySelector('#dataTable tbody').appendChild(newRow);

    // Reset the form
    document.getElementById('dataForm').reset();
});

// Handle "Generate HTML" Button Click
document.getElementById('generateHtmlBtn').addEventListener('click', function() {
    // Get form data for HTML generation
    const form = document.getElementById('dataForm').outerHTML;
    const table = document.getElementById('dataTable').outerHTML;

    // Generate the HTML content to show
    const fullHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Form with Various Input Types</title>
        </head>
        <body>
            ${form}
        </body>
        </html>
    `;

    document.getElementById('codeContainer').style.display = 'inline-block';
    const codeContainer = document.getElementById('codeContainer');
    codeContainer.textContent = fullHtml; 
    document.getElementById('downloadHtmlBtn').style.display = 'inline-block';

    
});

// Handle "Download HTML" Button Click
document.getElementById('downloadHtmlBtn').addEventListener('click', function() {
    // Get the generated HTML from the code container
    const code = document.getElementById('codeContainer').textContent;

    // Create a Blob with the HTML code
    const blob = new Blob([code], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'generated_form.html'; 
    link.click();
});
