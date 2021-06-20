import { Command, flags } from '@oclif/command';
export default class Account extends Command {
    static description: string;
    static examples: string[];
    static flags: {
        help: import("@oclif/parser/lib/flags").IBooleanFlag<void>;
        provider: flags.IOptionFlag<string>;
        create: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        list: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
    };
    static args: {
        name: string;
    }[];
    run(): Promise<void>;
}
