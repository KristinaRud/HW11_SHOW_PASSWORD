"use strict";

const form = document.querySelector(".password-form");
const spanMsg = form.querySelector("#msg");

form.addEventListener("click", (e) => {
  const iconTarget = e.target.closest("i");

  if (iconTarget) {
    const input = iconTarget.parentNode.querySelector("input");
    iconTarget.classList.toggle("fa-eye");
    iconTarget.classList.toggle("fa-eye-slash");

    const type = iconTarget.classList.contains("fa-eye-slash") ? "text" : "password";
    input.setAttribute("type", type);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstInputValue = form.querySelector("#first").value;
  const secondInputValue = form.querySelector("#second").value;
  if (firstInputValue !== secondInputValue || firstInputValue === "" || secondInputValue === "") {
    spanMsg.textContent = "Потрібно ввести однакові значення";
  } else {
    alert("You are welcome");
  }


});

form.addEventListener("focus", (e) => {
  const target = e.target.closest("input");
  if (target) {
    spanMsg.textContent = "";
  }
},
  { capture: true }
);
