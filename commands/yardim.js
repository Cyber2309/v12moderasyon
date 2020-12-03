const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
const pembed = new Discord.MessageEmbed()
.setTitle('PHENTOS MODERASYON')
.setColor('RANDOM')
.setFooter('Çok İyisin Bakıyorumda ;)')
.setDescription(`__YARDIM MENÜSÜ__
:heart: !afk = AFK Olmanızı Sağlar.

:heart: !ban = Kullanıcıyı Sunucudan Yasaklamanıza Yarar.

:heart: !say = Sunucu İstatistiklerinizi Sayar.

:heart: !sil = Mesaj Silmenize Yarar.

:heart: !jail = Kişiyi Jail'e Atmanıza Yarar.
`)

message.channel.send(pembed)
};

exports.config = {
  name: "yardm",
  guildOnly: true,
  aliases: ["help"],
};