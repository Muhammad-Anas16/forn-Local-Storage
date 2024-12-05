
// Get Element ///////////////////////////

// Login 

let loginEmail = document.getElementById('login-email');
let loginPassword = document.getElementById('login-password');

var loginData = JSON.parse(localStorage.getItem('users Data'));

// function =======================

function toCheckLogin(e) {
    e.preventDefault();
};
