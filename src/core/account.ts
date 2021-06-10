import * as Realm from "realm";
import * as bson from 'bson';

export enum AccountProvider {
  Mate = 0,
  Google,
  Outlook,
  Hotmail,
  Live,
  Yahoo,
  Exchange,
  Office365,
  Other
}

export class Account {

  _id?: bson.ObjectID;
  provider: AccountProvider;
  name: string;
  address?: string;
  username?: string;
  password?: string;
  status?: string;

  static schema = {
    name: "EmailAccount",
    properties: {
      _id: "objectId",
      provider: "string",
      name: "string",
      address: "string",
      username: "string?",
      password: "string?",
      status: "string?"
    }
  }

  static async create(dbfilepath: string, account: Account): Promise<Account> {
    try {
      const realm = await Realm.open({
        path: dbfilepath,
        schema: [Account]
      })
      realm.write(() => {
        account._id = new Realm.BSON.ObjectID();
        account = realm.create<Account>(Account.schema.name, account);
      });
      realm.close();
    } catch (reason) {
      console.log(reason);
    }
    return account;
  }

  constructor(name: string) {
    this.provider = AccountProvider.Mate;
    this.name = name;
  }

}
