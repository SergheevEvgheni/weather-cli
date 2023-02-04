import chalk from "chalk"
import dedent from "dedent"

export const printError = (msg) => {
    console.log(dedent`${chalk.bgRed("ERROR")} - ${msg}`);
}

export const printSuccess = (msg) => {
    console.log(dedent`${chalk.bgGreen("SUCCESS")} - ${msg}`);
}

export const printHelp = () => {
    console.log(dedent`
    ${chalk.bgCyan("HELP:")}
    [CITY_NAME] - name of the searched city
    -t [API_KEY] - api token
    -h - help
    `);
}

export const printWeather = (weatherData) => {
    console.log(dedent`
    ${chalk.bgYellowBright(`Forecast for ${weatherData.name}:`)}
    Weather -  ${weatherData.weather[0].main}, ${weatherData.weather[0].description}
    Temperature - ${weatherData.main.temp}c, Feels like - ${weatherData.main.feels_like}c
    Humidity - ${weatherData.main.humidity}%
    Wind - ${weatherData.wind.speed} km/h
    `);
}