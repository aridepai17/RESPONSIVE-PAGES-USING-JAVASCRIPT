function generateOTP(){
    const display = document.getElementById('otp');
    const val = Math.floor(Math.random() * 9000 + 1000);
    display.innerHTML = val;
}