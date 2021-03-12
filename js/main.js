/**
 * Convert the temperature into 1-dergree celcius / 2-degree Fahrenheit
 */
const converter = () => {
    let temperatureValue = document.getElementById("input-temperature").value;
    let temperatureUnit = document.getElementById("temperature-unit-selection").value;
    if (!temperatureValue || !temperatureUnit) return;
    switch (parseInt(temperatureUnit)) {
        case 1: console.info(`Converting temperature into Fahrenheit`);
                document.querySelector('#result-value').value = temperatureValue * 9/5 + 32;
                break;
        case 2: console.info(`Converting temperature into Celcius`);
                document.querySelector('#result-value').value = (temperatureValue - 32) * 5/9;
                break;
        default: return temperatureValue
    }
}

/**
 * Toggle temperature unit on the page
 * @param {*} currentTemperatureUnit - Current selected temperature unit 1-degree celcius/2-degree Fahrenheit
 */
const toggleUnit = (currentTemperatureUnit) => {
    switch (parseInt(currentTemperatureUnit)) {
        case 1: console.info(`Converting temperature into Fahrenheit`);
                document.querySelector('.result-unit').innerHTML = "<sup>o</sup>F";
                break;
        case 2: console.info(`Converting temperature into Celcius`);
                document.querySelector('.result-unit').innerHTML = "<sup>o</sup>C";
                break;
        default: document.querySelector('.result-unit').textContent = "<sup>o</sup>C";
            break;
    }
}