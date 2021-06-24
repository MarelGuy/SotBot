module.exports = {
  name: "list",
  description: "Lista degli utenti con il role",
  execute: async (message, djs) => {
    try {
      const roleMapEmbed = new djs.MessageEmbed()
        .setColor("#000000")
        .setTitle("Role Manager")
        .addField(
          "Utenti con questo ruolo: ",
          await message.guild.roles.cache
            .get("855607023822438442")
            .members.map((m) => m.user.username),
        )
        .setTimestamp();
      message.channel.send(roleMapEmbed);
    } catch (err) {
      console.error(err);
      message.channel.send("Male! Il bot ha incontrato un errore!");
    }
  },
};
