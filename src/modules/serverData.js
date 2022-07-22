export default {
    async fetchServer(serverData) {
        console.log(serverData)
    },

    async getServerVars(serverData) {
        const data = await serverData.data.vars
        console.log(data)
    },
}
