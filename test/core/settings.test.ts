import { Settings, SaveSettings, LoadSettings } from '../../src/core/settings';
import * as chai from 'chai';
import { existsSync } from 'fs';
import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs';

const expect = chai.expect;

const filename = 'mate.json';
const filepathExist = path.resolve(os.homedir(), filename);
const filepathNotExist = path.resolve(path.resolve(os.homedir(), 'this/directory/does/not/exist'), filename);
const files = [
  filepathExist,
  filepathNotExist
]
const defaultSettings: Settings = {
  option1: "parameter1",
  group1: {
    option11: "parameter11",
    option12: "parameter12"
  }
}

function removeFiles() {
  files.forEach(file => {
    if (existsSync(file)) {
      console.log(`removing ${file}`)
      fs.rmSync(file)
    }
  })
}

dpescribe("@mate/core/settings", () => {

  after(() => {
    removeFiles();
  })

  describe('SaveSettings', () => {

    beforeEach(() => {
      removeFiles();
    })

    files.forEach((filepath) => {
      it(`Should save settings at ${filepath}`, async () => {
        let settings: Settings = {}
        return SaveSettings(settings, filepath)
          .then(() => {
            expect(existsSync(filepath)).to.true;
          });
      })
    })

  })

  describe('LoadSettings', () => {

    beforeEach(() => {
      removeFiles();
    })

    it(`Should load default settings ${filepathExist}`, async () => {
      return LoadSettings(filepathExist, defaultSettings)
        .then((settings) => {
          expect(settings).to.deep.equals(defaultSettings);
        });
    })

    /*
        it(`Should save settings ${filepathExist}`, async () => {
          return LoadSettings(filepathExist, defaultSettings)
            .then(() => {
              expect(existsSync(filepathExist)).to.true;
            });
        })
    */

  })

})
