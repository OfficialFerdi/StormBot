const Discord = require("discord.js");
const ms = require("ms");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let nameEmbed = new Discord.RichEmbed()
    .setTitle(":x: Error")
    .setColor("#cc0000")
    .setDescription("Error, Kan de naam helaas niet vinden.")
    .setFooter("Error | StormBot")
    .setTimestamp()
    if(!tomute) return message.channel.send(nameEmbed);
    let permEmbed = new Discord.RichEmbed()
    .setTitle(":x: Error")
    .setColor("#cc0000")
    .setDescription("Error, Kan diegene niet muten.")
    .setFooter("Error | StormBot")
    .setTimestamp()
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send(permEmbed).then(msg => msg.delete(5000));
    let muterole = message.guild.roles.find(r => r.name == "Muted");
    if(!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channel.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                })
            })
        }catch(e){
            console.log(e.stack);
        }
    }

    let mutetime = args[1];
    let timeEmbed = new Discord.RichEmbed()
    .setTitle(":x: Error")
    .setColor("#cc0000")
    .setDescription("Error, Geef een bepaalde tijd op.")
    .setFooter("Error | StormBot")
    .setTimestamp()
    if(!mutetime) return message.channel.send(timeEmbed).then(msg => msg.delete(5000));

    await(tomute.addRole(muterole.id));
    let muteChannel = message.guild.channels.find(`name`, 'modlogs')
    if(!muteChannel) return message.reply("Er is nog geen **modlogs** chat gemaakt, contacteer de admins voor dit probleem.");
    let muteEmbed = new Discord.RichEmbed()
    .setTitle("Muted")
    .setColor("#cc0000")
    .addField("Naam", `<@${tomute.id}>`)
    .addField("Mute tijd", `${ms(ms(mutetime))}`)
    .setFooter("Muted | StormBot")
    .setTimestamp()
    muteChannel.send(muteEmbed);

    setTimeout(function(){
        tomute.removeRole(muterole.id);
        let unmuteChannel = message.guild.channels.find(`name`, 'modlogs')
        if(!unmuteChannel) return message.reply("Er is nog geen **modlogs** chat gemaakt, contacteer de admins voor dit probleem.");
        let unmuteEmbed = new Discord.RichEmbed()
        .setTitle("Unmuted")
        .setColor("#00cc00")
        .addField("Naam", `<@${tomute.id}>`)
        .addField("Unmute door", `Autounmute`)
        .setFooter("Unmuted | StormBot")
        .setTimestamp()
        unmuteChannel.send(unmuteEmbed)
    }, ms (mutetime));
}

module.exports.help = {
  name: "tempmute"
}