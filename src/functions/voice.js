const createChannel = async function (voiceMember) {
  await voiceMember.guild.channels
    .create("Nuovo canale sgravo", {
      type: "voice",
    })
    .then((channel) => voiceMember.setChannel(channel.id));
};

const deleteChannel = async function (voiceMember) {
  const deleteChannel = await voiceMember.guild.channels.cache.get(
    voiceMember.channel.id,
  );
  deleteChannel.delete();
};

module.exports = { createChannel, deleteChannel };
