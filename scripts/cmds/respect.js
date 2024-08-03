 module.exports = {
  config: {
    name: "respect",
    aliases: ["admin"],
    version: "1.0",
    author: "𝘿𝙖𝙧𝙘 𝙄𝙜𝙣𝙞𝙨 𝙅𝙪𝙣𝙞𝙤𝙧",
    countDown: 0,
    role: 0,
    shortDescription: "Give admin and show respect",
    longDescription: "Gives admin privileges in the thread and shows a respectful message.",
    category: "owner",
    guide: "{pn} respect",
  },

  onStart: async function ({ message, args, api, event }) {
    try {
      console.log('Sender ID:', event.senderID);

      const permission = ["61560050885709","61555026016762","100088590098255"];
      if (!permission.includes(event.senderID)) {
        return api.sendMessage(
          "𝙔𝙊𝙐 𝘼𝙍𝙀 𝙉𝙊𝙏 𝘼𝙇𝙇𝙊𝙒𝙀𝘿 𝙏𝙊 𝙐𝙎𝙀 𝙏𝙃𝙄𝙎 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝙎𝙊 𝙔𝙊𝙐 𝙈𝙐𝙎𝙏 𝙎𝙏𝙊𝙋 𝙐𝙎𝙄𝙉𝙂 𝙏𝙃𝙄𝙎 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝘽𝙀𝙁𝙊𝙍𝙀 𝙄 𝘾𝘼𝙇𝙇 𝙈𝙔 𝙊𝙒𝙉𝙀𝙍 𝙏𝙊 𝘽𝘼𝙉 𝙔𝙊𝙐 𝙁𝙊𝙍 𝘼𝙇𝙇 𝙈𝙔 𝙊𝙒𝙉𝙀𝙍𝙎 𝘽𝙊𝙏𝙎 𝘼𝙉𝘿 𝙔𝙊𝙐 𝙒𝙄𝙇𝙇 𝙉𝙀𝙑𝙀𝙍 𝙀𝙑𝙀𝙍 𝙏𝙍𝙔 𝙏𝙊 𝘿𝙊 𝙄𝙏 𝘼𝙂𝘼𝙄𝙉 𝙊𝙍 𝙀𝙇𝙎𝙀'𝙎 𝙔𝙊𝙐 𝙒𝙄𝙇𝙇 𝘽𝙀 𝙄𝙉 𝘽𝙄𝙂 𝙏𝙍𝙊𝙐𝘽𝙇𝙀 𝙎𝙊 𝙎𝙏𝙊𝙋 𝙒𝙃𝘼𝙏𝙀𝙑𝙀𝙍 𝙔𝙊𝙐 𝘼𝙍𝙀 𝘿𝙊𝙄𝙉𝙂.",
          event.threadID,
          event.messageID
        );
      }

      const threadID = event.threadID;
      const adminID = event.senderID;
      
      // Change the user to an admin
      await api.changeAdminStatus(threadID, adminID, true);

      api.sendMessage(
        `𝙊𝙃𝙃 𝙈𝙔 𝙇𝙊𝙍𝘿 𝙄 𝘼𝙈 𝙈𝘼𝙆𝙄𝙉𝙂 𝙔𝙊𝙐 𝙂𝙍𝙊𝙐𝙋 𝘼𝘿𝙈𝙄𝙉 𝙁𝙊𝙍 𝙏𝙃𝙄𝙎 𝙂𝙍𝙊𝙐𝙋 𝘾𝙃𝘼𝙏 𝘼𝙉𝘿 𝙋𝙇𝙀𝘼𝙎𝙀 𝙏𝙀𝘼𝘾𝙃 𝙏𝙃𝙀𝙈 𝘼 𝙇𝙀𝙎𝙎𝙊𝙉 𝙏𝙊 𝙉𝙀𝙑𝙀𝙍 𝙀𝙑𝙀𝙍 𝙏𝙍𝙔 𝙏𝙊 𝙈𝙀𝙎𝙎 𝙒𝙄𝙏𝙃 𝙈𝙀 𝙊𝙍 𝙀𝙇𝙎𝙀 𝙔𝙊𝙐 𝘾𝘼𝙉 𝘿𝙊 𝙎𝙊𝙈𝙀𝙏𝙃𝙄𝙉𝙂 𝙏𝙊 𝙏𝙃𝙄𝙎 𝘼𝙉𝘿 𝙋𝙇𝙀𝘼𝙎𝙀 𝙈𝘼𝙆𝙀 𝙈𝙀 𝙃𝘼𝙋𝙋𝙔 😊`,
        threadID
      );
    } catch (error) {
      console.error("Error promoting user to admin:", error);
      api.sendMessage("𝙊𝙃𝙃 𝙈𝙔 𝙇𝙊𝙍𝘿, 𝙩𝙝𝙚 𝙢𝙪𝙨𝙩 𝙗𝙚 𝙖 𝙚𝙧𝙧𝙤𝙧 𝙬𝙞𝙩𝙝 𝙢𝙖𝙠𝙞𝙣𝙜 𝙮𝙤𝙪 𝙜𝙧𝙤𝙪𝙥 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙤𝙧𝙨 𝙨𝙤 𝙥𝙡𝙚𝙖𝙨𝙚 𝙗𝙚 𝙥𝙖𝙩𝙞𝙚𝙣𝙩 𝙖𝙣𝙙 𝙄 𝙬𝙞𝙡𝙡 𝙙𝙤 𝙚𝙫𝙚𝙧𝙮𝙩𝙝𝙞𝙣𝙜 𝙩𝙤 𝙢𝙖𝙠𝙚 𝙮𝙤𝙪 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙤𝙧𝙨 𝙩𝙝𝙖𝙣𝙠 𝙮𝙤𝙪 😊😓", event.threadID);
    }
  },
};
