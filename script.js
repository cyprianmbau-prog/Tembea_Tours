// function to get the message according to user input.
function getName() {
    const tourSite = document.getElementById("tourSite").value;
    let message = "";

    // the if statement to determine the message to give back
    if (tourSite === "AMBOSELI NATIONAL PARK") {
        message = "welcome to kenya.Enjoy the wildlife tour with us.";
    }
    else if (tourSite === "MAASAI MARA PARK") {
        message = "Welcome to the best tour site in Kenya enjoy your trip!";
    }
    else if (tourSite === "KRUGER PARK") {
        message = "visit South Africa's best tourist attraction site.";
    }
    else if (tourSite === "SERENGETI NATIONAL PARK") {
        message = "Welcome to Tanzania where you will enjoy the wildlife view with us.";
    }

    else {
        message = "Thank you for visiting our site. Please choose on site of your choice";
    }


    document.getElementById("result").textContent = message;
    result.style.backgroundColor = "darkgreen";
    result.style.border = "2px solid red";
    result.style.fontSize = "20px";


    // a reload function to refresh the page after 5secs
    setTimeout(function () {
        location.reload();
    }, 5000);

}

// function to count the number of users who have applied to visit.
let touristCount = 0;
function countTourists() {
    let name = document.getElementById("touristName").value;

    // if statement to determine whether to add a user and if not a message is shown
    if (name !== "") {
        touristCount++;

        // message when user enters his/her first name
        document.getElementById("display").textContent =
            "Tourists applied:" + touristCount;
        display.style.backgroundColor = "red";
        display.style.border = "2px solid black";
        display.style.fontSize = "20px";

        document.getElementById("touristName").value = "";
    }
    // message if user fails to input hhs/her first name
    else {
        document.getElementById("display").textContent =
            "Please fill the first name field above.";
        display.style.backgroundColor = "red";
        display.style.border = "2px solid black";
        display.style.fontSize = "20px";


    }
}