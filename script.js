// function to get the message according to user input.
function getName() {
    const tourSite = document.getElementById("tourSite").value;
    let message = "";

    // the if statement to determine the message to give back
    if (tourSite === "AMBOSELI NATIONAL PARK") {
        message = "welcome to Ammboseli park located in  Kajiado county of Kenya.It's located a the foot of M.Kilimanjaro and this gives you and advatage of veiwing the Africa's highest mountain.<br>We will reach out to you through your phone for further information.";
    }
    else if (tourSite === "MAASAI MARA PARK") {
        message = "Welcome to the mos famous tourist site in Kenya.Located in Narok county and borders Serengeti park in Tanzania.We will reach out to you through your phone for further information.";
    }
    else if (tourSite === "KRUGER PARK") {
        message = "Welcome to South Africa's best tourist attraction site.It is located at Cape Town, the capital city of south Africa.We will reach out to you through your phone for further information.";
    }
    else if (tourSite === "SERENGETI NATIONAL PARK") {
        message = "Welcome to  the Tanzania most famous tourist site.It borders Maasai mara park of Kenya and this makes you have a veiw of the wildbeests migration.We will reach out to you through your phone for further information.";
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

        document.getElementById("touristName").value;
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