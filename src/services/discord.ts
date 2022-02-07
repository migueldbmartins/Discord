import { Intents, Client } from 'discord.js';

export class DiscordClient {
  private client: Client;

  constructor() {
    this.client = new Client({ intents: [Intents.FLAGS.GUILDS] });
  }

  async replyToChannel() {
    this.client.on('interactionCreate', async (interaction) => {
      if (!interaction.isCommand()) return;

      if (interaction.commandName === 'respeita') {
        await interaction.reply('Joao Lopes relaxe uma beca');
      }
    });

    this.client.login();
  }
}
