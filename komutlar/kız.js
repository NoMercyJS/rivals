const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {

    let embed1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Uyarı !")
    .setDescription("Bu Komutu Kullanmaya Yetkin Yok")
      if(!message.member.roles.cache.has("762306051336437800")) return message.channel.send(embed1);

   let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
 

let isim  =  args[1]
let yaş =  args[2]

if(!user) return message.channel.send(`Lütfen geçerli bir kullanıcı veya ID belirt.`)
  
 await user.setNickname(`Lütfen Bekleyiniz.`)
  user.roles.add("762306052699324446")
  user.roles.remove("762306275916644372")
  
  message.react('✅')
  
  setTimeout(() => {
    user.setNickname(`${isim} • ${yaş}`)
  },5000)


}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: "kız",
  description: "v12 kız kayıt."
};
