'use strict';

// Modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// Modal close function
const modalCloseFunc = function () {
  if (modal) modal.classList.add('closed');
};

// Modal event listeners
if (modalCloseOverlay) modalCloseOverlay.addEventListener('click', modalCloseFunc);
if (modalCloseBtn) modalCloseBtn.addEventListener('click', modalCloseFunc);

// Notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// Notification toast event listener
if (toastCloseBtn) {
  toastCloseBtn.addEventListener('click', function () {
    if (notificationToast) notificationToast.classList.add('closed');
  });
}

// Mobile menu variables
const mobileMenuOpenBtns = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenus = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtns = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

// Mobile menu logic
mobileMenuOpenBtns.forEach((btn, index) => {
  const mobileMenuCloseFunc = function () {
    if (mobileMenus[index]) mobileMenus[index].classList.remove('active');
    if (overlay) overlay.classList.remove('active');
  };

  btn.addEventListener('click', function () {
    if (mobileMenus[index]) mobileMenus[index].classList.add('active');
    if (overlay) overlay.classList.add('active');
  });

  if (mobileMenuCloseBtns[index]) {
    mobileMenuCloseBtns[index].addEventListener('click', mobileMenuCloseFunc);
  }

  if (overlay) overlay.addEventListener('click', mobileMenuCloseFunc);
});

// Accordion variables
const accordionBtns = document.querySelectorAll('[data-accordion-btn]');
const accordions = document.querySelectorAll('[data-accordion]');

// Accordion logic
accordionBtns.forEach((btn, index) => {
  btn.addEventListener('click', function () {
    const accordionContent = accordions[index];

    // Close all other accordions
    accordions.forEach((accordion, idx) => {
      if (idx !== index) {
        accordion.classList.remove('active');
        accordionBtns[idx].classList.remove('active');
      }
    });

    // Toggle the clicked accordion
    accordionContent.classList.toggle('active');
    btn.classList.toggle('active');
  });
});
