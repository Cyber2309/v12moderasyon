const Discord = require("discord.js"),
client = new Discord.Client();
const ayarlar = require('../config.js');
const fs = require('fs');

module.exports.run = async (client, message, args) => {

  if(!message.members.roles.cache.has('bancırolid')) return message.reply('Yetkin Bulunmuyor!');
  
  let phentos = message.mentions.users.first();
  let sebep = args.slice(1).join(' ');
  let logk = client.channel.cache.find('id', 'logkanalid')
if (message.mentions.users.cache.size < 1) {
  let pembed = new Discord.MessageEmbed()
  
  .setColor('RANDOM')
  .setTitle('Phentos Moderasyon')
  .setFooter('Çok iyisin sanki ;)')
  .setDescription(`Lütfen banlamak istediğin kişiyi etiketle!`)
  
  return message.channel.send(pembed);
}
  if (sebep.length < 1 ) {
    
    let pembed1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Phentos Moderasyon')
    .setFooter('Çok iyisin sanki ;)')
    .setDescription(`Lütfen bir sebep belirt!`)
    
    return message.channel.send(pembed1);
  }
  
  if(phentos.id === message.author.id) {
    
    let pembed2 = new Discord.MessageEmbed()
    
    .setColor('RANDOM')
  .setTitle('Phentos Moderasyon')
  .setFooter('Çok iyisin sanki ;)')
    .setDescription(`Gerçekten kendini mi banlamak istiyorsun ?`)
    
    return message.channel.send(pembed2);
  }
  if(!message.guild.member(phentos).member.bannable) return message.reply('Bu kişiyi yasaklayamam çünkü yetkisi benden yüksek!');
  
  const pembed3 = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle('Phentos Moderasyon')
  .setFooter('Çok iyisin sanki ;)')
  .addField("Banlanan kişi : " `${phentos.tag} (${phentos.id})`, true)
  .addField("Ban komutunu kullanan yetkili : " `${message.author.username}`, true)
  logk.send(pembed3);
  
  const pembed4 = new Discord.MessageEmbed()
  
  .setColor('RANDOM')
  .setTitle('Phentos Moderasyon')
  .setFooter('Çok iyisin sanki ;)')
  .setDescription(`${phentos} Kullanıcısı ${sebep} nedeniyle sunucudan banlandı!`)
  message.channel.send(pembed4);
  
};

exports.config = {
  name: "ban",
  guildOnly: true,
  aliases: ["kick"],
};