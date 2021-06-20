import { Command, flags } from '@oclif/command';
import * as core from '../core';
import * as cli from '../cli';

export default class Account extends Command {

  static description = 'list, create, update, login, logout or delete accounts';

  static examples = [
    'account --help"',
    'account -c -p Exchange "Office mail"',
    'account -l'
  ];

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-p, --provider=Mate)
    provider: flags.string({
      char: 'p',
      description: 'account provider',
      options: ['Mate', 'Exchange', 'Google'],
      default: 'Mate'
    }),
    // create flag (-c, --create)
    create: flags.boolean({
      char: 'c',
      description: 'create an account',
      exclusive: ['list']
    }),
    // create flag (-l, --list)
    list: flags.boolean({
      char: 'l',
      description: 'list all accounts that math with argument name'
    })
  }

  static args = [{ name: 'name' }];

  async run() {
    const { args } = this.parse(Account);
    const name = args.name;

    console.log('"Registro Personal"@Mate');
    console.log('"Registro Oficina"@Mate');
    console.log('"Correo Personal"@Google');
    console.log('"Correo Italtel"@Exchange');
    console.log('"Whatsapp Personal"@Whatsapp');
    console.log('"Dropbox Personal"@Dropbox');
    console.log('"Onedrive Italtel"@Onedrive');

  }
}
