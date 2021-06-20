"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
class Account extends command_1.Command {
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
exports.default = Account;
Account.description = 'list, create, update, login, logout or delete accounts';
Account.examples = [
    'account --help"',
    'account -c -p Exchange "Office mail"',
    'account -l'
];
Account.flags = {
    help: command_1.flags.help({ char: 'h' }),
    // flag with a value (-p, --provider=Mate)
    provider: command_1.flags.string({
        char: 'p',
        description: 'account provider',
        options: ['Mate', 'Exchange', 'Google'],
        default: 'Mate'
    }),
    // create flag (-c, --create)
    create: command_1.flags.boolean({
        char: 'c',
        description: 'create an account',
        exclusive: ['list']
    }),
    // create flag (-l, --list)
    list: command_1.flags.boolean({
        char: 'l',
        description: 'list all accounts that math with argument name'
    })
};
Account.args = [{ name: 'name' }];
