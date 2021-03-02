module.exports = (client, message, query) => {

    message.channel.send(`${client.emotes.error} - ไม่พบผลลัพธ์บน YouTube สำหรับ ${query} !`);

};