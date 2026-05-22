const password = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");

password.addEventListener("input", () => {

    let value = password.value;
    let strength = 0;

    // Condiions
    if (Value.length >=8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[a-z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[^A-Za-z0-9]/.test(value))

    // Strength levels
    if (score <= 2){
        strength.style.width = "30%"
        strength.style.background = "red";
        message.textContent = "Weak Password";
        message.style.color = "red";
    }
    else if(score === 3 || score === 4){
        strength.style.width = "70%";
        strength.style.background = "orange";
        message.textContent = "Medium Password";
        message.style.color = "orange";
    }
    else{
        Strength.style.width = "100%";
        strength.style.background = "green";
        message.textContent = "Strong Password";
        message.style.color = "green";
    }
    // Empty input reset
    if (value.length === 0) {
        strength.style.width = "0%";
        message.textContent = "";
    }

});