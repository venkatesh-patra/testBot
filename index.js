const {
    Client,
    GatewayIntentBits,
    Partials,
} = require('discord.js');
require("dotenv").config()

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ],
    partials: [Partials.Channel],
});

client.on("ready",() =>{
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate",(message)=>{
    if(message.content === "hi"){
        message.reply("Hello");
    }
})

const welcomeID = "1001495432767221801"

client.on("guildMemberAdd",(member)=>{
    member.guild.channels.cache.get(welcomeID).send(`<@${member.id}> Welcome to the server!!`)
})

client.login(process.env.TOKEN)