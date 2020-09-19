const addContext = require('mochawesome/addContext');

describe('Example', function () {
  beforeEach(async function () {
    await device.reloadReactNative();
  });
  
  it('should have welcome screen', async function () {
    await expect(element(by.id('welcome'))).toBeVisible();
    addContext(this,'Have welcome screen')
  });
  
  it('should show hello screen after tap', async function () {
    addContext(this,'Tap hello button')
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello!!!'))).toBeVisible();
    addContext(this,'Have hello button')
  });
  
  it('should show world screen after tap', async function () {
    addContext(this,'Tap world_button')
    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
    addContext(this,'Have world_button')

    addContext(this, 'http://i.imgur.com/eoaDEYp.gif');
  });
});