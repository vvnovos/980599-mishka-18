var overlayModal = document.querySelector(".modal-overlay");
var buttonModal = document.querySelectorAll(".button-modal-js");
var size = overlayModal.querySelector(".modal-show__input:checked + .modal-show__label");

buttonModal.forEach(function (el) {
  el.addEventListener("click", function(evt) {
  evt.preventDefault();
  overlayModal.classList.remove("modal-overlay__closed");
  size.focus();
  });
});

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27) {
    evt.preventDefault();
    overlayModal.classList.add("modal-overlay__closed");
  }
});

overlayModal.addEventListener("click", function(evt) {
  if (evt.target == overlayModal) {
  overlayModal.classList.add("modal-overlay__closed");
  }
});
