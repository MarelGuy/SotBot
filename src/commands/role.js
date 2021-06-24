module.exports = {
  name: "role",
  description: "Ti da il role sgravo",
  execute: async (message, djs) => {
    try {
      if (!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) {
        const noPermissionEmbed = new djs.MessageEmbed()
          .setColor("#000000")
          .setTitle("Role Manager")
          .setDescription("Non ho i permessi per aggiungerti un ruolo!")
          .setTimestamp();
        message.channel.send(noPermissionEmbed);
      } else {
        const role = message.guild.roles.cache.get("855607023822438442");
        if (message.member.roles.cache.has("855607023822438442")) {
          const roleEmbedTrue = new djs.MessageEmbed()
            .setColor("#000000")
            .setTitle("Role Manager")
            .setDescription("Hai già questo ruolo!")
            .setTimestamp();
          message.channel.send(roleEmbedTrue);
        } else {
          await message.member.roles.add(role);

          const roleEmbedFalse = new djs.MessageEmbed()
            .setColor("#000000")
            .setTitle("Role Manager")
            .setDescription("Ruolo aggiunto")
            .setTimestamp();

          message.channel.send(roleEmbedFalse);
        }
      }
    } catch (err) {
      console.error(err);
      message.channel.send("Male! Il bot ha incontrato un errore!");
    }
  },
};
