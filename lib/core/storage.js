"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
class Database {
    constructor(root) {
        this._root = root;
    }
    get root() { return this._root; }
    static init(root) {
        return new Database(root);
    }
    create(binder, doc) {
    }
}
exports.Database = Database;
