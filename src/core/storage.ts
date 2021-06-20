export interface Binder {
  path: string,
  schema: [any]
}

export class Database {

  private _root: string;

  get root() { return this._root; }

  private constructor(root: string) {
    this._root = root;
  }

  static init(root: string) {
    return new Database(root);
  }

  create(binder: Binder, doc: any) {

  }
}
