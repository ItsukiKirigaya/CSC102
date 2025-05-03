// script.js
// Function to check if the user's input is a palindrome
function checkPalindrome() {
    // Get input value from the text box
    let input = document.getElementById('userInput').value;
  
    // Remove all spaces and convert to lowercase
    let cleaned = input.replace(/\s+/g, '').toLowerCase();
  
    // Reverse the cleaned string
    let reversed = cleaned.split('').reverse().join('');
  
    // Get the result display element
    let resultBox = document.getElementById('result');
  
    // Compare and show whether it’s a palindrome
    if (cleaned === reversed) {
      resultBox.innerHTML = `"${input}" is a <strong style="color: lightgreen;">Palindrome</strong>! 🎉`;
    } else {
      resultBox.innerHTML = `"${input}" is <strong style="color: red;">NOT</strong> a Palindrome. ❌`;
    }
  }
  
  // Function to reset the input field and result box
  function resetInput() {
    document.getElementById('userInput').value = '';
    document.getElementById('result').innerHTML = '';
  }
  