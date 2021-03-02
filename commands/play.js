exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - คุณไม่ได้อยู่ในช่องเสียง !`);

    if (!args[0]) return message.channel.send(`${client.emotes.error} - โปรดระบุชื่อเพลง !`);

    client.player.play(message, args.join(" "));

};
