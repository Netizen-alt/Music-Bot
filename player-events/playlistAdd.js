module.exports = (client, message, playlist) => {

    message.channel.send(`${client.emotes.music} - ${playlist.title} ถูกเพิ่มลงในคิวแล้ว (**${playlist.items.length}** เพลง) !`);

};