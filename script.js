const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnLogin.addEventListener("click", Event => {
    Event.preventDefault();
    form.classList.add("form-hide");
});