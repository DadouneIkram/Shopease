$(".carousel").owlCarousel({
  loop: true,
  margin: 60,
  autoplay: false,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  nav: true,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(".carousell").owlCarousel({
  loop: true,
  margin: 50,
  autoplay: false,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  nav: true,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});

var quantityElement = document.getElementById("number_quantite");
var incrementButton = document.getElementsByClassName(".fa-square-plus");
var decrementButton = document.getElementsByClassName(".fa-square-minus");
// Initial quantity value
var quantity = 1;
// Function to increment the quantity
function increment() {
  quantity++;
  updateQuantity();
}

// Function to decrement the quantity
function decrement() {
  if (quantity > 0) {
    quantity--;
    updateQuantity();
  }
}

// Function to update the displayed quantity
function updateQuantity() {
  quantityElement.textContent = quantity;
}

updateQuantity();

const scrollToTopButton = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});



document.getElementById("signbutton").addEventListener("click", function () {
  document.querySelector(".modal").style.display = "flex";
});

document.getElementById("signbutton-up").addEventListener("click", function () {
  document.querySelector(".modal-up").style.display = "flex";
});

// Get a reference to the modal and modal content
const modal = document.getElementById("model");
const modalContent = document.getElementById("modal-con");

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Event listener to open the modal when needed (e.g., when clicking a button)
// You should have a button or trigger element that calls openModal() when clicked.
// Example: document.getElementById('openModalButton').addEventListener('click', openModal);

// Event listener to close the modal when clicking outside the modal content
document.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

// Event listener to prevent clicks inside the modal from closing it
modalContent.addEventListener("click", function (event) {
  event.stopPropagation();
});

// Event listener to close the modal when the Escape key is pressed
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});


const modalUp = document.getElementById("modal-up");
const modalContentUp = document.querySelector(".modal-content-up");

// Function to open the second modal
function openModalUp() {
  modalUp.style.display = "block";
}

// Function to close the second modal
function closeModalUp() {
  modalUp.style.display = "none";
}


document.addEventListener("click", function (event) {
  if (event.target === modalUp) {
    closeModalUp();
  }
});

// Event listener to prevent clicks inside the second modal content from closing it
modalContentUp.addEventListener("click", function (event) {
  event.stopPropagation();
});

// Event listener to close the second modal when the Escape key is pressed
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModalUp();
  }
});

const signup = document.getElementById("signin-up");
const signin = document.getElementById("signup-in");

signup.addEventListener("click", function () {
  modal.style.display = "none";
  modalUp.style.display = "flex";
});

signin.addEventListener("click", function () {
  modal.style.display = "flex";
  modalUp.style.display = "none";
});





const modell = document.querySelector(".modell");

document.getElementById("seeDetailsProductsss").addEventListener("click", function () {
  modell.style.display = "flex";
});
