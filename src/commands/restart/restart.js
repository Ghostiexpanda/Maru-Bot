const Discord = require('discord.js');

const client = new Discord.Client();
const token = 'ODkzMDM4ODEwOTAyOTU4MTMw.R62Fb2.6iC7Qt56V7RiyNry06HRi6b6YdT';
client.login(token);

client.on('message', message => {
  if (message.channel.type != 'text' || message.author.bot)
    return;

  let command = message.content.split('!')[0].slice(1);
  let args = message.content.replace('.' + command, '').trim();
  let isBotOwner = message.author.id == '893038810902958130';

  switch (command) {
    case 'restart': {
      if (!isBotOwner)
        return;

      message.channel.send('Restarting...').then(m => {
        client.destroy().then(() => {
          client.login('token');
        });
      });
      break;
    }


    case 'shutdown': {
      if (!isBotOwner)
        return;

      message.channel.send('Shutting down...').then(m => {
        client.destroy();
      });
      break;
    }
  }
});