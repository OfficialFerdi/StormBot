const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let membersEmbed = new Discord.RichEmbed()
    .setDescription("Bekijk hier de hoeveelheid leden.")
    .setColor("#ff3300")
    .addField("Leden in totaal", message.guild.memberCount)
    .addField("Mensen", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
    .addField("Bots", message.guild.members.filter(m => m.user.bot).size, true)
    .setFooter("Membercount | TheEagle")
    .setTimestamp()

    message.channel.send(membersEmbed);
}

module.exports.help = {
  name: "membercount"
}