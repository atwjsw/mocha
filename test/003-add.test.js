var add = require('../001-add.js');
var expect = require('chai').expect;

describe('加法函数的测试', function() {
	var x = 100;
    it('任何数加0应该等于自身',  function() {
        expect(add(0, x)).to.be.equal(x);
    });
});