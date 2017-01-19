// const webdriver = require('selenium-webdriver');
// const Capabilities = require('selenium-webdriver/lib/capabilities').Capabilities;
//
// var capabilities = Capabilities.firefox();
//
// // Tell the Node.js bindings to use Marionette.
// // This will not be necessary in the future,
// // when Selenium will auto-detect what remote end
// // it is talking to.
// capabilities.set('marionette', true);

// var driver = new webdriver.Builder().withCapabilities(capabilities).build();

const user = {
  email: 'nike@gmail.com',
  password: 'password'
};

const {Builder, By, until} = require('selenium-webdriver');
const test = require('../testing');

test.describe('Google Search', function() {
  let driver;

  test.before(function *() {
    driver = yield new Builder().forBrowser('chrome').build();
  });

  // You can write tests either using traditional promises.
  // it('works with promises', function() {
  //   return driver.get('http://www.google.com')
  //       .then(_ => driver.findElement(By.name('q')).sendKeys('webdriver'))
  //       .then(_ => driver.findElement(By.name('btnG')).click())
  //       .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 1000));
  // });

  // Or you can define the test as a generator function. The test will wait for
  // any yielded promises to resolve before invoking the next step in the
  // generator.
  // test.it('works with generators', function*() {
  //   yield driver.get('http://www.google.com/ncr');
  //   yield driver.findElement(By.name('q')).sendKeys('webdriver');
  //   yield driver.findElement(By.name('btnG')).click();
  //   yield driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  // });

  test.it('can reach home page', function*() {
    yield driver.get('http://localhost:3000');
    yield driver.wait(until.titleIs('Cupid: Home'), 1000);
    yield driver.findElement(By.tagName('a'));
  });

  test.it('can reach login page and login as an existing user', function*() {
    yield driver.get('http://localhost:3000');
    yield driver.wait(until.titleIs('Cupid: Home'), 1000);
    yield driver.findElement(By.tagName('a'));
    yield driver.get('http://localhost:3000/login');
    yield driver.findElement(By.className('form-control email')).click();
    yield driver.findElement(By.className('form-control email')).sendKeys(user.email);
    yield driver.findElement(By.className('form-control password')).click();
    yield driver.findElement(By.className('form-control password')).sendKeys(user.password);
    yield driver.findElement(By.className('btn btn-success')).click();
    yield driver.wait(until.titleIs('Cupid: Login'), 1000);
    yield driver.findElement(By.className('login-success'));
  });

  test.it('can reach signup page and create a new account', function*() {
    yield driver.get('http://localhost:3000');
    yield driver.wait(until.titleIs('Cupid: Home'), 1000);
    yield driver.findElement(By.tagName('a'));
    yield driver.get('http://localhost:3000/signup');
    yield driver.findElement(By.className('form-control email')).click();
    yield driver.findElement(By.className('form-control email')).sendKeys(user.email);
    yield driver.findElement(By.className('form-control password')).click();
    yield driver.findElement(By.className('form-control password')).sendKeys(user.password);
    yield driver.findElement(By.className('btn btn-success')).click();
    yield driver.wait(until.titleIs('Cupid: Login'), 1000);
    yield driver.findElement(By.className('login-success'));
  });

  test.after(() => driver.quit());
});
