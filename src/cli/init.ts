import { App } from '../core/app'
import { LoadSettings } from '../core/settings';

export async function InitApp(MateApp: new () => App, fileconf: string = App.fileSettings): Promise<App> {
  let app = new MateApp(); // new app with default settings.
  try {
    app.settings = await LoadSettings(fileconf, app.settings);
  } catch (reason) {
    console.log(reason);
  }
  return app;
}
