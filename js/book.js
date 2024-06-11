document.addEventListener('DOMContentLoaded', () => {
    const name = sessionStorage.getItem('concertName');
    const date = sessionStorage.getItem('concertDate');
    const price = sessionStorage.getItem('concertPrice');
    
    if (!name || !date || !price) {
        alert('Concert details not found. Please select a concert again.');
        window.location.href = 'schedule.html';
        return;
    }

    document.getElementById('concert-name').innerHTML = "<strong>Show: </strong>" + name;
    document.getElementById('concert-date').innerHTML = "<strong>Date: </strong>" + date;
    document.getElementById('concert-price').innerHTML = "<strong>Price: </strong>" + price + "€";
});


document.getElementById("download").addEventListener('click', function(event) {
    event.preventDefault();

    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var numTickets = document.getElementById('num-tickets').value;

    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || phone.trim() === '' || numTickets.trim() === '') {
        alert('Please fill out all the required fields.');
    } else {
        generateTicket();
    }
});


function generateTicket() {
    const name = sessionStorage.getItem('concertName');
    const date = sessionStorage.getItem('concertDate');
    const price = sessionStorage.getItem('concertPrice');
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var ticketContent = "Accor Arena Ticket\nEvent: " + name + "\nDate: " + date + "\nPrice: " + price + "\nTicket to: " + lastName + " " + firstName + "\nSeat: A10";

    var blob = new Blob([ticketContent], { type: "text/plain;charset=utf-8" });

    var anchor = document.createElement("a");
    anchor.download = "Accor Arena Ticket.txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.style.display = "none";

    document.body.appendChild(anchor);


    anchor.click();

    document.body.removeChild(anchor);
}