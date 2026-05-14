// function to get the message according to user input.
function getName() {
    const tourSite = document.getElementById("tourSite").value;
    let message = "";

    // the if statement to determine the message to give back
    if (tourSite === "amboseli") {
        message = "welcome to kenya.Enjoy the wildlife tour with us.";
    }
    else if (tourSite === "maasai mara") {
        message = "Welcome to the best tour site in Kenya enjoy your trip!";
    }
    else if (tourSite === "kruger") {
        message = "visit South Africa's best tourist attraction site.";
    }
    else if (tourSite === "seregenti") {
        message = "Welcome to Tanzania where you will enjoy the wildlife view with us.";
    }
    else {
        message = "Thank you for visiting our site. Please choose on site of your choice";
    }

    document.getElementById("result").textContent = message;
    result.style.backgroundColor = "darkgreen";
    result.style.border = "2px solid red";
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
        document.getElementById("touristName").value = "";
    }
    // message if user fails to input hhs/her first name
    else {
        document.getElementById("display").textContent =
            "Please fill the first name field above.";
        display.style.backgroundColor = "red";
        display.style.border = "2px solid black";

    }
}