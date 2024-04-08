// Validation for login form
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Here you can add your login logic, for now, I'm just logging the values
    console.log("Username: ", username);
    console.log("Password: ", password);
});

// Validation for signup form
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Here you can add your signup logic, for now, I'm just logging the values
    console.log("Username: ", username);
    console.log("Email: ", email);
    console.log("Password: ", password);
});
