const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setFooter(`${message.author.username} tarafından istendi. | © Mythia Bot Tüm hakları saklıdır.  `, message.author.avatarURL)
    .setDescription(':postbox: Özel mesajlarını kontrol et. :white_check_mark: ');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setFooter(` © BOTUN ADI  Davet Sistemi.`)
      .addField("» Linkler", `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=606838262362800128&scope=bot&permissions=2146958591 `+"**|**"+` [Oy ver](DİSCOD BOT LİST OY VERME LİNKİ) ` +"**|**"+` [SUNUCUNUZUN ADI](SUNUCUNUZUN SINIRSIZ DAVET LİNKİ)`) 

    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun davet linkini gönderir.',
  usage: 'davet'
};