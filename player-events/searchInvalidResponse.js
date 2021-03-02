module.exports = (client, message, query, tracks, content, collector) => {

    message.channel.send(`${client.emotes.error} - คุณต้องส่งหมายเลขที่ถูกต้องระหว่าง **1** และ **${tracks.length}** !`);

};