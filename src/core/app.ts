import * as os from 'os';
import * as path from 'path';
import { Settings } from './settings';

export class App {

  static Name = 'mate';
  static Home = os.homedir() || '';
  static DefaultHome = path.resolve(App.Home, App.Name);
  static DefaultSettingsFilepath = path.resolve(App.Home, `.${App.Name}.json`);

  static DefaultSettings: Settings = {
    corehome: path.resolve(App.DefaultHome, 'core'),
    appshome: path.resolve(App.DefaultHome, 'apps')
  }

  private constructor() {

  }

}


