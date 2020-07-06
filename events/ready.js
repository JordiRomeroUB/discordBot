const Discord = require("discord.js");

module.exports = bot =>{
    console.log(`${bot.user.username} esta a tope`)
    bot.user.setActivity("Willyrex- Paradise (Letra/Lyrics)", { type: "LISTENING", url: "https://www.youtube.com/watch?v=nugrbr8dvvk" });
}