import * as path from 'path';
import * as fsPromises from 'fs/promises';

export type Settings = {
  [key: string]: any
}

export async function LoadSettings<T extends Settings>(filepath: string, defaultSettings: T): Promise<T> {
  let settings: T;
  try {
    console.log(`loading settings from ${filepath} file...`);
    let data = await fsPromises.readFile(filepath);
    console.log('settings loaded!');
    settings = { ...defaultSettings, ...JSON.parse(data.toString()) };
  } catch {
    console.log('settings does not exists!')
    settings = defaultSettings;
  }
  return settings;
}

export async function SaveSettings<T extends Settings>(settings: T, filepath: string) {
  try {
    console.log(`saving app settings at ${filepath} file ...`);
    await fsPromises.mkdir(path.dirname(filepath), { recursive: true });
    await fsPromises.writeFile(filepath, JSON.stringify(settings));
    console.log('settings saved!');
  } catch {
    console.log('settings can not be saved!');
  }
}
