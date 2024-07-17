import usersData from "./fakeData.js";

/**
 * Show user data in HTML Document by DOM
 * @param {number} serial
 */
export function showUserData(serial) {
  const reviewContainer = document.querySelector(".review-container");
  const img = document.querySelector(".review-profile-picture");
  const userName = document.querySelector(".review-profile-name");
  const profession = document.querySelector(".review-profile-profession");
  const description = document.querySelector(".review-profile-description");
  const userData = usersData[serial];

  reviewContainer.setAttribute("data-serial", serial);
  // img.setAttribute('src', userData.image);
  img.src = userData.image;
  userName.innerText = userData.name;
  profession.innerText = userData.profession;
  description.innerText = userData.description;
}

/**
 * Get current review serial
 * @returns {number}
 */
export function getCurrentSerial() {
  return Number(
    document.querySelector(".review-container").getAttribute("data-serial")
  );
}

/**
 * Return the last serial of review
 * @returns {number}
 */
export function getMaxSerial() {
  return usersData.length - 1;
}

/**
 * Generate Random Serial for user review
 * @returns {number}
 */
export function generateRandomSerial() {
  let randomNumber = Math.floor(Math.random() * getMaxSerial());
  const currentSerial = getCurrentSerial();

  while(randomNumber === currentSerial){
    randomNumber = Math.floor(Math.random() * getMaxSerial())
  }

  return randomNumber;
}
