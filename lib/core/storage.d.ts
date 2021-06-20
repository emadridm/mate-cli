export interface Binder {
    path: string;
    schema: [any];
}
export declare class Database {
    private _root;
    get root(): string;
    private constructor();
    static init(root: string): Database;
    create(binder: Binder, doc: any): void;
}
