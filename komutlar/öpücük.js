const Discord = require('discord.js'); 

exports.run = (client, message , args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kimi Öpücüğe Boğacağını Yazmalısın.***');
	const embed = new Discord.RichEmbed()
	.setAuthor (' ')
	.setColor (`Random`)
	.setDescription(`** ${mesaj} ` + message.author.username + ' Seni Öpücüğe Boğanın Öcünü Alacak mısın? :kiss: **')
	
	.setImage(`https://giphy.com/gifs/kiss-valentines-day-cat-108M7gCS1JSoO4`)
  return message.channel.sendEmbed(embed);
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: 'öpücüğeboğ',
	description: 'İstediğiniz Kişiyi Öpücüğe Boğarsınız',
	usage: 'öpücüğeboğ'
};
	