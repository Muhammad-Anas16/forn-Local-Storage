
// Get Element ///////////////////////////

// Login 

let loginEmail = document.getElementById('login-email');
let loginPassword = document.getElementById('login-password');

// Get Login Span 

let logEmailSpn = document.getElementById('e-spn');
let logPassSpn = document.getElementById('p-spn');

var loginData = JSON.parse(localStorage.getItem('users Data'));

console.log(loginData);

// function ///////////////////////////

function loginValidateInp(e, check) {

    if (check == 'email') {
        // if (e.target.value.length == "") {
        //     logEmailSpn.style.visibility = "visible";
        //     logEmailSpn.innerText = "Enter Email Address";
        // }

        console.log(e.target);
    }

    if (check == 'password') {
        if (e.target.value.length == "") {
            logPassSpn.style.visibility = "visible";
            logPassSpn.innerText = "Enter Password";
        }
        else if (e.target.value.length < 6) {
            logPassSpn.style.visibility = "visible";
            logPassSpn.innerText = "Week Password";
        }
        else if (e.target.value.length >= 8) {
            logPassSpn.style.visibility = "visible";
            logPassSpn.innerText = "Strong Password";
        }
    }

}

function toCheckLogin(e) {
    e.preventDefault();
    

};
