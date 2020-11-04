"use strict";
console.log("here");
const loginButton = document.getElementById("login-button");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", e => {
  console.log("clicked!");
  e.preventDefault();
  const username = document.getElementById("username").value.toLowerCase();
  const password = document.getElementById("password").value.toLowerCase();
  const participantID = password;
  sessionStorage.participantID = JSON.stringify(participantID);
  
  console.log(username, password);

  if (username === "goldfarb_lab_14" && password.includes("lt") && password.includes("pw")) {
    location.href = "/instructions";
  } else {
    loginErrorMsg.style.display = "block";
  }
});