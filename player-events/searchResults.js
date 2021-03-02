module.exports = (client, message, query, tracks) => {

    message.channel.send({
        embed: {
            color: '#ff0909',
            author: { name: `นี่คือผลการค้นหาของคุณสำหรับ เพลง **${query}**` },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
            footer: { text: `🕛 Request By :  ${message.author.username}`},
        },
    });

};