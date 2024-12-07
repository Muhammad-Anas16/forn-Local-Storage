
// Get Element ///////////////////////////

// sign Up 

let user = document.getElementById('signUp-name');
let email = document.getElementById('signUp-email');
let password = document.getElementById('signUp-password');

// Get Sign-Up Span 

let userSpan = document.getElementById('span-user');
let emailSpan = document.getElementById('span-email');
let passSpan = document.getElementById('span-password');


// Save it in array using : ""

var data = (getItem()) ? [...getItem()] : [];
var login = [];

// function ///////////////////////////

function signUpValidate(e, check) { // for Validation
    if (check === 'user') {
        if (e.target.value == "") {
            userSpan.style.visibility = "hidden";
        }
        else if (e.target.value.length < 2) {
            userSpan.style.visibility = "visible";
            userSpan.innerText = "Invalid User Name";
        }
        else if (e.target.value.length > 3) {
            userSpan.style.visibility = "visible";
            userSpan.innerText = "Valid User Name";
        }
    }

    if (check === 'email') {
        console.log(e.target);
    }

    if (check === 'password') {
        if (e.target.value == "") {
            passSpan.style.visibility = "hidden";
        }
        else if (e.target.value.length < 6) {
            passSpan.style.visibility = "visible";
            passSpan.innerText = "Week Password";
        }
        else if (e.target.value.length > 7) {
            passSpan.style.visibility = "visible";
            passSpan.innerText = "Strong Password";
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
    else {

        data = [...data,
        {
            name: user.value,
            email: email.value,
            password: password.value,
        },
        ];

        login = [...login,
        {
            email: email.value,
            password: password.value,
        }
        ];

        user.value = "";
        email.value = "";
        password.value = "";

        setItem(data); // update Local-Storage,

        setLogin(login);

        location.assign("/index.html");

    }
};
