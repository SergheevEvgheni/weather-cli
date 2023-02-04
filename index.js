#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import { printHelp, printSuccess, printError, printWeather } from './services/log.service.js'
import { saveKeyVal } from './services/storage.service.js'
import { getWeather } from './services/api.service.js'

const saveToken = async (token) => {
    if (!token.length) return printError("No token provided")
    try {
        await saveKeyVal('token', token)
        printSuccess("Token is saved")
    } catch(e) {
        printError(e.message)
    }  
}

(async () => {
    const args = getArgs(process.argv)
    if (args.h) {
        printHelp()
    } else if (args.t) {
        saveToken(args.t)
    } else {
        const weatherData = await getWeather(args.city)
        if (weatherData) printWeather(weatherData)
    }   
})()