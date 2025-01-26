document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("registration-form");

    const feedbackDiv = document.getElementById("form-feedback");

    const userInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const userValue = userInput.value;
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    const username = userValue.trim(); 
    const email = emailValue.trim(); 
    const password = passwordValue.trim(); 

    function myFunc(event){
        event.preventDefault();
        let isValid = true;
        let messages = [];

        if(username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
            return;
        } 
        if(email.includes('@') && email.includes('.')) {
            isValid = false;
            messages.push("Please enter valid email address.");
            return;
        } 
        if(password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long");
            return;
        } ;

        feedbackDiv.setAttribute("style.display", "block");

        if(isValid) {
            
            feedbackDiv.setAttribute("textContent", "Registration successful!");
            feedbackDiv.setAttribute("style.color", "#28a745");

        } else {
            feedbackDiv.innerHTML =  messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"
        }
    };

    form.addEventListener("submit", myFunc("submit"));

});

