const Discord = require('discord.js');

exports.run = (client, message, args) => {
  const bulunanyıl = new Date().getFullYear();
  const yaş = Math.random() * (110 - 1);
  return message.channel.send(`Şu anda **${yaş.toFixed()}** yaşındasın. **${bulunanyıl.toFixed() - yaş.toFixed()}** yılında doğdun.`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yas"],
  permLevel: 0
};

exports.help = {
    name: 'yaş',
  description: 'Yaşınızı ölçer.',
  usage: 'yaş'
};