console.log("newest update 12/10/20");
console.log("next update 12/11/20");
//this will run when website is loaded.
function betaweb() {
  var enterright = prompt("enter code for testers. Sorry for putting a code but this will only last until I am done developing the website and fixing the bugs in the code.If you don't know the code for the beta close this tab if you dont it will keep asking for the code. dont click ok or cancel");
  var rightcode = 1234;
  if (enterright == rightcode) {
    alert("welcome to the beta tester.");
  }else if(enterright=="james"){
    alert("welcome admin:james");
  }else if(enterright=="alexis"){
    alert("welcome sister");
    console.log("someone loged in");
  }else {
    alert("you got it wrong");
    window.onload(window.close());
  }
}
//ernwo fo edoc si semaj sival