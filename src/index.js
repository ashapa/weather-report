let tempCount = 72;

const plusTempCount = () => {
    tempCount++;
    updateTempCount();
};

const minusTempCount = () => {
    tempCount--;
    updateTempCount();
};

const updateTempCount = () => {
    const counterDisplayElem = document.querySelector("#temp");
    counterDisplayElem.textContent = `${tempCount}°`;
    updateBasedOnTemp();
};

const updateBasedOnTemp = () => {
    const counterDisplayElem = document.querySelector("#temp");
    const landscapeElem = document.querySelector("#landscape");

    if (tempCount >= 80) {
        counterDisplayElem.style.color = "red";
        landscapeElem.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (tempCount >= 70) {
        counterDisplayElem.style.color = "orange";
        landscapeElem.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (tempCount >= 60) {
        counterDisplayElem.style.color = "yellow";
        landscapeElem.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (tempCount >= 50) {
        counterDisplayElem.style.color = "green";
        landscapeElem.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else {
        counterDisplayElem.style.color = "teal";
        landscapeElem.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
};

const changeSky = () => {
    const selectedSky = document.querySelector("#sky-select").value;
    const skyElem = document.querySelector("#sky");
    if (selectedSky == "Sunny") {
        skyElem.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️"
    } else if (selectedSky == "Cloudy") {
        skyElem.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"
    } else if (selectedSky == "Rainy") {
        skyElem.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"
    } else if (selectedSky == "Snowy") {
        skyElem.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
    }
};

const changeCity = () => {
    const searchedCity = document.querySelector("#search-bar");
    const cityName = document.querySelector("#city");
    cityName.textContent = searchedCity.value;
};

const resetButton = () => {
    const searchedCity = document.querySelector("#search-bar");
    const cityName = document.querySelector("#city");
    searchedCity.value = "";
    cityName.textContent = "Hometown";
}

// Register all events
const contentLoaded = (event) => {
    const counterMinusElem = document.querySelector("#counter-minus");
    counterMinusElem.addEventListener("click", minusTempCount);

    const counterPlusElem = document.querySelector("#counter-plus");
    counterPlusElem.addEventListener("click", plusTempCount);

    const skySelectElem = document.querySelector("#sky-select");
    skySelectElem.addEventListener("change", changeSky);

    const inputCityElem = document.querySelector("#search-bar");
    inputCityElem.addEventListener("input", changeCity);

    const resetButtonElem = document.querySelector("#reset-button");
    resetButtonElem.addEventListener("click", resetButton);

    updateBasedOnTemp();
    updateTempCount();
    changeSky();
};

document.addEventListener("DOMContentLoaded", contentLoaded);








