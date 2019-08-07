const Discord = require('discord.js'); // RidenLive Tarafından Editlenmiştir 

exports.run = (client, message , args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kas Yaptırmak İstediğin Kişiyi Etiketle.***');
	const embed = new Discord.RichEmbed()
	.setAuthor (' ')
 	.setColor (`Random`)
	.setDescription(`** ${mesaj} ` + message.author.username + ' Bir Daha Kas Yaptırmak İster misin?  **')
	
	.setImage(`https://media.giphy.com/media/AjfxmrtVYU1P2/giphy.gif`) 
  return message.channel.sendEmbed(embed);
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: 'kasyap',
	description: 'İstediğiniz Kişiye Kas Yaptırırsınız.',
	usage: 'kasyap'
};
	