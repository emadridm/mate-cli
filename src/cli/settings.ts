import { Settings, LoadSettings, SaveSettings } from '../core';
import * as readline from 'readline';

function EntryAppSetting(setting: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise<string>((resolve) => {
    rl.question(setting, (answer) => {
      resolve(answer)
    })
  }).finally(() => {
    rl.close();
  })
}

async function ReadSettings(ds: any) {
  let k: keyof typeof ds;
  try {
    for (k in ds) {
      if (typeof ds[k] == 'object') {
        ds[k] = await ReadSettings(ds[k]);
      } else {
        let entry: string = await EntryAppSetting(`${k} [${ds[k]}]: `);
        if (entry) {
          ds[k] = entry;
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
  return ds;
}

export async function InitSettings<T extends Settings>(filepath: string, defaultSettings: T): Promise<T> {
  let settings: T = defaultSettings;
  try {
    settings = await LoadSettings(filepath, settings);
    console.log('entry preference settings ...');
    settings = await ReadSettings(settings);
    await SaveSettings(settings, filepath);

  } catch {
    console.log("something was wrong!");
  }
  return settings;
}

export async function GetSettings<T extends Settings>(filepath: string, defaultSettings: T): Promise<T> {
  let settings: T = defaultSettings;
  try {
    settings = await LoadSettings(filepath, settings);
    if (settings == defaultSettings) {
      console.log('entry preference settings ...');
      settings = await ReadSettings(settings);
      await SaveSettings(settings, filepath);
    }
  } catch {
    console.log("something was wrong!");
  }
  return settings;
}