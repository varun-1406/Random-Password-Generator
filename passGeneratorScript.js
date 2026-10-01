const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%!^&*";
const recentPasswords = [];

const output = document.getElementById("output");
const slider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const historyDropdown = document.getElementById("historyDropdown");

// Cryptographically secure random password generation
function createPassword(len) {
  const randomArray = new Uint32Array(len);
  window.crypto.getRandomValues(randomArray);

  let pass = "";
  for (let i = 0; i < len; i++) {
    pass += chars[randomArray[i] % chars.length];
  }
  return pass;
}

// Keep a rolling history of the last 10 passwords
function saveToHistory(pass) {
  recentPasswords.unshift(pass);
  if (recentPasswords.length > 10) {
    recentPasswords.pop();
  }

  historyDropdown.innerHTML = '<option value="" disabled selected>Select a recent password</option>';
  recentPasswords.forEach((item, index) => {
    const opt = document.createElement("option");
    opt.value = item;
    opt.textContent = `${index + 1}. ${item}`;
    historyDropdown.appendChild(opt);
  });
}

// Generate action handler
function handleGenerate() {
  const len = parseInt(slider.value, 10);
  const newPass = createPassword(len);
  output.value = newPass;
  saveToHistory(newPass);
}

// Synchronize length slider with numeric display
slider.addEventListener("input", () => {
  lengthValue.textContent = slider.value;
});

// Event listener for generate button
generateBtn.addEventListener("click", handleGenerate);

// Event listener for copy button
copyBtn.addEventListener("click", () => {
  if (!output.value) return;
  navigator.clipboard.writeText(output.value);
  copyBtn.textContent = "Copied!";
  setTimeout(() => {
    copyBtn.textContent = "Copy";
  }, 1200);
});

// Event listener for selecting from past history
historyDropdown.addEventListener("change", (e) => {
  if (e.target.value) {
    output.value = e.target.value;
  }
});

// Initial run on page load
handleGenerate();