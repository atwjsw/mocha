var multiply = require('../../002-multiply.js');
var expect = require('chai').expect;

describe('乘法函数的测试', function() {
	var x = 100;
    it('任何数乘0应该等于0',  function() {
        expect(multiply(0, x)).to.be.equal(0);
    });
});