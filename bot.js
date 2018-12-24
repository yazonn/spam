const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("526326978836430858")
setInterval(function() {
channel.send(`i love to eat pizza`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
