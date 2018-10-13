const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverEmbed = new Discord.RichEmbed()
    .setDescription("Server informatie")
    .setColor("#cc5200")
    .addField("Server naam", message.guild.name)
    .addField("Server gemaakt op", message.guild.createdAt)
    .addField("Je bent joined op", message.member.joinedAt)
    .setFooter("Serverinfo | StormBot")
    .setTimestamp()

    message.channel.send(serverEmbed);
}

module.exports.help = {
  name: "serverinfo"
}