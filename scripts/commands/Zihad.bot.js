const fs = require("fs");
module.exports = {
  config:{
	name: "npx3",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
  const NAYAN = ['https://i.imgur.com/jP1JAtE.jpeg"https://i.imgur.com/CQsTNqY.jpeg']
    var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
    await axios.get(
      `${rndm}`,
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("boss")==0 || body.indexOf("👍")==0 || body.indexOf("😍")==0 || body.indexOf("jan")==0 || body.indexOf("hi")==0 || body.indexOf("admin")==0 || body.indexOf("jamai")==0 || body.indexOf("jihad")==0 || body.indexOf("xan")==0 || body.indexOf("❤️")==0) {
		var msg = {
				body: "👅👄_কিরে খাবি আমার বস জিহাদ কে .!🙈🥵",
				attachment: media
			const fs = require("fs");
module.exports = {
  config:{
	name: "npx3",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
  const NAYAN = ['https://drive.google.com/file/d/1bfs8jry0oiW_X2HO3SSYinWSgmJHmKRh/view?usp=drivesdk']
    var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
    await axios.get(
      `${rndm}`,
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("boss")==0 || body.indexOf("👍")==0 || body.indexOf("😍")==0 || body.indexOf("jan")==0 || body.indexOf("hi")==0 || body.indexOf("admin")==0 || body.indexOf("jamai")==0 || body.indexOf("jihad")==0 || body.indexOf("xan")==0 || body.indexOf("❤️")==0) {
		var msg = {
				body: "👅👄_কিরে খাবি আমার বস জিহাদ কে .!🙈🥵",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
		api.setMessageReaction("🩷", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}
