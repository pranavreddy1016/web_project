const urlParams = new URLSearchParams(window.location.search);
const tour = urlParams.get("tour");
const price = urlParams.get("price");
if (tour) { 
    const tourName = tour.replace(/-/g, " ");
    document.getElementById("tour").value = tourName;
}

if (price) {
    document.getElementById("price").value =
        "₹ " + price + " / Person";
}


const bookingForm = document.getElementById("bookingForm");
bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const date = document.getElementById("date").value;
    const persons = document.getElementById("persons").value;

    if (!tour) {
        alert("Please select a tour first.");
        return;
    }
    const totalPrice = price * persons;
    console.log("Tour:", tour);
    console.log("Name:", name);
    console.log("Mobile:", mobile);
    console.log("Travel Date:", date);
    console.log("Persons:", persons);
    console.log("Price Per Person:", price);
    console.log("Total Price:", totalPrice);
   
    alert(
        "Booking Submitted Successfully!\n\n" +
        "Tour: " + tour.replace(/-/g, " ") + "\n" +
        "Name: " + name + "\n" +
        "Mobile: " + mobile + "\n" +
        "Travel Date: " + date + "\n" +
        "Persons: " + persons + "\n" +
        "Total Price: ₹" + totalPrice
    );



    bookingForm.reset();
});
