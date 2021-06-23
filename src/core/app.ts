import * as os from 'os';
import * as path from 'path';
import { Settings } from './settings';

export abstract class App {

  static Name = 'mate';
  static Home = os.homedir() || '';

  static fileSettings = path.resolve(App.Home, `.${App.Name}.json`);

  static DefaultSettings: Settings = {
    home: path.resolve(App.Home, `.${App.Name}`),
  }

  settings: Settings = App.DefaultSettings;

  constructor() {
  }

}
