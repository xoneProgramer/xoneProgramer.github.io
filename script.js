// Array of words to cycle through
const words = ["coding", "gaming", "automation", "scripting", "efficiency", "innovation"];
let index = 0;

const changingText = document.getElementById("changing-text");
const downloadButton = document.getElementById("download-button");

// Function to update the changing text with fade-out/in effect
function changeText() {
  changingText.style.opacity = '0';
  setTimeout(() => {
    changingText.textContent = words[index];
    changingText.style.opacity = '1';
    index = (index + 1) % words.length;
  }, 500);
}

// Initialize and change text every 3 seconds
changeText();
setInterval(changeText, 3000);

// Download button click event with click-effect and file download
downloadButton.addEventListener("click", function(e) {
  // Create click effect ripple
  const rect = downloadButton.getBoundingClientRect();
  const circle = document.createElement("div");
  circle.classList.add("click-effect");
  circle.style.left = `${e.clientX - rect.left}px`;
  circle.style.top = `${e.clientY - rect.top}px`;
  downloadButton.appendChild(circle);
  setTimeout(() => {
    circle.remove();
  }, 600);

  // Trigger the download of XoneExecutor.exe
  const link = document.createElement('a');
  link.href = 'XoneExecutor.exe';
  link.download = 'XoneExecutor.exe';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
