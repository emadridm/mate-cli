"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSettings = exports.InitSettings = void 0;
const core_1 = require("../core");
const readline = require("readline");
function EntryAppSetting(setting) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(setting, (answer) => {
            resolve(answer);
        });
    }).finally(() => {
        rl.close();
    });
}
async function ReadSettings(ds) {
    let k;
    try {
        for (k in ds) {
            if (typeof ds[k] == 'object') {
                ds[k] = await ReadSettings(ds[k]);
            }
            else {
                let entry = await EntryAppSetting(`${k} [${ds[k]}]: `);
                if (entry) {
                    ds[k] = entry;
                }
            }
        }
    }
    catch (error) {
        console.log(error);
    }
    return ds;
}
async function InitSettings(filepath, defaultSettings) {
    let settings = defaultSettings;
    try {
        console.log('entry preference settings ...');
        settings = await ReadSettings(settings);
        await core_1.SaveSettings(settings, filepath);
    }
    catch (_a) {
        console.log('init settings fail!');
    }
    return settings;
}
exports.InitSettings = InitSettings;
async function GetSettings(filepath, defaultSettings) {
    let settings = defaultSettings;
    try {
        settings = await core_1.LoadSettings(filepath, settings);
        if (settings === defaultSettings) {
            settings = await InitSettings(filepath, settings);
        }
    }
    catch (_a) {
        console.log('get settings fail!');
    }
    return settings;
}
exports.GetSettings = GetSettings;
