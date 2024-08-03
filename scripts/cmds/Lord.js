module.exports = {
 config: {
 name: "Lord",
 version: "1.0",
 author: "Priyansh Rajput",
 countDown: 5,
 role: 0,
 shortDescription: "no prefix",
 longDescription: "no prefix",
 category: "no prefix",
 }, 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body.indexOf("Lord")==0 || event.body.indexOf("@Lord King")==0 || event.body.indexOf("Lord")==0) {
 return message.reply({
 body: "𝙋𝙡𝙚𝙖𝙨𝙚 𝙙𝙤𝙣'𝙩 𝙙𝙞𝙨𝙩𝙪𝙧𝙗 𝙈𝙮 𝙎𝙪𝙥𝙧𝙚𝙢𝙚 𝙠𝙞𝙣𝙜 𝙇𝙤𝙧𝙙 𝙞𝙨 𝙗𝙪𝙨𝙮 🔪 :) ",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/oGrj6Oi.jpeg","https://i.imgur.com/ZQNPu5g.jpeg")
 });
 }
 }
}
