const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns oseph for Joseph", () => {
    assert.deepEqual(tail('Joseph'), 'oseph');
  });
});