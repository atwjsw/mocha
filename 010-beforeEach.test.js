var expect = require('chai').expect;

describe('beforeEach示例', function() {
    var foo = false;

    // 上面代码中，beforeEach会在it之前执行，所以会修改全局变量。
    beforeEach(function() {
        foo = true;
    });

    it('修改全局变量应该成功', function() {
        expect(foo).to.be.equal(true);        
    });

    it('修改全局变量应该成功', function() {
        expect(foo).to.be.not.ok;
    });
});
