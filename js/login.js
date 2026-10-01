
function checkNumber() {
    const phone = document.getElementById("phone").value;
    const continueBtn = document.getElementById("continueBtn");
    const phoneError = document.getElementById("phoneError");
    document.getElementById("phone").value =
        phone.replace(/\D/g, "");
    const number = document.getElementById("phone").value;
    if (number.length === 10) {
        continueBtn.disabled = false;
        phoneError.innerText = "";
    } else {
        continueBtn.disabled = true;
        if (number.length <11) {
            phoneError.innerText =
                "Enter a valid 10 digit mobile number";
        } else {
            phoneError.innerText = "";
        }
    }
}
function sendOTP() {
    const phone = document.getElementById("phone").value;
    document.getElementById("phoneSection").style.display = "none";
    document.getElementById("otpSection").style.display = "block";
    document.getElementById("showPhone").innerText = "+91 " + phone;
}
function verifyOTP() {
    const otp = document.getElementById("otp").value;
    const otpError = document.getElementById("otpError");
    if (otp === "123456") {
        otpError.innerText = "";
        document.getElementById("otpSection").style.display = "none";
        document.getElementById("nameSection").style.display = "block";
    } else {
        otpError.innerText = "Invalid OTP . Enter Valid OTP ";
    }
}
function saveUser() {
    const name =  document.getElementById("userName").value.trim();
    const phone = document.getElementById("phone").value;
    const nameError = document.getElementById("nameError");
    if (name === "") {
        nameError.innerText =
            "Please enter your name";
        return;
    }
    if (name.length < 4) {
        nameError.innerText =
            "Name must contain at least 4 characters";
        return;
    }
    localStorage.setItem("userName", name);
    localStorage.setItem("userMobile", phone);
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "/HTML/index.html";
}

function edit(){
    
}
function goBack() {
    document.getElementById("otpSection").style.display = "none";
    document.getElementById("phoneSection").style.display = "block";
    document.getElementById("otp").value = "";
    document.getElementById("otpError").innerText = "";
}
