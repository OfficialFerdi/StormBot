const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  const categoryId = "500400697381224468";

  if(message.channel.parentID == categoryId) {

    message.channel.delete();

  } else {

    message.channel.send(":warning: Dit chatkanaal is geen ticket. :warning:");

  }

  var embedCloseTicket = new Discord.RichEmbed()
  .setTitle("Ticket Kanaal Van, " + message.channel.name)
  .setColor("#00e673")
  .setDescription("\nJe ticket is succesvol behandeld. heb je nog vragen of anderen dingen? dan open nog een ticket met -ticket");

  var logChannel = message.guild.channels.find("name", "ticket-logs");
  if (!logChannel) return message.channel.send(":warning: Kanaal bestaat niet :warning:");

  logChannel.send(embedCloseTicket);


}

module.exports.help = {
  name: "close"
}