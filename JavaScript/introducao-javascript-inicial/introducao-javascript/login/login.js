var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");

btnSignin.addEventListener("click", function() {
    body.className = "sign-in-js";
});

btnSignin.addEventListener("click", function() {
    body.className = "sign-up-js";
});