/**
 * Temperature converter
 * @param {number} temperatureValue - Temperature value to be converted
 * @param {number} temperatureUnit - Current temperature unit
 * @returns {object} {temperature: number, unit: string}
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
 * @param {*} currentTemperatureUnit -
 */
const toggleUnit = (currentTemperatureUnit) => {
    console.log(currentTemperatureUnit, document.querySelector('.result-unit'))
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