export declare type Settings = {
    [key: string]: any;
};
export declare function LoadSettings<T extends Settings>(filepath: string, defaultSettings: T): Promise<T>;
export declare function SaveSettings<T extends Settings>(settings: T, filepath: string): Promise<void>;
