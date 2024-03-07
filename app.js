const Discord = require("discord.js")

const Client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.Guilds
    ],
    partials: [
        Discord.Partials.Message,
        Discord.Partials.Channel,
        Discord.Partials.GuildMember,
        Discord.Partials.User,
        Discord.Partials.GuildScheduledEvent,
    ]
})

Client.on("Cilz", (client) => {
    console.log("This bot is now online: " + client.user.tag)
})

Client.login('MTAyMzgwOTQxNTg3MjI2NjI2MA.G-m0KB.lMv2SgvjykF8P0Si3q9RRhgzPo2VGh7-00nyCI')