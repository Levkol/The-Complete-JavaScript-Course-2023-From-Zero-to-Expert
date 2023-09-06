'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className) {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
        </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML(`beforeend`, html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText(`beforeend`, msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
// const getCountryData = function(country){
// const request = new XMLHttpRequest();
// request.open(`GET`, `https://restcountries.com/v2/name/${country}`);
// request.send();

// request.addEventListener(`load`, function(){
//     // const data = JSON.parse(this.responseText)[0];
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//     <article class="country">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//         </div>
//     </article>
//     `;
//     countriesContainer.insertAdjacentHTML(`beforeend`, html);
//     countriesContainer.style.opacity = 1;
//     });
// };

// getCountryData(`portugal`);
// getCountryData(`usa`);
// getCountryData(`hungary`);

////////////////////////////////////////////////////////////////////////

// const getCountryAndNeighbour = function(country){

//     // AJAX call country 1
//     const request = new XMLHttpRequest();
//     request.open(`GET`, `https://restcountries.com/v2/name/${country}`);
//     request.send();

//     request.addEventListener(`load`, function(){
//         // const data = JSON.parse(this.responseText)[0];
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         // Render country 1
//         renderCountry(data);

//         // Get neighbour country 2
//         const [neighbour] = data.borders;

//         if(!neighbour) return;

//         // AJAX call country 2
//         const request2 = new XMLHttpRequest();
//         request2.open(`GET`, `https://restcountries.com/v2/alpha/${neighbour}`);
//         request2.send();

//         request2.addEventListener(`load`, function(){
//             const data2 = JSON.parse(this.responseText);
//             console.log(data2);

//             renderCountry(data2, `neighbour`);
//         })
//     });
// };

// // getCountryAndNeighbour(`portugal`);
// getCountryAndNeighbour(`hungary`);

// setTimeout(() => {
//     console.log(`1 second passed`);
//     setTimeout(() => {
//         console.log(`2 seconds passed`);
//         setTimeout(() => {
//             console.log(`3 seconds passed`);
//             setTimeout(() => {
//                 console.log(`4 seconds passed`);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

////////////////////////////////////////////////////////////////////////

// const getCountryData = function(country){
//     fetch(`https://restcountries.com/v2/name/${country}`).then(function(response){
//         console.log(response);
//         return response.json();
//     }).then(function(data){
//         console.log(data);
//         renderCountry(data[0]);
//     })
// };

// const getCountryData = function(country){
//     // Country 1
//     fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//         console.log(response);

//         if(!response.ok)
//             throw new Error(`Country not found (${response.status})`)

//         return response.json();
//     })
//     .then(data => {
//         renderCountry(data[0]);
//         // const neighbour = data[0].borders?.[0];
//         const neighbour = `kefdklf`;

//         // Country 2
//         return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, `neighbour`))
//     .catch(err => {
//         console.error(`${err} 💥💥💥`);
//         renderError(`Something went wrong 💥💥 ${err.message}. Try again!`)
//     })
//     .finally(() =>{
//     countriesContainer.style.opacity = 1;
//     })
// };

// btn.addEventListener(`click`, function(){
//     getCountryData(`portugal`);
// });

// // getCountryData(`dwadads`);

////////////////////////////////////////////////////////////////////////

// const getJSON = function(url, errorMsg = `Something went wrong`){
//     return fetch(url).then(response => {
//         if(!response.ok)
//         throw new Error(` ${errorMsg} (${response.status})`)

//     return response.json();
//     });
// };

// const getCountryData = function(country){
//     // Country 1
//     getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found`)

//     .then(data => {
//         renderCountry(data[0]);
//         const neighbour = data[0].borders?.[0];

//         if(!neighbour) throw new Error(`No neigbour found!`);

//         // Country 2
//         return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, `Country not found`);
//     })

//     .then(data => renderCountry(data, `neighbour`))
//     .catch(err => {
//         console.error(`${err} 💥💥💥`);
//         renderError(`Something went wrong 💥💥 ${err.message}. Try again!`)
//     })
//     .finally(() =>{
//     countriesContainer.style.opacity = 1;
//     })
// };

// btn.addEventListener(`click`, function(){
//     getCountryData(`portugal`);
// });

// getCountryData(`australia`);

//////////////////////////////////// Coding Challenge 1 ////////////////////////////////////
/*
const whereAmI = function(lat, lng){
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=612648208122039376989x45602`)
    
    .then(response => {
        console.log(response);
        if(!response.ok) throw new Error(`Porblem with geocoding ${response.status}`)
        return response.json();
    })
    .then(data =>{
        console.log(data);
        console.log(`You are in ${data?.city}, ${data?.country}.`)
        // getCountryData(data.country);

        return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(response =>{
        if(!response.ok) throw new Error(`Country not found ${response.status}`);
        return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err =>{
        console.error(`${err.message}💥`);
    })
}

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
*/

// console.log(`Test start`); // 1
// setTimeout(() => console.log(`0 sec timer`), 0); // 4
// Promise.resolve(`Resolve promise 1`).then(res => console.log(res)); // 3
// console.log(`Test end`); // 2

/*
console.log(`Test start`); // 1
setTimeout(() => console.log(`0 sec timer`), 0); // 5
Promise.resolve(`Resolve promise 1`).then(res => console.log(res)); // 3

Promise.resolve(`Resolve promise 2`).then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
}); // 4

console.log(`Test end`); // 2
*/

/*
// Building a Promise
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log(`Lottery draw is happening 🔮`);

  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve(`You WIN 🥇`);
    } else {
      reject(new Error(`You lost your money 💩`));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log(`1 second passed`);
    return wait(1);
  })
  .then(() => {
    console.log(`2 second passed`);
    return wait(1);
  })
  .then(() => {
    console.log(`3 second passed`);
    return wait(1);
  })
  .then(() => console.log(`4 second passed`));

// setTimeout(() => {
//     console.log(`1 second passed`);
//     setTimeout(() => {
//         console.log(`2 seconds passed`);
//         setTimeout(() => {
//             console.log(`3 seconds passed`);
//             setTimeout(() => {
//                 console.log(`4 seconds passed`);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

Promise.resolve(`abc`).then(x => console.log(x));
Promise.reject(new Error(`Problem!`)).catch(x => console.error(x));
*/

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=612648208122039376989x45602`
      );
    })

    .then(response => {
      console.log(response);
      if (!response.ok)
        throw new Error(`Porblem with geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data?.city}, ${data?.country}.`);
      // getCountryData(data.country);

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok) throw new Error(`Country not found ${response.status}`);
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => {
      console.error(`${err.message}💥`);
    });
};

btn.addEventListener(`click`, whereAmI);
