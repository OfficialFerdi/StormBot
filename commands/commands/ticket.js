const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const categoryId = "500400697381224468";

    var userName = message.author.username;

    var userDiscriminator = message.author.discriminator;

    var bool = false;

    message.guild.channels.forEach((channel) => {

        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {

            message.channel.send(":warning: Helaas heb je al een ticket. :warning:");

            bool = true;
        }

    });

    if (bool == true) return;

    var embedCreateTicket = new Discord.RichEmbed()
        .setTitle("Ticket, " + message.author.username)
        .setFooter(`Jouw support kanaal is aangemaakt!`);

    message.channel.send(embedCreateTicket);

    message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => {

        createdChan.setParent(categoryId).then((settedParent) => {

            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
            settedParent.overwritePermissions(message.author, {

                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true

            });

            var embedParent = new Discord.RichEmbed()
                .setTitle("Hallo, " + message.author.username.toString())
                .setColor("#00e673")
                .setDescription("\n\nHallo, ons staff gaat jou zo snel mogelijk behandelen en helpen met de probleem die je hebt, of vragen heeft over de discord server.");

            settedParent.send(embedParent);

        }).catch(err => {
            message.channel.send(":warning: Er is iets fout gegaan. contacteer de bot developer. :warning:");
        });

    }).catch(err => {
        message.channel.send(":warning: Er is iets fout gegaan. contacteer de bot developer. :warning:");
    });
}

module.exports.help = {
    name: "ticket"
}