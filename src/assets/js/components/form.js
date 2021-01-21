import { openModal } from "./modal";

const formGetStarted = document.getElementById("js-get-started-form");
const selectEl = document.querySelectorAll(".js-get-started-form-select");
const progressBarEl = document.getElementById("js-progress-bar");
const progressStatusEl = document.getElementById("js-progress-status");
const submitBtnEl = document.getElementById("js-submit-btn");

let selectedElementIdList = [];

selectEl.forEach((item) => {
  item.addEventListener("change", (e) => {
    const targetId = e.target.id;
    const targetValue = e.target.value;

    if (targetValue && !selectedElementIdList.includes(targetId)) {
      selectedElementIdList.push(targetId);
    }

    if (!targetValue) {
      selectedElementIdList = selectedElementIdList.filter(
        (item) => item !== targetId
      );
    }
    const totalPercentage = selectedElementIdList.length * 10;
    progressBarEl.style.width = totalPercentage + "%";
    progressStatusEl.textContent = totalPercentage + "%";
    if (selectedElementIdList.length === 10) {
      submitBtnEl.disabled = false;
      progressBarEl.classList.add("is-completed");
    } else {
      submitBtnEl.disabled = true;
      progressBarEl.classList.remove("is-completed");
    }
  });
});

function handleFormSubmit(e) {
  e.preventDefault();
  openModal();
}

formGetStarted.addEventListener("submit", handleFormSubmit);
