const djs = require("discord.js");
const client = new djs.Client();
client.commands = new djs.Collection();
const prefix = "!";

const fs = require("fs");

const commandFiles = fs
  .readdirSync("./src/commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  try {
    console.log("Pronto!");
  } catch (err) {
    console.error(err);
    message.channel.send("Male! Il bot ha incontrato un errore!");
  }
});

client.on("message", (message) => {
  try {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
      client.commands.get(command).execute(message, djs);
    } catch (error) {
      console.error(error);
      message.reply("there was an error trying to execute that command!");
    }
  } catch (err) {
    console.error(err);
    message.channel.send("Male! Il bot ha incontrato un errore!");
  }
});

client.on("voiceStateUpdate", async (oldMember, newMember) => {
  try {
    const { createChannel, deleteChannel } = require("./functions/voice");
    if (oldMember.channel === null && newMember.channel !== null) {
      if (newMember.channel.id == "855603917652099106")
        await createChannel(newMember);
    } else if (newMember.channel === null) {
      await deleteChannel(oldMember);
    }
  } catch (err) {
    console.error(err);
  }
});

client.login(process.env.TOKEN);
