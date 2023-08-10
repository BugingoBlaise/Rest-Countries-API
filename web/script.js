const countriesContainer = document.querySelector(".countries-container");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
    //   console.log(country);
      const countryCard = document.createElement("a");
      countryCard.classList.add("country-card");
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
console.log(country);
