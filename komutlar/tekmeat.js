const Discord = require('discord.js'); // RidenLive Tarafından Editlenmiştir 

exports.run = (client, message , args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Tekme Atacağın Kişiyi Etiketlemelisin.***');
	const embed = new Discord.RichEmbed()
	.setAuthor ('Güzel Tekmeydi Aga')
 	.setColor (`Random`)
	.setDescription(`** ${mesaj} ` + message.author.username + ' Sana Tekme Atanın Öcünü Alacak Mısın?  **')
	
	.setImage(`https://media.giphy.com/media/4ADnNHyuEdeH6/giphy.gif`) 
  return message.channel.sendEmbed(embed);
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
};

exports.help = {
	name: 'tekmeat',
	description: 'İstediğiniz Kişiye Tekme Atarsınız.',
	usage: 'tekmeat'
}; 