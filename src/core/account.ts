import * as Realm from "realm";
import * as bson from 'bson';

enum Provider {
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

export class Account {

  static schema = {
    name: 'Account',
    properties: {
      _id: 'objectId',
      provider: 'string',
      name: 'string',
      address: 'string?',
      username: 'string?',
      password: 'string?',
      status: 'string?'
    }
  }

  _id?: bson.ObjectID;
  provider: Provider;
  name: string;
  address?: string;
  username?: string;
  password?: string;
  status?: string;


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
    this.provider = Provider.Mate;
    this.name = name;
  }

}

interface DatabaseConfig {
  path: string,
  schema: [any]
}

export const RealmDBConfig: DatabaseConfig = {
  path: 'accounts'
}
