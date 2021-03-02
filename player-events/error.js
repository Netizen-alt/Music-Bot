module.exports = (client, error, message) => {

    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - ไม่มีเพลงที่เล่นบนเซิร์ฟเวอร์นี้!`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - คุณไม่ได้เชื่อมต่อกับช่องเสียงใด ๆ!`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - ฉันไม่สามารถเข้าร่วมช่องเสียงของคุณได้โปรดตรวจสอบสิทธิ์ของฉัน!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - เกิดข้อผิดพลาด ...: ${error}`);
    };

};
