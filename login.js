
// Check Login

let checkLogin = JSON.parse(localStorage.getItem("User-Login"));
if (checkLogin) {
    location.replace("/Dashboard/D-Board.html");
}

// Get Element ///////////////////////////

let logEmail = document.getElementById('login-email');
let logPass = document.getElementById('login-password');

let logData = JSON.parse(localStorage.getItem('users Data'));

let logArr = (getLogin()) ? [...getLogin()] : [];

// For Pop Up /////////////////////////

let intro = document.getElementsByClassName("intro")[0];
let modalText = document.getElementsByClassName("text")[0];
let modalBtn = document.getElementsByClassName("Box-container")[0];
let submitBtn = document.getElementsByClassName("container")[0];

console.log(submitBtn);
console.log(modalBtn);

// function =======================

function ClosePopUp() {
    modalBtn.style.display = "none";
}

function getLogin() {
    return JSON.parse(localStorage.getItem("User-Login"));
}

function setLogin(login) {
    localStorage.setItem("User-Login", JSON.stringify(login));
}

function toCheckLogin(e) {
    e.preventDefault();

    logArr = [...logArr, {
        name: logEmail.value,
        password: logPass.value,
    },]

    if (logEmail.value == "" && logPass.value == "") {
        modalText.innerHTML = `Fill All Input First`;
        modalBtn.style.display = "flex";
    }
    else if (logData == null) {
        modalText.innerHTML = `Account Not Exist Please  <a href="./Sign-Up/signUp.html">create an account</a>`;
        modalBtn.style.display = "flex";
    }
    else {
        for (var i = 0; i < logData.length; i++) {

            if (logEmail.value != logData[i].email) {
                intro.innerHTML = `Invalid email!`;
                modalText.innerHTML = `You Input a wrong email`;
                modalBtn.style.display = "flex";
            }
            else if (logPass.value != logData[i].password) {
                intro.innerHTML = `Invalid Password!!`;
                modalText.innerHTML = `You Input a wrong password`;
                modalBtn.style.display = "flex";
            }

            if (logEmail.value == logData[i].email && logPass.value == logData[i].password) {
                localStorage.setItem("log-User-Data", JSON.stringify(logData[i]))
                console.log(logData[i]);
                setLogin(logArr);
                alert("User Login Seccessfully");
                location.replace("/Dashboard/D-Board.html");
                return
            }

            logEmail.value = "";
            logPass.value = "";
        }
    }
};

// console.log("LogData", logData);