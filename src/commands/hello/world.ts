import { Command } from '@oclif/core';
import * as prompts from 'prompts';

export default class World extends Command {
	static description = 'Say hello world'

	static examples = [
		`<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`,
	]

	static flags = {}

	static args = []

	async run(): Promise<void> {
		const res = await prompts({
			type: 'text',
			name: 'name',
			message: 'What is your name?',
		});
		this.log('hello world! (./src/commands/hello/world.ts)' + res.name);
	}
}
