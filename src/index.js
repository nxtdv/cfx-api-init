import cfx from 'cfx-api'
import { players, server } from './modules/index.js'

const cfxApi = async () => {
    const app = await cfx.fetchServer('j5x4lm') // Replace "j5x4lm" with your server ID

    server.fetchServer(app) // Get server data
    players.getPlayerById(app, 6148) // Replace 6148 with a player ID
    players.getAllPlayers(app) // Get all players
    players.exportPlayersIntoJSON(app) // Export all players into a JSON file in the dist folder.
}

cfxApi()
