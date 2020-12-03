const Discord = require("discord.js")    
const client = new Discord.Client();      
const config = require("./config.js")  
const fs = require("fs");          
const db = require("quick.db");
require('./util/Loader.js')(client);    

client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection();  
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);              
  console.log(`${files.length} komut yüklenecek.`); 
  files.forEach(f => {                       
    let props = require(`./commands/${f}`);   
    console.log(`${props.config.name} komutu yüklendi.`);  
    console.log(`Phentos Moderasyon Botu`)    
    client.commands.set(props.config.name, props); 
    props.config.aliases.forEach(alias => {         
      client.aliases.set(alias, props.config.name);  
    });
  });
})

/////////////AFK SİSTEMİ ///////////////


client.on("message" , async message => {
  
const msg = message;
  
if(message.content.startsWith(config.prefix+"afk")) return; 
  
  
let afk = message.mentions.users.first()
  
const kisi = db.fetch(`afkid_${message.author.id}_${message.guild.id}`)
  
const isim = db.fetch(`afkAd_${message.author.id}_${message.guild.id}`)

 if(afk){
   
const sebep = db.fetch(`afkSebep_${afk.id}_${message.guild.id}`)
const kisi3 = db.fetch(`afkid_${afk.id}_${message.guild.id}`)

if(message.content.includes(kisi3)){
  
const embed = new Discord.MessageEmbed()

.setAuthor("PHENTOS" , client.user.avatarURL)
.setColor("RANDOM")

.setDescription(`Etiketlediğiniz Kişi Afk \n Sebep : ${sebep}`)

.setFooter(`${message.author.username} Çok İyisin Bakıyorumda ;)`)
.setTimestamp()

message.channel.send(embed)
}
   
}
  
if(message.author.id === kisi){
  
const embed = new Discord.MessageEmbed()

.setAuthor("PHENTOS" , client.user.avatarURL)
.setColor("PHENTOS")

.setDescription(`Afk'lıktan Çıktınız.`)

.setFooter(`${message.author.username} Çok İyisin Bakıyorumda ;)`)
.setTimestamp()

message.channel.send(embed)
  
db.delete(`afkSebep_${message.author.id}_${message.guild.id}`)
db.delete(`afkid_${message.author.id}_${message.guild.id}`)
db.delete(`afkAd_${message.author.id}_${message.guild.id}`)
  
message.member.setNickname(isim)
}
  
})

//////////////AFK SİSTEMİ ////////////////

/////////////// DM HOŞGELDİN ////////////////////////

client.on(`guildMemberAdd`, async member => {
  const phentoshg = new Discord.MessageEmbed()
    .setColor(`RANDOM`)
    .setImage(`resimlink`)
    .addField(`Sunucuya Hoşgeldin Kardeşim. Tag Alıp Destek Olabilirsin. Kayıt İçin Ses Odasında Bekliyoruz.`)
    .setFooter(`Çok İyisin Bakıyorumda ;)`)
  member.send(phentoshg);
});

///////////////////////DM HOŞGELDİN ///////////////////////

////////////////SA AS SİSTEMİ ///////////////////

client.on("message", async msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam, Hoşgeldin');
  }
});
///////////////// SA AS SİTEMİ //////////////////

/////////////////////////// TAG YAZINCA TAG YOLLAMA ////////////////

client.on("message", async msg => {
  if (msg.content.toLowerCase() === 'tag') {
    msg.channel.send('tagınız');
  }
});

/////////////// TAG YAZINCA TAG YOLLAMA ///////////////


///////////////TAG ROL SİSTEMİ ////////////////

client.on('userUpdate', async user => {
  
  let phentossunucu = client.guilds.cache.get('sunucuid');
  let tag = 'tagınız';
  let aile = 'ailerolunuz';
  let logc = phentossunucu.channels.cache.find(p => p.id == 'logkanalid');
if(!tag) return;
  if(!aile) return;
    if(!logc) return;
  let member = phentossunucu.members.cache.get(user.id);
  if (!member) return;
  if (!member.roles.cache.has(aile)) {
    if (member.user.username.includes(tag)) {
      member.roles.add(aile) 
    const pembed1 = new Discord.MessageEmbed()
    .setTitle('PHENTOS MODERASYON')
    .setFooter('Çok İyisin Bakıyorumda ;)')
    .setDescription(`${user} tagımızı alıp ailemize katıld!`)
    .setColor('RANDOM')
    logc.send(pembed1)
    } else {
      if (!member.user.username.includes(tag)) {
        
      member.roles.remove(aile)
        const pembed2 = new Discord.MessageEmbed()
        .setTitle('Phentos Moderasyon')
        .setColor('RANDOM')
        .setFooter('Çok İyisin Bakıyorumda ;)')
        .setDescription(`${user} adlı kullanıcı tagımmızı silerek ailemizden ayrıldı!`)
        logc.send(pembed2)
      }
    }
  
  }
      
});

//////////////TAG ROL SİSTEMİ ////////////////




client.login(config.token)
