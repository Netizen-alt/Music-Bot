/*exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - คุณไม่ได้อยู่ในช่องเสียง !`);

    const queue = client.player.getQueue(message);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - ไม่มีเพลงที่กำลังเล่นอยู่ !`);

    message.channel.send(`**Server queue - ${message.guild.name} ${client.emotes.queue}**\nปัจจุบัน : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
        return `**#${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`
    }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** เพลงอื่น ๆ...` : `ในรายการเพลง **${queue.tracks.length}** เพลง(ฯลฯ)...`}`));

};*/
