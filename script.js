const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnLogin.addEventListener("click", Event => {
    Event.preventDefault();

    const fields = [... document.querySelectorAll(".input-block input")];

    fields.forEach(field => {
        if (field.value === "") form.classList.add("validate-error");
    });

    const formError = document.querySelector(".validate-error");
    if (formError) {
        formError.addEventListener("animationend", Event => {
            if (Event.animationName === "nono") {
                formError.classList.remove("validate-error");
            }
        });
    } else {
        form.classList.add("form-hide");
    }
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