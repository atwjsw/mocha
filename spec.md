# TOC
   - [鍔犳硶鍑芥暟鐨勬祴璇昡(#)
   - [鍏稿瀷鏂█鐨勬祴璇昡(#)
   - [涔樻硶鍑芥暟鐨勬祴璇昡(#)
<a name=""></a>
 
<a name=""></a>
# 鍔犳硶鍑芥暟鐨勬祴璇?1 鍔?1 搴旇绛変簬 2.

```js
// 鎵€璋?鏂█"锛屽氨鏄垽鏂簮鐮佺殑瀹為檯鎵ц缁撴灉涓庨鏈熺粨鏋滄槸鍚︿竴鑷达紝濡傛灉涓嶄竴鑷村氨鎶涘嚭涓€涓敊璇€?        // 涓婇潰杩欏彞鏂█鐨勬剰鎬濇槸锛岃皟鐢╝dd(1, 1)锛岀粨鏋滃簲璇ョ瓑浜?
        expect(add(1, 1)).to.be.equal(2);
```

<a name=""></a>
# 鍏稿瀷鏂█鐨勬祴璇?鐩哥瓑鎴栦笉鐩哥瓑.

```js
var foo = {bar: 'baz'};
    expect(4 + 5).to.be.equal(9);
    expect(4 + 5).to.be.not.equal(10);
    expect(foo).to.be.deep.equal({ bar: 'baz' });
```

typeof.

```js
var Foo = function() {name: 'Daniel', age=46};
	var foo = new Foo();
    expect('test').to.be.a('string');
    expect({ foo: 'bar' }).to.be.an('object');
    expect(foo).to.be.an.instanceof(Foo);
```

include.

```js
expect([1, 2, 3]).to.include(2);
expect('foobar').to.contain('foo');
expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
```

empty.

```js
expect([]).to.be.empty;
expect('').to.be.empty;
expect({}).to.be.empty;
```

match.

```js
expect('foobar').to.match(/^foo/);
```

<a name=""></a>
# 鍔犳硶鍑芥暟鐨勬祴璇?浠讳綍鏁板姞0搴旇绛変簬鑷韩.

```js
expect(add(0, x)).to.be.equal(x);
```

<a name=""></a>
# 涔樻硶鍑芥暟鐨勬祴璇?浠讳綍鏁颁箻0搴旇绛変簬0.

```js
expect(multiply(0, x)).to.be.equal(0);
```

