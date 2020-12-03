const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply('Buna yetkin yok!');
 if(!message.guild) {
   
 }
  let sunucu = message.guild
  let sebep = args.slice(1).join(' ');
   client.members.unbanReason = sebep;
  client.members.unbanAuth = message.author;
  let phentos = args[0];
   if (!phentos) { 
   const pembed = new Discord.MessageEmbed()
   .setTitle('PHENTOS MODERASYON')
   .setColor('RANDOM')
   .setFooter('Çok İyisin Bakıyorumda ;)')
   .setDescription(`Lütfen Bir Üye Belirt Ve Sebep Yaz!`)
   message.channel.send(pembed)
   }
  
   if (sebep.length < 1) {
    const pembed1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('PHENTOS MODERASYON')
    .setDescription('Ban kaldırma sebebini yazmalısın!') 
    .setFooter(`Çok İyisin Bakıyorumda ;)`)
   return message.channel.send(pembed1)
  } 
  
    message.guild.members.unban(phentos);
  const pembed3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
  .setTitle('PHENTOS MODERASYON')
    .setDescription('Tebrikler Yasak Kalktı!')
    .addField('Kullanıcı', `<@!${phentos}>`,true)
    .setFooter(`Çok İyisin Bakıyorumda ;)`)
  message.channel.send(pembed3)
};

exports.config = {
  name: "unban",
  guildOnly: true,
  aliases: ["unban"],
};