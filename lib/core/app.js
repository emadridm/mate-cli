"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const os = require("os");
const path = require("path");
class App {
    constructor() {
    }
}
exports.App = App;
App.Name = 'mate';
App.Home = os.homedir() || '';
App.DefaultHome = path.resolve(App.Home, App.Name);
App.DefaultSettingsFilepath = path.resolve(App.Home, `.${App.Name}.json`);
App.DefaultSettings = {
    corehome: path.resolve(App.DefaultHome, 'core'),
    appshome: path.resolve(App.DefaultHome, 'apps')
};
