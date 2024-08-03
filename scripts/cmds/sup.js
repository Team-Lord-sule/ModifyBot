module.exports = {
	config: {
			name: "sup",
			version: "1.0",
			author: "𝘿𝙖𝙧𝙘 𝙄𝙜𝙣𝙞𝙨 𝙅𝙪𝙣𝙞𝙤𝙧",
			countDown: 5,
			role: 0,
			shortDescription: "sarcasm",
			longDescription: "sarcasm",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "sup") return message.reply("𝙨𝙪𝙥 𝙢𝙮 𝙙𝙪𝙙𝙚, 𝙝𝙤𝙬 𝙖𝙧𝙚 𝙮𝙤𝙪 𝙙𝙤𝙞𝙣𝙜 𝙩𝙝𝙞𝙨 𝙛𝙞𝙣𝙚 𝙙𝙖𝙮 𝙙𝙪𝙙𝙚? 𝙎𝙤 𝙝𝙤𝙬 𝙘𝙖𝙣 𝙄 𝙝𝙚𝙡𝙥 𝙮𝙤𝙪 𝙤𝙣 𝙢𝙮 𝙙𝙪𝙙𝙚?");
}
};
