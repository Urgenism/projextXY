const modalEl = document.getElementById("js-modal");
const closeModalEl = document.getElementById("js-modal-close");

export function closeModal() {
  modalEl.classList.remove("is-open");
}

export function openModal() {
  modalEl.classList.add("is-open");
}

closeModalEl.addEventListener("click", closeModal);
