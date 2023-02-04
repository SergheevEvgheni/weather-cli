import axios from 'axios'
import { getKeyVal } from './storage.service.js'
import { printError } from './log.service.js'

export const getWeather = async (city) => {
    const token = await getKeyVal('token')
    if (!token) throw new Error("No api token, provide it using -t [API_KEY] command")

    let weatherData = null

    try {
        const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', { 
            params: {
                q: city,
                appid: token,
                units: "metric"
            } 
        })
        weatherData = data
    } catch (e) {
        printError(e?.response?.data?.message || "Something went wrong")
    }     
    
    return weatherData
}