var lse=localStorage.setItem("email",email);
var lsun=localStorage.setItem("username",username);
var lsp=localStorage.setItem("password",password);
var glse=localStorage.getItem("email");
var glsp=localStorage.getItem("password");
function signup(){
var username=prompt("create your username");
lsun=localStorage.setItem("username",username);
var email=prompt("what is the email you going to use");
lse=localStorage.setItem("email",email);
var password=prompt("create a strong password you remember");
lsp=localStorage.setItem("password",password);
}
function login(){
glse=localStorage.getItem("email");;
glsp=localStorage.getItem("password");
var wE=prompt("what is your email");
var wP=prompt("what is your password");
if(wE==glse&&wP==glsp){
  alert("this is correct");
}else{
  alert("this is wrong");
}
}