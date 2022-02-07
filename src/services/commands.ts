import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

const commands = [
  {
    name: 'respeita',
    description: 'Replies to Joao',
  },
];

const rest = new REST({ version: '9' }).setToken('token');

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
      body: commands,
    });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
