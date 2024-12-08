
// Get Element ///////////////////////////

// sign Up 

let user = document.getElementById('signUp-name');
let email = document.getElementById('signUp-email');
let password = document.getElementById('signUp-password');
let city = document.getElementById('cityName');

var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/; //regex

// Get Sign-Up Span 

let userSpan = document.getElementById('span-user');
let emailSpan = document.getElementById('span-email');
let passSpan = document.getElementById('span-password');

// Save it in array using : ""

var data = (getItem()) ? [...getItem()] : [];
var login = [];

// function ///////////////////////////

function showHide(e, watch) { // for sgow and hide pass word
    console.log(e.target);
    console.log(watch);
    console.log(e.target.previousElementSibling.type);
    console.log(e.target.previousElementSibling);

    // if (e.target.previousElementSibling.type = "password") {
    //     e.target.style.color = "#ffffff";
    //     e.target.previousElementSibling.type = "text";
    // }
    // else if (e.target.previousElementSibling.type = "text") {
    //     e.target.style.color = "#000000";
    //     e.target.previousElementSibling.type = "password";
    // }
}

function signUpValidate(e, check) { // for Validation
    if (check === 'user') {
        if (e.target.value == "") {
            userSpan.style.visibility = "hidden";
        }
        else if (e.target.value.length >= 3) {
            userSpan.style.visibility = "visible";
            userSpan.innerText = "Valid User Name";
        }
        else if (e.target.value.length <= 2) {
            userSpan.style.visibility = "visible";
            userSpan.innerText = "Invalid User Name";
        }
    }

    if (check === 'email') {
        if (email.value == "") {
            emailSpan.style.visibility = "hidden";
        }
        else if (email.value.match(regex)) {
            emailSpan.style.visibility = "visible";
            emailSpan.innerText = "Valid Email Address";
        }
        else if (!email.value.match(regex)) {
            emailSpan.style.visibility = "visible";
            emailSpan.innerText = "Invalid Email Address";
        }
    }

    if (check === 'password') {
        if (e.target.value == "") {
            passSpan.style.visibility = "hidden";
        }
        else if (e.target.value.length >= 5) {
            passSpan.style.visibility = "visible";
            passSpan.innerText = "Strong Password";
        }
        else if (e.target.value.length <= 4) {
            passSpan.style.visibility = "visible";
            passSpan.innerText = "Week Password";
        }
    }
}

function setLogin(login) {
    localStorage.setItem("User-Login", JSON.stringify(login));
}

function setItem(data) { // no:2
    localStorage.setItem('users Data', JSON.stringify(data));
}

function getItem() {
    return JSON.parse(localStorage.getItem("users Data"));
}

function toSubmit(e) { // no :1
    e.preventDefault();

    if (user.value == "") {
        alert("User Name is empty");
    }
    else if (email.value == "") {
        alert("Email is empty");
    }
    else if (password.value == "") {
        alert("Password is empty");
    }
    else if (city.value == "empty") {
        alert("City is empty");
    }
    else {

        data = [...data,
        {
            name: user.value,
            email: email.value,
            password: password.value,
            city: city.value,
        },
        ];

        let logUserData = {
            name: user.value,
            email: email.value,
            password: password.value,
            city: city.value,
        }

        localStorage.setItem("log-User-Data", JSON.stringify(logUserData));

        user.value = "";
        email.value = "";
        password.value = "";

        setItem(data); // update Local-Storage,

        setLogin(login);

        location.assign("/index.html");

    }
};
