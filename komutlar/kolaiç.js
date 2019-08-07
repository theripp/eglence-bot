const Discord = require('discord.js'); // RidenLive Tarafından Editlenmiştir 

exports.run = (client, message , args) => {
	let mesaj = args.slice(0).join(' ');
	const embed = new Discord.RichEmbed()
	.setAuthor (' ')
 	.setColor (`Random`)
	.setDescription(`** ${mesaj} ` + message.author.username + ' Başarıyla Kola İçildi :D  **')
	
	.setImage(`https://media.giphy.com/media/VTKu3PEHKGYTe/giphy.gif`) 
  return message.channel.sendEmbed(embed);
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['açbirkokokola','glugglug'],
	permLevel: 0
};

exports.help = {
	name: 'kolaiç',
	description: 'Kola İçersiniz.',
	usage: 'kolaiç'
};