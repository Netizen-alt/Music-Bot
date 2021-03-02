module.exports = (client, message, queue) => {

    message.channel.send(`${client.emotes.error} - เพลงหยุดลงเนื่องจากไม่มีเพลงอยู่ในคิว!`);

};