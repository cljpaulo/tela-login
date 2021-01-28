const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnLogin.addEventListener("click", Event => {
    Event.preventDefault();
    form.classList.add("form-hide");
});

form.addEventListener("animationstart", Event => {
    if (Event.animationName === "down") {
        document.querySelector("body").style.overflow = "hidden";
    }
});

form.addEventListener("animationend", Event => {
    if(Event.animationName === "down") {
        form.style.display = "none";
        document.querySelector("body").style.overflow = "none";
    }
});