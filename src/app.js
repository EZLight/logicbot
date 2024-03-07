const {Client, Collection} = require("discord.js")

const {token} = require("../config.json")
const { fstat } = require("fs")

const client = new Client({
    intents: [
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.Guilds
    ],
    partials: [
        Partials.Message,
        Partials.Channel,
        Partials.GuildMember,
        Partials.User,
        Partials.GuildScheduledEvent,
    ]
})


client.commands = new Collection()
client.commandArray = []

const functionFolders = fstat.readdirSync(`./src/functions`)
for (const folder of functionFolders) {
    const functonFiles = fs
    .readdirSync(`./src/function${folder}`)
    .filter((file) => file.endsWith(".js"))
    for (const file of functionFiles)
        require(`./functions/${folder}/${file}`)(client)

}


Client.on("ready", (client) => {
    console.log("This bot is now online: " + client.user.tag)
})

Client.login(token)