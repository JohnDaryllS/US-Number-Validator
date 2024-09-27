document.getElementById('check-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value.trim();
    const resultsDiv = document.getElementById('results-div');

    if (!userInput) {
        alert("Please provide a phone number");
        return;
    }

    const validPatterns = [
        /^1\s*\(\d{3}\)\s*\d{3}-\d{4}$/, // 1 (555) 555-5555
        /^1\s*\d{3}-\d{3}-\d{4}$/,      // 1 555-555-5555
        /^1\s*\d{3}\s*\d{3}\s*\d{4}$/,  // 1 555 555 5555
        /^1\(\d{3}\)\d{3}-\d{4}$/,      // 1(555)555-5555
        /^\(\d{3}\)\d{3}-\d{4}$/,       // (555)555-5555
        /^\d{3}-\d{3}-\d{4}$/,          // 555-555-5555
        /^\d{10}$/,                     // 5555555555
    ];

    const invalidPatterns = [
        /^([2-9]\d{2}|\(0\d{2}\)|\(\d{3}\)\d{2,}|1[0-9]{0,2})\s*([2-9]\d{2}|\(\d{2,}\)|\d{2,})[-\s]?(\d{4})$/,
        /[^0-9\s()-]/,                   // Non-numeric characters
        /^1?\s?0{3,}/,                   // Area code with zeros
        /^0{3,}/,                        // Invalid area code
        /^\d{11,}$/,                     // More than 10 digits
    ];

    const isValid = validPatterns.some(pattern => pattern.test(userInput));
    const isInvalid = invalidPatterns.some(pattern => pattern.test(userInput));

    if (isValid) {
        resultsDiv.textContent = `Valid US number: ${userInput}`;
    } else if (isInvalid) {
        resultsDiv.textContent = `Invalid US number: ${userInput}`;
    } else {
        resultsDiv.textContent = `Invalid US number: ${userInput}`;
    }
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('user-input').value = '';
    document.getElementById('results-div').textContent = '';
});