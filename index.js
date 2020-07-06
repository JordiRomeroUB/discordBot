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

    if (cmd === `${prefix}clear`) {
        if(message.deletable){
            message.delete();
        }

        if(!message.member.hasPermission("MANAGE_MESSAGES")){
            return message.reply("Que no puedes crack").then(m=> m.delete(50000));
        }

        if(isNaN(args[0]) || parseInt(args[0]) <=0){
            return message.reply("Pon un numerito anda").then(m=> m.delete(5000));
        }

        let deleteAmount;
        if(parseInt(args[0])>100){
            deleteAmount = 100;
        }else{
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount,true).catch(err => message.reply(`Algo va mal... ${err}`))
    }

    
})


bot.login(botsettings.token);

