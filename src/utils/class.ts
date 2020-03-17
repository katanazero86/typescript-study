// 객체와 클래스

// class 키워드를 이용하여 클래스를 선언
// "strictPropertyInitialization": false 로 해주지 않으면 속성초기화 관련 에러가 발생한다.

class Person {
    name : string;
    age? : number;

}


// 접근제한자 (생략시, public)
// public, private, protect
class Person2 {
    public name : string;
    private age : number;

    constructor(name : string, age: number) {
        this.name = name;
        this.age = age;
    }

}


// 생성자
// 클래스에서 단 하나만 존재, 클래스에 인스턴스 생성시 초기화 담당
// 생성자 메서드를 정의하지 않으면, 기본 생성자가 사용됨
// constructor()

class Person3 {


    // 이런식으로 속성을 선언하는게 가능
    constructor(public name: string, public age: number) {
    }
}


// 인터페이스 구현
interface PersonInterface {
    name : string;
    age : number;
}

// implements 키워드를 사용하여 상속받는다
class Person4 implements PersonInterface {
    // 일반적인 구현
    // age: number;
    // name: string;

    // 생성자와 접근제어자 키워드로 구현
    constructor(public name : string, public age : number) {
    }
}

// 추상클래스
// abstract class 키워드로 구현
// 속성 및 메서드에도 abstract 를 붙여 상속받는 클래스에서 구현하게 한다
// 추상 클래스는 하나 이상의 추상 메소드와 일반 메소드를 포함가능
abstract class Animal {

    abstract name : string;

    abstract fly();

    public sleep() {
        console.log('잠이 들었다..');
    }
}

// 클래스 상속
// extends 키워드 사용

class Penguin extends Animal {
    name: string;

    fly() {
        console.log('펭귄은 날지 못해요..');
    }

}

class Tiger extends Animal {
    name: string;

    constructor(name : string) {
        super(); // 부모클래스의 생성자 호출
        this.name = name;
    }

    fly() {
        console.log('호랑이는 날지 못해요..');
    }

}

let penguin = new Penguin();
penguin.name = '뽀로로';

let tiger = new Tiger('호랭이');

// static 속성
// 클래스.정적속성 or 정적 메서드
class A {
    private static initNum : number = 1;

    public static getInitNum() {
        return this.initNum;
    }

    public static incrementInitNum() {
        this.initNum++;
    }
}

A.incrementInitNum();
console.log(A.getInitNum()); // 2



export default () => {

    let zero86 = new Person();
    zero86.name = 'zero86';
    zero86.age = 10;

    let jack = new Person2('jack', 20);
    jack.name = 'jack2';

    let paul = new Person3('paul', 30);
    paul.name = 'paul!!';
    paul.age = 25;

    console.log(zero86);
    console.log(jack);
    console.log(paul);

    console.log(penguin);
    penguin.fly();
    penguin.sleep();

    console.log(tiger);
    tiger.fly();
}