document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("button")[0].addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission
        
        // Get the value of the email input field
        let email = document.getElementById("email").value;
        
        // Validate the email field
        if (!email) {
            alert('Please enter your email.');
            return;
        }

        alert("Your mail has been saved, you will be contacted shortly !")

    });
});
