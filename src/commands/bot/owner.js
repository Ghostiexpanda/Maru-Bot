const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Ghostie`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `ScaredGhost#4534`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `Ghostie™`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[https://xxxxxxx.ca](https://xxxxxxx.nl)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 