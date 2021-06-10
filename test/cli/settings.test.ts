import { GetSettings } from '../../src/cli/settings';
import * as apiSettings from '../../src/core/settings';
import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import { existsSync } from 'fs';
import * as fs from 'fs';

chai.use(sinonChai);
let expect = chai.expect;

const defaultSettings: apiSettings.Settings = {

}

const settingsFilepath = 'mate.json';
const files = [settingsFilepath];

function removeFiles() {
  files.forEach(file => {
    if (existsSync(file)) {
      console.log(`removing ${file}`)
      fs.rmSync(file)
    }
  })
}

describe('settings', () => {

  after(() => {
    removeFiles();
  })

  describe('GetSettings', () => {

    beforeEach(() => {
      removeFiles();
    })

    it('should call LoadSettings', async () => {
      let fake = sinon.replace(apiSettings, 'LoadSettings', sinon.fake(apiSettings.LoadSettings));
      return GetSettings(settingsFilepath, defaultSettings)
        .then(() => {
          expect(fake).to.have.been.called;
        })
    })

    it('should call SaveSettings', async () => {
      let fake = sinon.replace(apiSettings, 'SaveSettings', sinon.fake(apiSettings.SaveSettings));
      return GetSettings(settingsFilepath, defaultSettings)
        .then(() => {
          expect(fake).to.have.been.called;
        })
    })

  })

})
