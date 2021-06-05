import { Command, flags } from '@oclif/command'

export default class Account extends Command {
  static description = 'list, create, update, login, logout or delete accounts'

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  }

  static args = [{ name: 'file' }]

  async run() {
    const { args, flags } = this.parse(Account)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /home/enrique/Projects/mate/src/commands/account.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
