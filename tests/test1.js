module.exports = {
    'Demo test Yoda Mobile' : function (browser) {
      browser
        .url('https://apps.socgen.com/yoda-mobile/')
        .waitForElementVisible('body')
        .setValue('input[type=email]', '**************')
        .setValue('input[type=password]', '***********')
        .click('button[type=submit]')
        .assert.titleContains('YODA')
        .waitForElementVisible('div[class=toolbar-inner]')
        .refresh()
        .waitForElementVisible('div[class=toolbar-inner]')
        .assert.visible('a[data-panel=left]')
        .click('a[data-panel=left]')
        .pause(500)
        .assert.visible('div[id=panel-left]')
        .assert.visible('div[class=left]')
        .assert.visible('div[class=left] > a')
        //.click('div[class=left] > a') // click issue: panel close does not work
        .pause(1000)
        .assert.visible('div[class=toolbar-inner] > textarea')
        .setValue('div[class=toolbar-inner] > textarea', 'hello')
        //.assert.visible('a[class=link] > span[class=.hideMic .showPlane]') // not able to assert
        .click('a[class=link] > span')
        .waitForElementVisible('div.message-inner-content.is-yoda-last-message')
        .assert.containsText('div.message-inner-content.is-yoda-last-message > div > span', 'Hello')
        .setValue('div[class=toolbar-inner] > textarea', 'who am i')
        .click('a[class=link] > span')
        .assert.containsText('div.message-inner-content.is-yoda-last-message > div > span', 'Your name is Rahul CHAKRABARTY, and you work for SGSC/CEN/BSC/DSO in INDE.')
        .pause(500)
        .end();
    }
  };