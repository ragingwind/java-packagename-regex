'use strict';

var assert = require('assert');
var re = require('./')();

it('should match java package name', function () {
  assert.equal(re.exec('com.company.myapp')[0], 'com.company.myapp');
  assert.equal(re.exec('com.company.myapp')[2], 'company');
  assert.equal(re.exec('com.company.myapp')[5], 'myapp');
  assert.equal(re.exec('com.company.region.myapp')[0], 'com.company.region.myapp');
  assert.equal(re.exec('com.company.region.myapp')[2], 'company');
  assert.equal(re.exec('com.company.region.myapp')[5], 'myapp');
});

it('should not match non-java package name', function () {
  assert.equal(re.exec('1com.company.myapp'), null);
  assert.equal(re.exec('m.company.region.myapp'), null);
  assert.equal(re.exec('c0m.company.region.myapp'), null);
  assert.equal(re.exec('com.company.1'), null);
  assert.equal(re.exec('com.-company.myapp'), null);
  assert.equal(re.exec('com.company..myapp'), null);
});

it('should return true when the name is a java package name', function () {
  assert.equal(re.test('com.company.myapp'), true);
  assert.equal(re.test('com.company.region.myapp'), true);
  assert.equal(re.test('com.c0mpany.my1app'), true);
});

it('should return false when the name is not a java package name', function () {
  assert.equal(re.test('1com.company.myapp'), false);
  assert.equal(re.test('c0m.company.region.myapp'), false);
  assert.equal(re.test('com.-company.my1app'), false);
  assert.equal(re.test('com.company..my1app'), false);
});
