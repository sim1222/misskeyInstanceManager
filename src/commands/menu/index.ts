import { Command, Flags } from '@oclif/core';
import * as prompts from 'prompts';

export default class Menu extends Command {
	static description = 'Say hello';

	static examples = [
		`$ oex hello friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
	];

	static flags = {};

	static args = [];

	async run(): Promise<void> {
		const res = await prompts({
			type: 'select',
			name: 'value',
			message: 'Select a command',
			choices: [
				{ title: 'Hello', value: 'hello' },
				{ title: 'World', value: 'world' },
			],
		});
		this.log(`${res.value}`);
	}
}
