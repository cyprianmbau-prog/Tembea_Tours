// function to check if age is eligible
function getText() {
    let age = document.getElementById("ageInput").value;

    // if statement to determine whether user is legible to continue
    if (age === "") {
        document.getElementById("display").innerText = "Please enter your age.";
        return;
    }

    if (age < 18) {
        document.getElementById("display").innerText = "Your not eliglible to continue with this site.";
    } else {
        document.getElementById("display").innerText = "Welcome! You can continue.";
    }
}