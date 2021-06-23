enum AccountProvider {
  Mate = 0,
  Google,
  Outlook,
  Hotmail,
  Live,
  Yahoo,
  Exchange,
  Office365,
  Drobox,
  Github,
  Other
}

export abstract class BaseAccount {

  provider: AccountProvider;
  name: string;

  constructor(name: string) {
    this.provider = AccountProvider.Mate;
    this.name = name;
  }

}
