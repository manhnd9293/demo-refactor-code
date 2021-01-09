class Customer {

}

const reservationQueue = [];


function addReservation(aCustomer, priority) {
    reservationQueue.push(aCustomer);
}

function bookTicket(aCustomer) {
    addReservation(aCustomer)
}
