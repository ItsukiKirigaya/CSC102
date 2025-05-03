// script.js

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Grab the form element
    const form = document.getElementById("userForm");
  
    // Attach a submit handler to the form
    form.onsubmit = function (event) {
      // Prevent form from actually submitting to a new page
      event.preventDefault();
  
      // Get values from the form
      const first = document.getElementById("firstName").value.trim();
      const last = document.getElementById("lastName").value.trim();
      const zip = document.getElementById("zipCode").value.trim();
      const input = document.getElementById("userInput").value;
  
      const fullName = first + " " + last;
      const resultBox = document.getElementById("result");
  
      // Check if full name is longer than 20 characters
      if (fullName.length > 20) {
        resultBox.innerHTML = `<span style="color: yellow;">⚠️ Name is too long. Please keep it under 20 characters.</span>`;
        return;
      }
  
      // Validate ZIP code as exactly 5 digits
      const zipRegex = /^\d{5}$/;
      if (!zipRegex.test(zip)) {
        resultBox.innerHTML = `<span style="color: orange;">⚠️ ZIP code must be exactly 5 digits.</span>`;
        return;
      }
  
      // Clean the user input for palindrome check
      const cleaned = input.replace(/\s+/g, '').toLowerCase();
      const reversed = cleaned.split('').reverse().join('');
  
      // Check if input is a palindrome
      if (cleaned === reversed) {
        resultBox.innerHTML = `
          <p><strong>✅ Success, ${fullName}!</strong></p>
          <p><span style="color: lightgreen;">"${input}" is a palindrome.</span></p>
          <p>🔐 Secret Message: <em>The code is within you.</em></p>
        `;
      } else {
        resultBox.innerHTML = `
          <p><strong>✅ Hello, ${fullName}!</strong></p>
          <p><span style="color: red;">"${input}" is not a palindrome.</span></p>
          <p>🔐 Secret Message: <em>Still, the truth is yours to find.</em></p>
        `;
      }
    };
  });
  