const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle navigation menu
menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close navigation menu on link click
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Reservation form functionality
document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const arrival = document.getElementById('arrival').value;
    const departure = document.getElementById('departure').value;
    const guests = document.getElementById('guests').value;

    // Simulated room data
    const rooms = [
        { id: 1, type: 'Deluxe Suite', price: 399 },
        { id: 2, type: 'Family Suite', price: 599 },
        { id: 3, type: 'Luxury Penthouse', price: 799 }
    ];

    const availableRoomsDiv = document.getElementById('availableRooms');
    availableRoomsDiv.innerHTML = ''; // Clear previous results

    rooms.forEach(room => {
        const roomDiv = document.createElement('div');
        roomDiv.className = 'room';
        roomDiv.innerHTML = `
            <h4>${room.type}</h4>
            <p>Price: $${room.price} per night</p>
            <button onclick="bookRoom(${room.id})">Book Now</button>
        `;
        availableRoomsDiv.appendChild(roomDiv);
    });
});

// Booking function
function bookRoom(roomId) {
    alert(`Room ${roomId} has been booked!`);
}

// ScrollReveal options
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// Reveal animations
ScrollReveal().reveal(".header__container .section__subheader", { ...scrollRevealOption });
ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".header__container .btn", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".room__card", { ...scrollRevealOption, interval: 500 });
ScrollReveal().reveal(".feature__card", { ...scrollRevealOption, interval: 500 });
ScrollReveal().reveal(".news__card", { ...scrollRevealOption, interval: 500 });
