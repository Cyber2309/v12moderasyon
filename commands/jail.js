const Discord = require("discord.js");
      const db = require("quick.db"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

  if(!message.member.roles.cache.has('BANCIROLİD') && !message.member.hasPermission('ADMINISTRATOR')) return message.reply('Yetkin Yok!');
  let phentos = message.mentions.users.first()
  if (!phentos) return message.reply('Kimi Jaile Atmak İstiyorsun?');
  let usr = message.mentions.roles.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(phentos)
  let sebep = args.slice(1).join(" ")
  if(!sebep) return message.reply("Lütfen Bir Sebep Belirtin!").then(p => p.delete({timeout: 5000}));
  message.guild.members.cache.get(member.id).roles.cache.forEach(h => {
    message.guild.membes.cache.get(member.id).roles.remove(h)
  })
  member.roles.add('jailrolid')
  const logk = message.guild.channels.cache.find(b => b.id == 'logkanalidniz')
  const pembed = new Discord.MessageEmbed()
  .setTitle('PHENTOS MODERASYON')
  .setFooter('Çok İyisin Bakıyorumda ;)')
  .setColor('RANDOM')
  .setDescription(`${phentos} jaile ${sebep} nedeniyle jaile atıldı1`)
  return message.channel.send(pembed)
  
   let embed = new Discord.MessageEmbed() 
  .setDescription(`${phentos} Adlı kullanıcı başarıyla jaile sürgün edildi!`) 
  .setColor('f5f5f5')
  .setFooter(`Çok İyisin Bakıyorumda ;)`)
   .setTitle('PHENTOS MODERASYON')
  return message.channel.send(embed).then(logk.send(embed)).then(m => m.delete({timeout: 5000}));
  
  
  
  
  
  
};

exports.config = {
  name: "ping",
  guildOnly: true,
  aliases: [],
};