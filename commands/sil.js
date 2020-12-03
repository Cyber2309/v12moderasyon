const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('Yetkin yetersiz!');
  if(!args[0]) return message.reply('Silinecek miktarı yazmalısın!');
  message.delete()
  message.channel.bulkDelete(args[0]).then(() => {
    const pembed = new Discord.MessageEmbed()
    .setTitle('PHENTOS MODERASYON')
    .setColor('RANDOM')
    .setFooter('Çok İyisin Bakıyorumda ;)')
    .setDescription(`${args[0]} Adet Mesajı Sildim!`)
    message.channel.send(pembed)
    
  })
  
  
};

exports.config = {
  name: "ping",
  guildOnly: true,
  aliases: [],
};