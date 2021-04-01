// GETTING OUT THE DOMS
const ticketQuantity = document.getElementById('ticket');
const ticketPrice = document.getElementById("price");
const movie = document.getElementById('movie');
const nilSeats = document.querySelectorAll('.row .seats:not(.occupied)');
const cinema = document.querySelector('.cinema');

let ticketPrices = +movie.value;


// FUNCTIONS
function seatCounter() {
    const selectedSeats = document.querySelectorAll('.row .seats.selected');
    // console.log(selectedSeats);
    ticketQuantity.innerText = selectedSeats.length;
    ticketPrice.innerText = selectedSeats.length * ticketPrices;
}

// EventListener for the movie selection
movie.addEventListener('change', (e)=> {
    ticketPrices = e.target.value;
    seatCounter();
})

// EVENT LISTENERS for the seats
cinema.addEventListener('click', (e)=>{
    // now, we are trying to select the nil seats.
    if(e.target.classList.contains('seats') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        seatCounter();
    }
})