// 함수와 메서드


// 함수(function) : 재사용 가능한 프로그램 코드 집합 / 독립적으로 설계된 프로그램 코드 집합

function funTest(param1, param2) {
  // function body..
}



// 타입스크립트 함수 선언문에서 매개변수(parameter)와 반환값에 타입 주석을 붙이는 형태로 구성

function funType(param1 : string, param2 : string) : string {
    return `${param1} ${param2}`;
}

// void 타입
function funType2(a : number, b : number) : void {

}


// 함수 시그니처
// 시그니처(Signature) : 서명
// 함수의 원형에 명시되는 매개변수 와 반환값을 가리킴(선언부만 작성하고 구현부는 작성X -> 추상메서드 같음)

const printMe : (string, number) => void = function (name : string, age : number) : void {
    console.log(`${name} 입니다. 나이는 ${age}`);
};

printMe('zero86', 20);


// type 키워드로 타입 별칭 사용

type printFunctionSignature = (string, number) => void;

const printMe2 : printFunctionSignature = (name : string, age : number) : void => {
    console.log(`${name} 입니다. 나이는 ${age}`);
};


printMe2('동물의숲', 100);


// 선택적 매개변수
function fn(param1 : string, param2?: string) : void {

}


// 1등 함수
// 1등 함수란, 함수와 변수를 구분하지 않는 의미

let f = () => { return 'dd'};
let f2 = () => {return () => { return 'zz'} };

const f3 = f2();

// 기명함수표현식(이름이 있는 함수)
const f4 = function test() : void {

};

// 익명함수표현식(이름이 없는 함수)
const f5 = function() : void {

};

// 화살표 함수
const f6 = () : void => {};  // 실행문이 결과를 알려면 return 키워드를 사용
const f7 = () : number => 7; // 표현식은 return 키워드를 사용하지 않아도 알려줌

// 콜백 함수(callback function)
const f8 = (callback : () => void) => {
    return callback();
}

f8(function() {
    console.log('callback func');
});

console.log(f3());



// 메서드란?
// 행위, 클래스가 가지고있는 기능(어떤 입력을 받으면 처리한다)

class A {

    private num : number = 1;
    private num2 : number = 100;
    public static addNum : number = 1;

    // constructor(num : number, num2 : number) {
    //     this.num = num || 1;
    //     this.num2 = num2 || 100;
    // }

    public printNum() : void {
        console.log(`num : ${this.num}`);
    };


    public printNum2 : () => void = () : void => {
        console.log(`num2 : ${this.num2}`);
    };

    static print() : void {
        console.log('static method print!!');
    }

    static add() {
        this.addNum++;
        return this;
    }

}

const aObj = new A();
aObj.printNum();
aObj.printNum2();

A.print();

A.add().add(); // 메서드 체인
console.log(A.addNum); // 3