// Get the meme image element
let meme = document.getElementById("meme");

// Store the interval ID for stopping the movement
let intervalId = null;

// Function to start moving the meme image
function startMoving() {
    // Disable Start button and enable Stop button
    document.getElementById("startBtn").disabled = true;
    document.getElementById("stopBtn").disabled = false;

    // Move the image every 500 milliseconds
    intervalId = setInterval(moveMeme, 500);
}

// Function to stop the movement
function stopMoving() {
    // Enable Start button and disable Stop button
    document.getElementById("startBtn").disabled = false;
    document.getElementById("stopBtn").disabled = true;

    // Stop moving the image
    clearInterval(intervalId);
}

// Function to move the meme to a random location
function moveMeme() {
    // Generate random X and Y values within the screen limits
    let x = Math.random() * (window.innerWidth - 150);
    let y = Math.random() * (window.innerHeight - 150);

    // Move the image using style
    meme.style.left = x + "px";
    meme.style.top = y + "px";
}
