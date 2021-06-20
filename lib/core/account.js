"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealmDBConfig = exports.Account = void 0;
const Realm = require("realm");
var Provider;
(function (Provider) {
    Provider[Provider["Mate"] = 0] = "Mate";
    Provider[Provider["Google"] = 1] = "Google";
    Provider[Provider["Outlook"] = 2] = "Outlook";
    Provider[Provider["Hotmail"] = 3] = "Hotmail";
    Provider[Provider["Live"] = 4] = "Live";
    Provider[Provider["Yahoo"] = 5] = "Yahoo";
    Provider[Provider["Exchange"] = 6] = "Exchange";
    Provider[Provider["Office365"] = 7] = "Office365";
    Provider[Provider["Drobox"] = 8] = "Drobox";
    Provider[Provider["Github"] = 9] = "Github";
    Provider[Provider["Other"] = 10] = "Other";
})(Provider || (Provider = {}));
class Account {
    constructor(name) {
        this.provider = Provider.Mate;
        this.name = name;
    }
    static async create(dbfilepath, account) {
        try {
            const realm = await Realm.open({
                path: dbfilepath,
                schema: [Account]
            });
            realm.write(() => {
                account._id = new Realm.BSON.ObjectID();
                account = realm.create(Account.schema.name, account);
            });
            realm.close();
        }
        catch (reason) {
            console.log(reason);
        }
        return account;
    }
}
exports.Account = Account;
Account.schema = {
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
};
exports.RealmDBConfig = {
    path: 'accounts'
};
