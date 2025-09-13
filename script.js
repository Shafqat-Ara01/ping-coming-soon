const form = document.querySelector("#Form");
const emailInput = document.querySelector("#email");
const message = document.querySelector(".message");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailValue = emailInput.value.trim();

  if (emailPattern.test(emailValue)) {
    message.textContent = "You will be notified!";
    message.classList.add("success");
    message.classList.remove("error");
  } else {
    message.textContent = "Please provide a valid email address!";
    message.classList.add("error");
    message.classList.remove("success");
  }
});
