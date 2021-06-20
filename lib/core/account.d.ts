import * as bson from 'bson';
declare enum Provider {
    Mate = 0,
    Google = 1,
    Outlook = 2,
    Hotmail = 3,
    Live = 4,
    Yahoo = 5,
    Exchange = 6,
    Office365 = 7,
    Drobox = 8,
    Github = 9,
    Other = 10
}
export declare class Account {
    static schema: {
        name: string;
        properties: {
            _id: string;
            provider: string;
            name: string;
            address: string;
            username: string;
            password: string;
            status: string;
        };
    };
    _id?: bson.ObjectID;
    provider: Provider;
    name: string;
    address?: string;
    username?: string;
    password?: string;
    status?: string;
    static create(dbfilepath: string, account: Account): Promise<Account>;
    constructor(name: string);
}
interface DatabaseConfig {
    path: string;
    schema: [any];
}
export declare const RealmDBConfig: DatabaseConfig;
export {};
