// Getting Required Elements
const lengthSlider = document.querySelector(".pass-length input");
const options = document.querySelectorAll(".option input");
const generateButton = document.querySelector(".generate-button");

const characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "^!$%&|[](){}:;.,*+-#@<>~"
};

// Generating Password
const generatePassword = () => {
  let staticPassword = "";
  let randomPassword = "";
  let passLength = lengthSlider.value;

  options.forEach(option => {
    if (option.checked) { // Looping Through Each Option's Checkbox
      // Adding Particular Key Value
      staticPassword += characters[option.id];
    }
  });

  for (let i = 0; i < passLength; i++) {
    randomPassword += staticPassword[Math.floor(Math.random() * staticPassword.length)];
  }

  console.log(randomPassword);
}

// Updating Slider
const updateSlider = () => {
  // Passing Slider Value As Counter Text
  document.querySelector(".pass-length span").innerText = lengthSlider.value;
}

updateSlider();

lengthSlider.addEventListener("input", updateSlider);
generateButton.addEventListener("click", generatePassword);