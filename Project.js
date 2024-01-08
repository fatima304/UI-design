function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
function validateForm() {
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var phone = document.contactForm.Phone.value;

    var nameErr = emailErr = mobileErr= true;
    
    if(name == "") {
        printError("error", "enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("error", "enter a valid name again");
        } else {
            printError("error", "");
            nameErr = false;
        }
    }
    
    if(email == "") {
        printError("error", "enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("error", "enter a valid email address again");
        } else{
            printError("error", "");
            emailErr = false;
        }
    }
    
    if(Phone == "") {
        printError("error", "enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(Phone) === false) {
            printError("error", "enter a valid 10 digit mobile number");
        } else{
            printError("error", "");
            mobileErr = false;
        }
    }
  
    if((nameErr || emailErr || mobileErr ) == true) {
       return false;
    } else {
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + Phone + "\n" +

        alert(dataPreview);
    }
};