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
  email: 'hackreactor@gmail.com',
  password: 'password'
};

const newUser = {
  company_name: 'Hack Reactor',
  email: 'communication@hackreactor.com',
  password: 'awesomebullets',
  address: '944 Market Street 8th floor',
  city: 'San Francisco',
  state: 'California',
  zip: '94102'
};

const coupon = {
  title: '$200 OFF Elevator!',
  item_name: 'New Elevator',
  description: 'Save meeeeee from Stair Wars!!! RIP',
  original: 2000,
  savings: 200,
  start_time: '2017-01-19 12:00:00',
  end_time: '2017-01-27 12:00:00',
  image: 'desktop/iHearth/biz_web/src/containers/Home/logo.png'
};

const {Builder, By, until} = require('selenium-webdriver');
const test = require('../testing');

test.describe('Qupid Business Web App', function() {
  let driver;

  test.before(function *() {
    driver = yield new Builder().forBrowser('chrome').build();
  });

  // You can write tests either using traditional promises.
  // it('works with promises', function() {
  //   return driver.get('http://www.google.com')
  //       .then(_ => driver.findElement(By.name('q')).sendKeys('webdriver'))
  //       .then(_ => driver.findElement(By.name('btnG')).click())
  //       .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 2000));
  // });

  // Or you can define the test as a generator function. The test will wait for
  // any yielded promises to resolve before invoking the next step in the
  // generator.
  // test.it('works with generators', function*() {
  //   yield driver.get('http://www.google.com/ncr');
  //   yield driver.findElement(By.name('q')).sendKeys('webdriver');
  //   yield driver.findElement(By.name('btnG')).click();
  //   yield driver.wait(until.titleIs('webdriver - Google Search'), 2000);
  // });

  test.it('can reach the home page', function*() {
    yield driver.get('https://intense-brook-68129.herokuapp.com');
    yield driver.wait(until.titleIs('Qupid: Home'), 2000);
    yield driver.findElement(By.tagName('a'));
  });

  test.it('can reach the login page and login as an existing user', function*() {
    yield driver.get('https://intense-brook-68129.herokuapp.com');
    yield driver.wait(until.titleIs('Qupid: Home'), 2000);
    yield driver.get('https://intense-brook-68129.herokuapp.com/login');
    yield driver.wait(until.titleIs('Qupid: Login'), 2000);
    yield driver.findElement(By.className('form-control email')).click();
    yield driver.findElement(By.className('form-control email')).sendKeys(user.email);
    yield driver.findElement(By.className('form-control password')).click();
    yield driver.findElement(By.className('form-control password')).sendKeys(user.password);
    yield driver.findElement(By.className('btn btn-success')).click();
    yield driver.wait(until.titleIs('Qupid: Login'), 2000);
    yield driver.findElement(By.className('login-success'));
  });

  test.it('can reach the signup page and create a new account', function*() {
    yield driver.get('https://intense-brook-68129.herokuapp.com');
    yield driver.wait(until.titleIs('Qupid: Home'), 2000);
    yield driver.findElement(By.className("signup-link")).click();
    yield driver.wait(until.titleIs('Qupid: Signup'), 2000);
    yield driver.findElement(By.className('form-control company_name')).click();
    yield driver.findElement(By.className('form-control company_name')).sendKeys(newUser.company_name);
    yield driver.findElement(By.className('form-control email')).click();
    yield driver.findElement(By.className('form-control email')).sendKeys(newUser.email);
    yield driver.findElement(By.className('form-control password')).click();
    yield driver.findElement(By.className('form-control password')).sendKeys(newUser.password);
    yield driver.findElement(By.className('form-control address')).click();
    yield driver.findElement(By.className('form-control address')).sendKeys(newUser.address);
    yield driver.findElement(By.className('form-control city')).click();
    yield driver.findElement(By.className('form-control city')).sendKeys(newUser.city);
    yield driver.findElement(By.className('form-control state')).click();
    yield driver.findElement(By.className('form-control state')).sendKeys(newUser.state);
    yield driver.findElement(By.className('form-control zip')).click();
    yield driver.findElement(By.className('form-control zip')).sendKeys(newUser.zip);
    yield driver.findElement(By.className('btn btn-success')).click();
    yield driver.wait(until.titleIs('Qupid: Signup'), 2000);
    yield driver.findElement(By.className('signup-success'));
  });

  test.it('can go back and forth between "my coupons" and "new coupon" pages', function*() {
    yield driver.get('https://intense-brook-68129.herokuapp.com');
    yield driver.wait(until.titleIs('Qupid: Home'), 2000);
    yield driver.get('https://intense-brook-68129.herokuapp.com/login');
    yield driver.wait(until.titleIs('Qupid: Login'), 2000);
    yield driver.findElement(By.className('form-control email')).click();
    yield driver.findElement(By.className('form-control email')).sendKeys(user.email);
    yield driver.findElement(By.className('form-control password')).click();
    yield driver.findElement(By.className('form-control password')).sendKeys(user.password);
    yield driver.findElement(By.className('btn btn-success')).click();
    yield driver.findElement(By.className("mycoupons-link")).click();
    yield driver.wait(until.titleIs('Qupid: My Coupons'), 2000);
    yield driver.findElement(By.className("newcoupon-link")).click();
    yield driver.wait(until.titleIs('Qupid: New Coupon'), 2000);
    yield driver.findElement(By.className("mycoupons-link")).click();
    yield driver.wait(until.titleIs('Qupid: My Coupons'), 2000);
    yield driver.findElement(By.className("newcoupon-link")).click();
    yield driver.wait(until.titleIs('Qupid: New Coupon'), 2000);
    yield driver.findElement(By.className("mycoupons-link")).click();
    yield driver.wait(until.titleIs('Qupid: My Coupons'), 2000);
    yield driver.findElement(By.className("newcoupon-link")).click();
    yield driver.wait(until.titleIs('Qupid: New Coupon'), 2000);
    yield driver.findElement(By.className("mycoupons-link")).click();
    yield driver.wait(until.titleIs('Qupid: My Coupons'), 2000);
    yield driver.findElement(By.className("newcoupon-link")).click();
    yield driver.wait(until.titleIs('Qupid: New Coupon'), 2000);
  });

  test.it('can reach the "meet the team" page and click to show example screens of the user mobile app', function*() {
    yield driver.get('https://intense-brook-68129.herokuapp.com');
    yield driver.wait(until.titleIs('Qupid: Home'), 2000);
    yield driver.get('https://intense-brook-68129.herokuapp.com/login');
    yield driver.wait(until.titleIs('Qupid: Login'), 2000);
    yield driver.findElement(By.className('form-control email')).click();
    yield driver.findElement(By.className('form-control email')).sendKeys(user.email);
    yield driver.findElement(By.className('form-control password')).click();
    yield driver.findElement(By.className('form-control password')).sendKeys(user.password);
    yield driver.findElement(By.className('btn btn-success')).click();
    yield driver.findElement(By.className("about-link")).click();
    yield driver.wait(until.titleIs('Qupid: Meet The Team'), 2000);
    yield driver.findElement(By.className('btn')).click();
    yield driver.findElement(By.id("summary")).click();
  });

  test.it('can fill out the new coupon form without uploading an image', function*() {
    yield driver.get('https://intense-brook-68129.herokuapp.com');
<<<<<<< HEAD
    yield driver.wait(until.titleIs('Qupid: Home'), 2000);
    yield driver.get('https://intense-brook-68129.herokuapp.com/login');
    yield driver.wait(until.titleIs('Qupid: Login'), 2000);
=======
    yield driver.wait(until.titleIs('Qupid: Home'), 1000);
    yield driver.get('https://intense-brook-68129.herokuapp.com/login');
    yield driver.wait(until.titleIs('Qupid: Login'), 1000);
>>>>>>> (test/selenium2) add more selenium tests
    yield driver.findElement(By.className('form-control email')).click();
    yield driver.findElement(By.className('form-control email')).sendKeys(user.email);
    yield driver.findElement(By.className('form-control password')).click();
    yield driver.findElement(By.className('form-control password')).sendKeys(user.password);
    yield driver.findElement(By.className('btn btn-success')).click();
    yield driver.findElement(By.className("newcoupon-link")).click();
    yield driver.wait(until.titleIs('Qupid: New Coupon'), 2000);
    yield driver.findElement(By.className('form-control title')).click();
    yield driver.findElement(By.className('form-control title')).sendKeys(coupon.title);
    yield driver.findElement(By.className('form-control item_name')).click();
    yield driver.findElement(By.className('form-control item_name')).sendKeys(coupon.item_name);
    yield driver.findElement(By.className('form-control description')).click();
    yield driver.findElement(By.className('form-control description')).sendKeys(coupon.description);
    yield driver.findElement(By.className('form-control original')).click();
    yield driver.findElement(By.className('form-control original')).sendKeys(coupon.original);
    yield driver.findElement(By.className('form-control savings')).click();
    yield driver.findElement(By.className('form-control savings')).sendKeys(coupon.savings);
    yield driver.findElement(By.className('form-control start_time')).click();
    yield driver.findElement(By.className('form-control start_time')).sendKeys(coupon.start_time);
    yield driver.findElement(By.className('form-control end_time')).click();
    yield driver.findElement(By.className('form-control end_time')).sendKeys(coupon.end_time);
    yield driver.findElement(By.className('btn btn-success')).click();
  });

  test.after(() => driver.quit());
});
