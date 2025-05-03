// Load all audio elements
const successSound = document.getElementById("successSound");
const errorSound = document.getElementById("errorSound");
const palindromeSound = document.getElementById("palindromeSound");

// Reference the form and result area
const form = document.getElementById("palindromeForm");
const resultBox = document.getElementById("resultBox");

// Listen to form submit
form.onsubmit = function (event) {
  // Prevent form from refreshing the page
  event.preventDefault();

  // Get input values
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const zip = document.getElementById("zip").value.trim();
  const word = document.getElementById("wordInput").value.trim();

  const fullName = firstName + " " + lastName;

  // Validate full name length
  if (fullName.length > 20) {
    errorSound.play();
    resultBox.innerHTML = `<span style="color: yellow;">⚠️ Name is too long. Must be under 20 characters.</span>`;
    return;
  }

  // Validate ZIP code format (5 digits)
  const zipRegex = /^\d{5}$/;
  if (!zipRegex.test(zip)) {
    errorSound.play();
    resultBox.innerHTML = `<span style="color: orange;">⚠️ ZIP code must be 5 digits.</span>`;
    return;
  }

  // Clean up word for palindrome check (remove spaces and lowercase)
  const cleaned = word.replace(/\s+/g, "").toLowerCase();
  const reversed = cleaned.split("").reverse().join("");

  // Check for palindrome and update result
  if (cleaned === reversed) {
    palindromeSound.play();
    resultBox.innerHTML = `
      <p><strong>✅ Hello, ${fullName}!</strong></p>
      <p style="color: lightgreen;">"${word}" is a palindrome!</p>
      <p>🔐 Secret Message: <em>The code is within you.</em></p>
    `;
  } else {
    successSound.play();
    resultBox.innerHTML = `
      <p><strong>✅ Hello, ${fullName}!</strong></p>
      <p style="color: red;">"${word}" is NOT a palindrome.</p>
      <p>🔐 Secret Message: <em>Still, the truth is yours to find.</em></p>
    `;
  }
};
