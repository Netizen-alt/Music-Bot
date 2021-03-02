exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - คุณไม่ได้อยู่ในช่องเสียง !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - ไม่มีเพลงที่กำลังเล่นอยู่ !`);

    client.player.setRepeatMode(message, false);
    client.player.stop(message);

    message.channel.send(`${client.emotes.success} - เพลง **หยุด** เล่นในเซิร์ฟเวอร์นี้แล้ว !`);

};
