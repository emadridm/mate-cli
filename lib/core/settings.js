"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveSettings = exports.LoadSettings = void 0;
const path = require("path");
const fsPromises = require("fs/promises");
async function LoadSettings(filepath, defaultSettings) {
    let settings;
    try {
        console.log(`loading settings from ${filepath} file...`);
        let data = await fsPromises.readFile(filepath);
        console.log('settings loaded!');
        settings = Object.assign(Object.assign({}, defaultSettings), JSON.parse(data.toString()));
    }
    catch (_a) {
        console.log('settings does not exists!');
        settings = defaultSettings;
    }
    return settings;
}
exports.LoadSettings = LoadSettings;
async function SaveSettings(settings, filepath) {
    try {
        console.log(`saving app settings at ${filepath} file ...`);
        await fsPromises.mkdir(path.dirname(filepath), { recursive: true });
        await fsPromises.writeFile(filepath, JSON.stringify(settings));
        console.log('settings saved!');
    }
    catch (_a) {
        console.log('settings can not be saved!');
    }
}
exports.SaveSettings = SaveSettings;
