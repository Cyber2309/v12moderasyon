const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../config.js")

exports.run = async (client, message, args, member) => {
  
const kisi = db.fetch(`afkid_${message.author.id}_${message.guild.id}`)
if(kisi) return;
  
const sebep = args[0]
if(!args[0]){
  
let kullanıcı = message.guild.members.cache.get(message.author.id)
  
await db.set(`afkSebep_${message.author.id}_${message.guild.id}`)
await db.set(`afkid_${message.author.id}_${message.guild.id}`, message.author.id)
await db.set(`afkAd_${message.author.id}_${message.guild.id}`)
  
const a = await db.fetch(`afkSebep_${message.author.id}_${message.guild.id}`)
 
const phentos = new Discord.MessageEmbed()

.setAuthor("PHENTOS" , client.user.avatarURL)
.setColor("RANDOM")

.setDescription(`Başarıyla Afk Oldunuz \n Sebep: ${a}`)

.setFooter(`${message.author.username} Çok İyisin Bakıyorumda ;)`)
.setTimestamp()

message.channel.send(phentos)
    
message.member.setNickname(`[AFK] `)
}
  
if(args[0]){
    
let sebep = args.join(" ");
let kullanıcı = message.guild.members.cache.get(message.author.id)

const b = kullanıcı.displayName

await db.set(`afkSebep_${message.author.id}_${message.guild.id}`, sebep)
await db.set(`afkid_${message.author.id}_${message.guild.id}`, message.author.id)
await db.set(`afkAd_${message.author.id}_${message.guild.id}`, b)

const a = await db.fetch(`afkSebep_${message.author.id}_${message.guild.id}`)

const phentos2 = new Discord.MessageEmbed()

.setAuthor("PHENTOS" , client.user.avatarURL)
.setColor("RANDOM")

.setDescription(`Başarıyla Afk Oldunuz \n Sebep: ${a}`)

.setFooter(`${message.author.username} Çok İyisin Bakıyorumda ;)`)
.setTimestamp()

message.channel.send(phentos2)
    
message.member.setNickname(`[AFK] ` + b)
}
  
}

exports.config = {
  name: "afk",
  guildOnly: true,
  aliases: [],
};