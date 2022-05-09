'use strict';
// Assigning css class to variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

// Function for opening the modal-window. removes hidden from modal and overlay
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// Function for closeing the modal-window. adds hidden from modal and overlay

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Looping over the three buttons and adding eventlisteners to them. The event listeners fires of the openModal() function
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
// Running close modal when clicking the close button.
btnCloseModal.addEventListener('click', closeModal);
// Adding the close modal funcution when clicking outside of the modal-window.
overlay.addEventListener('click', closeModal);

// Function the closes modal-window when the esckey is pressed.
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
