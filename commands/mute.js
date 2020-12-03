const Discord = require("discord.js"),

client = new Discord.Client();
      const ms = require("ms");
module.exports.run = async (client, message, args) => {

  let mutelu = "muterolid"; //buraya muteli rolünün id'sini koyunuz
let muteyetkisi = "muteyetkili" // mute yetkili id 
exports.run = async (client, msg, args) => {
  if (!msg.member.roles.cache.has(muteyetkisi)) {
  } else {
    let muted =
      msg.mentions.members.cache.first() ||
      msg.guild.members.cache.find(c => c.id === args[0]);
    if (!muted) {
      msg.reply("lütfen susturulacak üyeyi etiketleyiniz.");
    } else {
      if (
        muted.highestRole.calculatedPosition >=
        msg.member.highestRole.calculatedPosition
      ) {
        msg.reply("bu kullanıcı senden daha üst pozisyonda.");
      } else {
        let mutezaman = args[1]
          .replace("sn", "s")
          .replace("dk", "m")
          .replace("sa", "h")
          .replace("gün", "d");
        if (!mutezaman) {
          msg.reply("bir zaman girmediniz!");
        } else {
          let sebep = args.splice(2, args.length).join(" ");
          //!!sustur @etiket 0 zaman 1 sebep 2
          let log = msg.guild.channels.cache.find(c =>
            c.name.toLowerCase().includes("mute-log")
          );
          let vakit = mutezaman
            .replace("m", " dakika")
            .replace("s", " saniye")
            .replace("h", " saat")
            .replace("d", " gün");
          try {
            log.send(
              new Discord.MessageEmbed()
                .setTitle("Bir kullanıcı susturuldu!")
                .setFooter(`ID: ${muted.id}`, muted.user.displayAvatarURL)
                .setColor("RED")
                .setThumbnail(msg.author.displayAvatarURL)
                .addField(`İşlem sahibi`, `<@${msg.author.id}>`)
                .addField(`Susturulan`, `<@${muted.id}>`)
                .addField(
                  `Sebebi`,
                  `${sebep === "" ? "Sebep belirtilmemiş." : sebep}`
                )
                .addField(`Süre`, `${vakit}`)
            );
            muted.addRole(mutelu);
            msg.channel.send(
              `**${muted.user.tag}** kullanıcısı, **${msg.author.tag}** tarafından **${vakit}** süreyle susturuldu!`
            );
          } catch (e) {
            console.log(e);
          }
          setTimeout(async function() {
            muted.removes.roles(
              mutelu,
              "Susturulma cezası, sürenin bitmesi sebebiyle kaldırıldı."
            );
          }, ms(mutezaman));
        }
      }
    }
  }
};

  
  
};

exports.config = {
  name: "mute",
  guildOnly: true,
  aliases: ["chatmute"],
};