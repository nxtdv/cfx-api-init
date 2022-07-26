import fs from 'fs'

export default {
    async getAllPlayers(serverData) {
        const data = await serverData
        const players = await data.players
        console.log(players)
    },

    async getPlayerById(serverData, id) {
        const data = await serverData
        const players = await data.players
        const player = players.find((player) => player.id === id)

        if (player) console.log(player)
    },

    async exportPlayersIntoJSON(serverData) {
        const data = await serverData
        const players = await data.players

        fs.writeFileSync('./dist/players.json', JSON.stringify(players, null, 4), (err) => {
            if (err) throw err
        })
    },

    async exportPlayerByIdIntoJSON(serverData, id) {
        const data = await serverData
        const players = await data.players
        const player = players.find((player) => player.id === id)

        if (player) {
            fs.writeFileSync(`./dist/player-${id}.json`, JSON.stringify(players, null, 4), (err) => {
                if (err) throw err
            })
        }
    },
}
