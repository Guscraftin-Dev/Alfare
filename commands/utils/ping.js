const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Répond Pong!',
    run (client, message, args) {
        const embed = new MessageEmbed()
            .setTitle('🏓 Pong!')
            .setURL('https://discord.com')
            .setThumbnail(client.user.displayAvatarURL())
            .addFields(
                { name: 'Latence', value: `\`${client.ws.ping}ms\``, inline: true },
                { name: 'Uptime', value: `<t:${parseInt(client.readyTimestamp / 1000)}:R>`, inline: true },
            )
            .setTimestamp()
            .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() });

        message.channel.send({ embeds: [embed] });
    },
    runSlash (client, interaction) {
        const embed = new MessageEmbed()
            .setTitle('🏓 Pong!')
            .setURL('https://discord.com')
            .setThumbnail(client.user.displayAvatarURL())
            .addFields(
                { name: 'Latence', value: `\`${client.ws.ping}ms\``, inline: true },
                { name: 'Uptime', value: `<t:${parseInt(client.readyTimestamp / 1000)}:R>`, inline: true },
            )
            .setTimestamp()
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() });

        interaction.reply({ embeds: [embed] });
    }
};