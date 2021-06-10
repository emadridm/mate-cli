import { Command, flags } from '@oclif/command';
import * as mate from '../core';

export default class Account extends Command {
  static description = 'list, create, update, login, logout or delete accounts';

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  }

  static args = [{ name: 'name' }];

  async run() {
    const { args, flags } = this.parse(Account);
    const name = args.name;
    //   if (name) {
    //     let settings = mate.cli.GetAppSettings();
    //     let account = new mate.Account(name);
    //     account.provider = mate.AccountProvider.Exchange;
    //     account = mate.Account.create(account);
    //   }
  }
}
