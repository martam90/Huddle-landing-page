let form = document.getElementById('form');
let regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


function showError(errorElementId, inputElementId, errorMessage) {
    let errorElement = document.getElementById(errorElementId);
    let inputElement = document.getElementById(inputElementId);
    inputElement.classList.add('active');
    errorElement.classList.add('active');
    errorElement.innerHTML = errorMessage;
}

function hideError(errorElementId, inputElementId) {
    let errorElement = document.getElementById(errorElementId);
    let inputElement = document.getElementById(inputElementId);
    inputElement.classList.remove('active');
    errorElement.classList.remove('active');
}

form.addEventListener('submit', (event) => {
    if (form.email.value.trim() === "") {
        showError("error", "email", "This field cannot be empty");
        event.preventDefault();
    } else if (!regEx.test(form.email.value)) {
        showError("error", "email", "Check your email please");
        event.preventDefault();
    } else {
        hideError("error");
    }
});
    
