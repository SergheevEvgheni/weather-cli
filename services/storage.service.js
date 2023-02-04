import { homedir } from 'os'
import { join } from 'path'
import { promises } from 'fs'

const filePath = join(homedir(), 'weather-data.json')

export const saveKeyVal = async (key, value) => {
    let data = {}

    if (await exists(filePath)) {
        const file = await promises.readFile(filePath)
        data = JSON.parse(file)
    }

    data[key] = value

    await promises.writeFile(filePath, JSON.stringify(data))
}

export const getKeyVal = async (key) => {
    if (await exists(filePath)) {
        const file = await promises.readFile(filePath)
        const data = JSON.parse(file)
        return data[key]
    }

    return undefined
}

const exists = async (path) => {
    try {
        return !!await promises.stat(path)
    } catch (e) {
        return false
    }
} 