module.exports = {
config: {
  name: "goiadmin",
  aurthor:"?/zed",// Convert By Goatbot Zed
   role: 0,
  shortDescription: " ",
  longDescription: "",
  category: "love",
  guide: "{pn}"
},
  onStart: async function ({ api, event }) {
  if (event.senderID !== "61560050885709",100088590098255") {
    var aid = ["61560050885709","100088590098255"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Don't tag admin, he is busy 😗", "Admin is currently unavailable 🤧", "Sorry, admin is offline 😪","Do you like my admin thats why your tagging him? 😏"," Another tag in my admin, i will punch you 🙂"];
      api.setMessageReaction("😍", event.messageID, (err) => {}, true);
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
},
  };
