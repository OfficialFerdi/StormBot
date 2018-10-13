const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let errorEmbed = new Discord.RichEmbed()
    .setTitle(":x: Error")
    .setColor("#cc0000")
    .setDescription("Error, Kan de naam helaas niet vinden.")
    .setFooter("Error | StormBot")
    .setTimestamp()
    if(!rUser) return message.channel.send(errorEmbed);
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("~-~Reports~-~")
    .setColor("#15f153")
    .addField("Gerapporteerde gebruiker", `${rUser} met ID: ${rUser.id}`)
    .addField("Gerapporteerd door", `${message.author} met ID: ${message.author.id}`)
    .addField("Gerapporteerd in", message.channel)
    .addField("De Tijd", message.createdAt)
    .addField("Reden", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports-log");
    let noEmbed = new Discord.RichEmbed()
    .setTitle(":x: Error")
    .setColor("#cc0000")
    .setDescription("Error, De admins van de server hebben de **reports-log** chat nog niet gemaakt.")
    .setFooter("Error | StormBot")
    .setTimestamp()
    if(!reportschannel) return message.channel.send(noEmbed);

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
}

module.exports.help = {
  name: "report"
}