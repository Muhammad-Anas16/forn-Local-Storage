
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

var Data = (getItem()) ? [...getItem()] : [];

// function ///////////////////////////

function signUpValidate(e, check) {
    if (check === 'user') {
        if (e.target.value == "") {
            userSpan.style.visibility = "visible";
            userSpan.innerText = "Enter User Name";
        }
        else if (e.target.value.length < 3) {
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
            userSpan.style.visibility = "visible";
            userSpan.innerText = "Enter User Name";
        }
        else if (e.target.value.length < 3) {
            userSpan.style.visibility = "visible";
            userSpan.innerText = "Invalid Password";
        }
        else if (e.target.value.length > 3) {
            userSpan.style.visibility = "visible";
            userSpan.innerText = "Valid Password";
        }
    }
}

function getItem() {
    return JSON.parse(localStorage.getItem('users Data'));
}

function setItem(data) {
    localStorage.setItem('users Data', JSON.stringify(data));
}

function toSubmit(e) {
    e.preventDefault();
    userData = [...userData, {
        name: user.value,
        email: email.value,
        password: password.value,
    }];

    setItem(userData);

};
