class person {
  
  // constructor() {
  //   this._age = 0;
  //   this._name = "no name";
  //   console.log('コンストラクタを実行');
  // }

  constructor(full) {
    this._first = full.split(" ")[0];
    this._last = full.split(" ")[1];
    this._full = full;
    this._age = 0;
    this._name = "no name";
    console.log('コンストラクタを実行');
  }
  log = [];

  set current(name) {
    this.log.push(name);
  }

  set setAge(age) {
    this._age = age;
  }

  set setFirstName(name) {
    this._first = name;
  }

  set setLastName(name) {
    this._last = name;
  }
 
  get age() {
    return 0;
  }

  get name() {
    return this._name;
  }
 
  a () {
    console.log(`firstは${this._first}`);
  }

  introduce() {
    console.log(`苗字は${this._first}です。名前は${this._last}です。 年齢は${this._age}歳です。`);
    console.log(this.log);
  }
}
 
// const bar = new hoge(); // コンストラクタを実行
// bar.name='タロウ';
// bar.setAge = 10;
// bar.foo(); // nameはhelloです


// bar.name='kiyosi';
// bar.setAge = 33;
// bar.foo(); // nameはworldです

const taro = new person("abc de");
taro.a();
taro.setAge = 26;
taro.setFirstName = "testFirst";
taro.setLastName = "testLast";

taro.current = "a";
taro.current = "b";
taro.current = 2;

taro.introduce();