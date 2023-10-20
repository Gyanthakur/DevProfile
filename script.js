const searchInput = document.getElementById("searchInput");
const profiles = document.querySelectorAll(".profile");
const date = document.getElementById("dates");

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
date.innerHTML = currentYear;

searchInput.addEventListener("input", filterProfiles);

function filterProfiles() {
  const query = searchInput.value.toLowerCase();

  profiles.forEach((profile) => {
    const name = profile.querySelector(".name").textContent.toLowerCase();
    const skills = profile.querySelector(".skills").textContent.toLowerCase();

    if (name.includes(query) || skills.includes(query)) {
      profile.style.display = "block"; // Show matching profiles
    } else {
      profile.style.display = "none"; // Hide non-matching profiles
    }
  });
}

const darkMode = document.querySelector(".dark-btn");

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("light-background");
  darkMode.classList.toggle("light-background");
  darkMode.classList.toggle("icon-color");
  document.querySelector("h1").classList.toggle("text-color");
  // document.querySelectorAll("h3").forEach((item) => {
  //     item.classList.toggle("text-color");
  // });
  document.querySelector("footer").classList.toggle("text-color");
});
