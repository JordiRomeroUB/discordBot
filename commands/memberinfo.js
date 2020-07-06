const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

    if (member.presence.status === 'dnd') member.presence.status = "No me molestes";
    if (member.presence.status === 'online') member.presence.status = "En linea";
    if (member.presence.status === 'idle') member.presence.status = "He desaparecido temporalmente";
    if (member.presence.status === 'offline') member.presence.status = "Estoy durmiendo";

    let x = Date.now() - member.createdAt;
    let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
    const created = Math.floor(x / 86400000);
    const joined = Math.floor(y / 86400000);

    const joineddate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
    const createddate = moment.utc(member.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
    let status = member.presence.status;

    const userEmbed = new Discord.MessageEmbed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTimesTamp()
        .setColor('BLUE')
        .setImage(member.user.displayAvatarURL())
        .addField("ID", member.id)
        .addField('Roles', `<@&${member._roles.join('> <@&')}>`)
        .addField("Cuenta creada el:", ` ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY")}`, true)
        .addField('Se unio al server hace', `${joineddate} \n> ${joined} dias`)
        .addField("Estado", status)

    message.channel.send(userEmbed);



}


module.exports.config = {
    name: "memberinfo",
    description: "Muestra la info del miembro/usuario",
    usage: "-memberinfo",
    accesableby: "Members",
    aliases: ['userinfo']
}