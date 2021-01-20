var lse = localStorage.setItem("email", email);
var lsun = localStorage.setItem("username", username);
var lsp = localStorage.setItem("password", password);
var glse = localStorage.getItem("email");
var glsp = localStorage.getItem("password");
//this is the signup this use the localStorage of the brownser.
function signup() {
  var username = prompt("create your username");
  lsun = localStorage.setItem("username", username);
  var email = prompt("what is the email you going to use");
  lse = localStorage.setItem("email", email);
  var password = prompt("create a strong password you remember");
  lsp = localStorage.setItem("password", password);
}
//this is the login it allows the use they put into the signup localStorage to see if there is account that is created.
function login() {
  glse = localStorage.getItem("email");;
  glsp = localStorage.getItem("password");
  var wE = prompt("what is your email");
  var wP = prompt("what is your password");
  if (wE == glse && wP == glsp) {
    alert("this is correct");
  } else {
    alert("this is wrong");
  }
}
//ernwo fo edoc si semaj sival