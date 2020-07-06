const Discord = require('discord.js')
const botsettings = require('./botsettings.json');

const bot = new Discord.Client({disableEveryone: true});


bot.on("ready", async() =>{
    console.log(`${bot.user.username} esta a tope`)
    bot.user.setActivity("Willyrex- Paradise (Letra/Lyrics)", {type:"LISTENING",url:"https://www.youtube.com/watch?v=nugrbr8dvvk"});

})

bot.on("message", async message =>{
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}hi`){
        return message.channel.send("Hola")
    }

    if (cmd === `${prefix}romero`) {
        return message.reply("El mejor!")
    }
})


bot.login(botsettings.token);

