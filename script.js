const countriesContainer = document.querySelector(".countries-container");
const searchInput = document.getElementById("country-search");
const searchButton = document.getElementById("search-button");
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Fetch and display all countries
function fetchAndDisplayCountries() {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      countriesContainer.innerHTML = ""; // Clear the existing content
      
      data.forEach((country) => {
        const countryName = country.name.common.toLowerCase();
        const searchTerm = searchInput.value.toLowerCase();

        // Only display countries that match the search term
        if (countryName.includes(searchTerm)) {
          const countryCard = document.createElement("a");
          countryCard.classList.add("country-card");
          countryCard.href = `country.html?name=${country.name.common}`;
          countryCard.innerHTML = `
            <img src="${country.flags.svg}" alt="flag" />
            <div class="card-text">
              <h2 class="card-title">${country.name.common}</h2>
              <p><b>Population</b> ${country.population.toLocaleString(
                "en-IN"
              )}</p>
              <p><b>Region</b> ${country.region}</p>
              <p><b>Capital</b> ${country.capital}</p>
            </div>
          `;
          countriesContainer.append(countryCard);
        }
      });
    });
}

// Fetch and display countries on page load
fetchAndDisplayCountries();

// Search button click event
searchButton.addEventListener("click", () => {
  fetchAndDisplayCountries();
});

// Search input keyup event
searchInput.addEventListener("keyup", () => {
  fetchAndDisplayCountries();
});

// Dark mode toggle
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeToggle.textContent = "Light Mode";
  } else {
    themeToggle.textContent = "Dark Mode";
  }
});
