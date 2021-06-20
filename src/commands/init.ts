import { Command, flags } from '@oclif/command';
import * as core from '../core';
import * as cli from '../cli';

export default class Init extends Command {
  static description = 'set up mate app'

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  static args = [{ name: 'file' }]

  async run() {
    // const { args } = this.parse(Init);
    // const filepath: string = args.file || core.App.DefaultSettingsFilepath;
    // let settings = await cli.InitSettings(filepath, core.App.DefaultSettings)
    // console.log(settings);
  }
}
