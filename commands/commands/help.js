const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let helpEmbed = new Discord.RichEmbed()
    .setTitle(":eagle: Help menu :eagle:")
    .setDescription("Krijg hier info/hulp commands. *(bij de :x: emoji kan je dat command niet gebruiken alleen staff.)*")
    .setColor("#cc5200")
    .addBlankField()
    .addField("Help commands", `-help - Help menu die je hebt geopent. :white_check_mark: \n -report - Report een member in de discord. :white_check_mark: \n -ticket - Open een ticket. :white_check_mark:`)
    .addField("Info commands", `-serverinfo - Krijg info over discord server. :white_check_mark: \n -botinfo - Krijg info over de bot. :white_check_mark: \n -membercount - Bekijk hoeveel leden de discord heeft. :white_check_mark:`)
    .addField("Staff commands", `-tempmute - Mute een persoon voor een bepaalde tijd. :x: \n -clear - Verwijder het aantal berichten. :x:`)
    .addBlankField()
    .setFooter("Help | StormBot")
    .setTimestamp()

    message.channel.send("Bekijk je privé berichten!")
    message.author.send(helpEmbed);
}

module.exports.help = {
  name: "help"
}