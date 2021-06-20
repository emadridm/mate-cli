"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
class Init extends command_1.Command {
    async run() {
        // const { args } = this.parse(Init);
        // const filepath: string = args.file || core.App.DefaultSettingsFilepath;
        // let settings = await cli.InitSettings(filepath, core.App.DefaultSettings)
        // console.log(settings);
    }
}
exports.default = Init;
Init.description = 'set up mate app';
Init.flags = {
    help: command_1.flags.help({ char: 'h' }),
};
Init.args = [{ name: 'file' }];
