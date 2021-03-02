exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: '#1eff00',
            title: 'Maki Commands Help List:',
            //author: { name: 'Maki Manual' },
            //footer: { text: 'https://discord.gg/WmgsVajD' },
            footer: { text: `🕛 Request By :  ${message.author.username}`},
            /*image: {
                url: 'https://cdn.discordapp.com/attachments/804349049192972308/815575826472894464/images.png'},*/
            fields: [
                //{ name: 'ทั่วไป', value: 'กำลังอยู่ระหว่างการพัฒนา' },
                //{ name: 'พิเศษ', value: 'กำลังอยู่ระหว่างการพัฒนา' },
                { name: 'เพลง', value: 'กำลังอยู่ระหว่างการพัฒนา' },
                //{ name: 'เกม', value: 'กำลังอยู่ระหว่างการพัฒนา' },
                //{ name: 'แอดมิน', value: 'กำลังอยู่ระหว่างการพัฒนา' },
            ],
            timestamp: new Date(),
            
        },
    });

};



/** คำสั่ง เปิด-ปิด ทั้งหมด
 * play = on
 * stop = on
 * skip = on
 * loop = on
 * pause = off
 * queue = off
 * resume = off
 * shuffle = off
 * volume = off
 */
/*รายการคำสั่งเพลง และ ทั่วไป
 `play`, `resume`,`loop`, `skip`, `stop`
 ปิง , เกม , แบน , เตะ , สร้างห้อง
*/