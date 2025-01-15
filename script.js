document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
    const email = document.getElementById('email').value;
    const country = document.getElementById('dropdown').value;
    const agree = document.getElementById('checkbox').checked ? 'Yes' : 'No';
    const resume = document.getElementById('resume').files[0] ? document.getElementById('resume').files[0].name : '';
    const age = document.getElementById('number').value;
    const textInput = document.getElementById('textInput').value;

    // Validate that all required fields are filled
    if (!name || !gender || !email || !country || !agree || !resume || !age || !textInput) {
        alert('Please fill in all required fields.');
        return;
    }

    // Create a new row in the table
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${gender}</td>
        <td>${email}</td>
        <td>${country}</td>
        <td>${agree}</td>
        <td>${resume}</td>
        <td>${age}</td>
        <td>${textInput}</td>
    `;

    // Append the new row to the table
    document.querySelector('#dataTable tbody').appendChild(newRow);

    // Reset the form
    document.getElementById('dataForm').reset();
});

// Handle "Download HTML" Button Click
document.getElementById('downloadHtmlBtn').addEventListener('click', function() {
    // Get the form and table content
    const form = document.getElementById('dataForm').outerHTML;
    const table = document.getElementById('dataTable').outerHTML;

    // Combine form and table HTML
    const fullHtml = `
        <html>
            <head>
                <title>Form Data</title>
                <style>
                    /* Add any necessary styles for the HTML content */
                    body { font-family: Arial, sans-serif; }
                    table { border-collapse: collapse; width: 100%; }
                    table, th, td { border: 1px solid #ddd; }
                    th, td { padding: 8px; text-align: left; }
                    th { background-color: #f2f2f2; }
                </style>
            </head>
            <body>
                <h2>Form Data</h2>
                ${form}
                ${table}
            </body>
        </html>
    `;

    // Copy the HTML to clipboard
    copyToClipboard(fullHtml);
});

// Function to copy text to clipboard
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('HTML content has been copied to your clipboard!');
}
