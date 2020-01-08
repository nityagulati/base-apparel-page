// global variables assigned to form elements
var button = document.getElementById("btn");
var email = document.getElementById("email");

// add button error state
function btnStateErr() {
  button.classList.add("btnStateErr");
}

// display error message
function printError(elemID, hintMsg) {
  document.getElementById(elemID).innerHTML = hintMsg;
}

// form reset
function formReset() {
  button.classList.remove("btnStateErr");
  printError("emailErr", "");
  emailErr = false;
}

// show/hide success message
function successMsg() {
  printError("emailErr", "Thanks. Your email has been submitted");
  email.value = "";
  setTimeout(formReset, 2 * 1000);
}

// validate form
function validateForm() {
  // define error variable with default value
  var emailErr = true;
  // validate email address
  if (email.value == "") {
    printError("emailErr", "Please enter your email address");
    btnStateErr();
  } else {
    var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/;
    if (regex.test(email.value) === false) {
      printError("emailErr", "Please enter a valid email address");
      btnStateErr();
    } else {
      successMsg();
    }
  }
  // prevent the form from being submitted if errors
  if (emailErr == true) {
    return false;
  }
}

// reset form errors on keyboard input
document.mainForm.email.oninput = function() {
  formReset();
};
