const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});

 var usernameRegex = /^[A-Za-z\s]+$/;
 var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;


function validateName() {
    var username = document.getElementById("name").value;
    var nameInput = document.getElementById("name");
    if (!usernameRegex.test(username)) {
        nameInput.style.borderColor = "red"; 
       
    } else {
        nameInput.style.borderColor = "green"; 
    }
}


function validateEmail() {
    var email = document.getElementById("signup-email").value;
    var emailInput = document.getElementById("signup-email");
    if (!emailRegex.test(email)) {
        emailInput.style.borderColor = "red"; 
    } else {
        emailInput.style.borderColor = "green";
    }
}


function validatePassword() {
    var password = document.getElementById("password").value;
    var passwordInput = document.getElementById("password");
    if (!passwordRegex.test(password)) {
        passwordInput.style.borderColor = "red"; 

    } else {
        passwordInput.style.borderColor = "green"; 
    }
}

function Register() {
    var username = document.getElementById("name").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("password").value;



    if (!usernameRegex.test(username)) {
        alert("Invalid username format. Please enter a valid name.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Invalid email format. Please enter a valid email.");
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("Invalid password format. Please enter a valid password.");
        return;
    }

    
    var userData = {
        name: username,
        email: email,
        password: password
    };

    
    localStorage.setItem("user", JSON.stringify(userData));

    
    document.getElementById("name").value = "";
    document.getElementById("signup-email").value = "";
    document.getElementById("password").value = "";


    document.getElementById("name").style.borderColor = "";
    document.getElementById("signup-email").style.borderColor = "";
    document.getElementById("password").style.borderColor = "";

   
    alert("Registration Successful");
    window.location.href="index.html"
}




function loginValidation() {
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

   
    var storedUserData = JSON.parse(localStorage.getItem("user"));

    if (!storedUserData) {
        alert("No user data found! Please sign up.");
        return false;
    }

    if (email !== storedUserData.email || password !== storedUserData.password) {
        alert("Invalid email or password. Please try again.");
        return false;
    }

   
    alert("Login successful!");
    window.location.href = "index.html";

    return false;
}





