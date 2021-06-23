import * as Realm from "realm";
import * as bson from 'bson';
import * as path from 'path';

type RealmConfig = Required<Pick<Realm.Configuration, 'path' | 'schema'>>;

export abstract class Document {

  private _id?: bson.ObjectID

  get id() { return this._id; }

  createID() {
    this._id = this._id || new Realm.BSON.ObjectID();
  }
}

export class Storage {

  private _root: string;

  get root() { return this._root; }

  constructor(root: string) {
    this._root = root;
  }

  static init(root: string) {
    return new Storage(root);
  }

  async openRealm(archive: RealmConfig) {
    archive.path = path.resolve(this.root, archive.path);
    try {
      return await Realm.open(archive);
    } catch (reason) {
      console.log(reason);
    }
  }
}
