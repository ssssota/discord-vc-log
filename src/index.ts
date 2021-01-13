import Discord from 'discord.js';

const client = new Discord.Client();

client.on('voiceStateUpdate', (old, current) => {
  const { member } = current;
  const username = member?.nickname ?? member?.displayName ?? '誰か';
  if (old.channel == null && current.channel != null)
    current.guild.systemChannel?.send(
      `🚪 ${username} が ${current.channel.name} に入室しました🏃‍♀️`
    );
  if (old.channel != null && current.channel == null)
    old.guild.systemChannel?.send(
      `🚪 ${username} が ${old.channel.name} から退室しました🚀`
    );
});

client.login();
