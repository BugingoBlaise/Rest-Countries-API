const countriesContainer = document.querySelector(".countries-container");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
    //   console.log(country);
      const countryCard = document.createElement("a");
      countryCard.classList.add("country-card");
      countryCard.href=`country.html?name=${country.name.common}`
      countryCard.innerHTML = `
 <img src="${country.flags.svg}" alt="flag" />
          <div class="card-text">
            <h2 class="card-title">${country.name.common}</h2>
            <p><b>Population</b> ${country.population.toLocaleString('en-IN')}</p>
            <p><b>Region</b> ${country.region}</p>
            <p><b>Capital</b> ${country.capital}</p>
          </div>
`;
      countriesContainer.append(countryCard);
    });
  });

//darkmode
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  
  if (body.classList.contains("dark-mode")) {
    themeToggle.textContent = "Light Mode";
  } else {
    themeToggle.textContent = "Dark Mode";
  }
});




// console.log(country);
