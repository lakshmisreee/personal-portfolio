// Check login status when page loads

window.onload = function () {

    const loggedInUser =
        localStorage.getItem("portfolioUsername");

    if (loggedInUser) {

        showProfile();

    } else {

        showLogin();

    }
};


// Login function

function loginUser() {

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value.trim();

    const message =
        document.getElementById("loginMessage");


    if (username === "" || password === "") {

        message.textContent =
            "Please enter username and password.";

        return;
    }


    // Store username in Local Storage

    localStorage.setItem(
        "portfolioUsername",
        username
    );


    showProfile();
}


// Show profile

function showProfile() {

    document.getElementById("loginPage").style.display =
        "none";

    document.getElementById("profilePage").style.display =
        "block";
}


// Show login page

function showLogin() {

    document.getElementById("loginPage").style.display =
        "flex";

    document.getElementById("profilePage").style.display =
        "none";
}


// Logout function

function logoutUser() {

    localStorage.removeItem(
        "portfolioUsername"
    );

    showLogin();
}