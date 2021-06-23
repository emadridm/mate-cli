import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';

import { App } from '../../src/core/app'
import { InitApp } from '../../src/cli/init';
import * as apiSettings from '../../src/core/settings';

chai.use(sinonChai);
const expect = chai.expect;

describe('cli/init.ts', () => {

  class MateApp extends App {

  }

  describe('InitApp', () => {

    const fake = sinon.replace(apiSettings, 'LoadSettings', sinon.fake(apiSettings.LoadSettings));

    it('should return an instance of derived class', async () => {

      return InitApp(MateApp)
        .then((app) => {
          expect(app).instanceOf(MateApp);
        });

    })

    it('should call LoadSettings', async () => {

      return InitApp(MateApp)
        .then(() => {
          expect(fake).to.have.been.called;
        });

    })


  })

})
