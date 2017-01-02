// 测试脚本，它可以独立执行


var add = require('./001-add.js');
var expect = require('chai').expect;

//测试脚本里面应该包括一个或多个describe块， 每个describe块应该包括一个或多个it块。
//describe块称为"测试套件"（test suite），表示一组相关的测试。
//它是一个函数，第一个参数是测试套件的名称（"加法函数的测试"），第二个参数是一个实际执行的函数。

describe('加法函数的测试', function() {

    //it块称为"测试用例"（test case），表示一个单独的测试，是测试的最小单位。
    //它也是一个函数，第一个参数是测试用例的名称（"1 加 1 应该等于 2"），第二个参数是一个实际执行的函数。
    it('1 加 1 应该等于 2', function() {

        // 所谓"断言"，就是判断源码的实际执行结果与预期结果是否一致，如果不一致就抛出一个错误。
        // 上面这句断言的意思是，调用add(1, 1)，结果应该等于2
        expect(add(1, 1)).to.be.equal(2);
    });
});

describe('典型断言的测试', function() {
	
    it('相等或不相等', function() {
    	var foo = {bar: 'baz'};
        expect(4 + 5).to.be.equal(9);
        expect(4 + 5).to.be.not.equal(10);
        expect(foo).to.be.deep.equal({ bar: 'baz' });
    });
    it('布尔值为true', function() {
        expect('everthing').to.be.ok;
        expect(false).to.not.be.ok;
    });
    it('typeof', function() {
    	var Foo = function() {name: 'Daniel', age=46};
    	var foo = new Foo();
        expect('test').to.be.a('string');
        expect({ foo: 'bar' }).to.be.an('object');
        expect(foo).to.be.an.instanceof(Foo);
    });
    it('include', function() {
        expect([1, 2, 3]).to.include(2);
        expect('foobar').to.contain('foo');
        expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
    });
    it('empty', function() {
        expect([]).to.be.empty;
        expect('').to.be.empty;
        expect({}).to.be.empty;
    });
    it('match', function() {
        expect('foobar').to.match(/^foo/);
    });
});