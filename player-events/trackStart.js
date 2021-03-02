module.exports = (client, message, track) => {

  message.channel.send(`${client.emotes.music} - กำลังเล่น ${track.title} ห้อง ${message.member.voice.channel.name} ...`);

};