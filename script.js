const form = document.querySelector('#ip-form');
const ipAddressInput = document.querySelector('#ip-address');
const resultContainer = document.querySelector('#result-container');
const ipResult = document.querySelector('#ip-result');
const cityResult = document.querySelector('#city-result');
const regionResult = document.querySelector('#region-result');
const countryResult = document.querySelector('#country-result');
const latitudeResult = document.querySelector('#latitude-result');
const longitudeResult = document.querySelector('#longitude-result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const ipAddress = ipAddressInput.value;
  const url = `https://geo.ipify.org/api/v1?apiKey=4ac07f84698643e216c5cddc5934cc10&ipAddress=${ipAddress}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      ipResult.textContent = data.ip;
      cityResult.textContent = data.location.city;
      regionResult.textContent = data.location.region;
      countryResult.textContent = data.location.country;
      latitudeResult.textContent = data.location.lat;
      longitudeResult.textContent = data.location.lng;
      resultContainer.classList.remove('hidden');
    })
    .catch(error => console.error('Error:', error));
});