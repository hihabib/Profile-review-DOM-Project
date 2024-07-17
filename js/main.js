import {
  showUserData,
  getCurrentSerial,
  getMaxSerial,
  generateRandomSerial,
} from "./userReviews.js";

document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.querySelector(".review-next");
  const prevButton = document.querySelector(".review-prev");
  const surpriseButton = document.querySelector(".review-surprise");

  // Next button
  nextButton.addEventListener("click", function () {
    const currentDataSerial = getCurrentSerial();
    const maxSerial = getMaxSerial();

    if (currentDataSerial >= maxSerial) {
      // show the first data if it reached to the last review
      showUserData(0);
    } else {
      // otherwise show next data
      showUserData(currentDataSerial + 1);
    }
  });

  // Prev button
  prevButton.addEventListener("click", function () {
    const currentDataSerial = getCurrentSerial();
    const minSerial = 0;
    const maxSerial = getMaxSerial();

    if (currentDataSerial === minSerial) {
      // show the last data if it reached to the first review
      showUserData(maxSerial);
    } else {
      // otherwise show prev data
      showUserData(currentDataSerial - 1);
    }
  });

  // Surprise button
  surpriseButton.addEventListener("click", function () {
    const randomSerial = generateRandomSerial();
    showUserData(randomSerial);
  });

  // Show first data on page load
  showUserData(0);
});
