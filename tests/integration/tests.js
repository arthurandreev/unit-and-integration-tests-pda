var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });

  it('should have working number buttons to update the display of the running total', function () {
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#number2')).click();
    element(by.css('#number3')).click();
    element(by.css('#number4')).click();
    element(by.css('#number5')).click();
    element(by.css('#number6')).click();
    element(by.css('#number7')).click();
    element(by.css('#number8')).click();
    element(by.css('#number9')).click();
    element(by.css('#number0')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1234567890');
  });

  it('should be able to update the display with the result of the operation +', function () {
    running_total = element(by.css('#running_total'));
    element(by.css('#number9')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9');
  });

  it('should be able to update the display with the result of the operation -', function () {
  running_total = element(by.css('#running_total'));
  element(by.css('#number8')).click();
  element(by.css('#number8')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number8')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('80');
});

it('should be able to update the display with the result of the operation *', function () {
  running_total = element(by.css('#running_total'));
  element(by.css('#number6')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number3')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('18');
});

it('should be able to update the display with the result of the operation /', function () {
  running_total = element(by.css('#running_total'));
  element(by.css('#number4')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('4');
});

it('should be able to chain multiple operations together', function () {
  running_total = element(by.css('#running_total'));
  element(by.css('#number5')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number4')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('9');
});

it('should work as expected for a range of numbers #positive_numbers_result', function () {
  running_total = element(by.css('#running_total'));
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number4')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('250');
});

it('should work as expected for a range of numbers #negative_numbers_result', function () {
  running_total = element(by.css('#running_total'));
  element(by.css('#number5')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('-94');
});

it('should work as expected for a range of numbers #decimal_numbers_result', function () {
  running_total = element(by.css('#running_total'));
  element(by.css('#number5')).click();
  element(by.css('#number5')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('0.5555555555555556');
});

it('should work as expected for a range of numbers #large_numbers_result', function () {
  running_total = element(by.css('#running_total'));
  element(by.css('#number5')).click();
  element(by.css('#number5')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('5500000');
});

it('should return Infinity when divided by 0', function () {
  running_total = element(by.css('#running_total'));
  element(by.css('#number5')).click();
  element(by.css('#number1')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('Infinity');
});

});
