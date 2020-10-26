const button = document.querySelector(".btn");
const form = document.querySelector(".form");

button.addEventListener("click", function (e) {
    e.preventDefault();
    const newText = document.createElement("input");
    newText.type = "text";
    newText.classList.add("text");
    if (form[form.length - 2].value.indexOf("555") !== -1) {
        newText.value = form[form.length - 2].value.replace(/555/g,"---");
    } else if ((form.length - 2) % 2 === 0){
        newText.value = form[form.length - 2].value.toUpperCase();
    } else {
        newText.value = form[form.length - 2].value.toLowerCase();
    }

    button.before(newText);
})