//Pin generate Part
document.querySelector("#generate-pin").addEventListener("click", function () {
  const generatedPin = Math.floor(Math.random() * 9000) + 1000;
  document.querySelector("#generate-screen").value = generatedPin;
});

// Button Capturing Part
document.getElementById("cal-body").addEventListener("click", function (e) {
  const inputButton = e.target.innerText;
  const calScreen = parseInt(document.getElementById("cal-screen").value);
  if (inputButton < 10) {
    document.getElementById("cal-screen").value += inputButton;
  } else if (inputButton == "C") {
    document.getElementById("cal-screen").value = "";
  } else if (inputButton == "<") {
    document.getElementById("cal-screen").value = document
      .getElementById("cal-screen")
      .value.slice(0, -1);
  }
});

//Submit

document.getElementById("submitId").addEventListener("click", function () {
  const generateScreen = document.querySelector("#generate-screen").value;
  const calScreen = document.getElementById("cal-screen").value;
  let message = parseInt(document.getElementById("action-number").innerText);
  if (calScreen == generateScreen) {
    document.getElementById("success-message").style.display = "block";
    document.getElementById("error-message").style.display = "none";
  } else {
    document.getElementById("error-message").style.display = "block";
    document.getElementById("success-message").style.display = "none";
    if (message <= 0) {
      document.getElementById("submitId").disabled = true;
      document.getElementById("action-id").innerHTML =
        "<h3>Attempt Failed</h3>";
    } else {
      document.getElementById("action-number").innerText = message - 1;
    }
  }
});
