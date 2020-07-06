const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.channel.send("Hola");
}

module.exports.config = {
    name: "hi",
    description: "",
    usage: "-hi",
    accesableby: "Members",
    aliases: ['h']
}