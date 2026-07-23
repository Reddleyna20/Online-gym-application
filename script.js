const form = document.getElementById("registrationForm");

const message = document.getElementById("successMessage");

form.addEventListener("submit", function(event){

    event.preventDefault();

    message.textContent = "🎉 Registration Successful! Welcome to Redd's Gym. We would be in contact with you soon. Thank you for registering!";
    

    message.style.display = "block";

    form.reset();

});