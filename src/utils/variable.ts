// 타입스크립트 변수 선언문

// 타입스크립트는 변수 선언문을 확장해 다음과 같은 형태로 타입을 명시할 수 있다.
// 타입이 불일치 하면 오류가 발생
// 타입 주석(type annotation) 이라고 한다.
let num : number = 1;  // number
const name : string = 'zero86'; // string
let isCheck : boolean = true; // boolean
let obj : object = {}; // object

const print = () => {
    console.log(`name : ${name}  num : ${num}`);
};


// 타입 추론(type inference)
// 자바스크립트와 호환성을 위해 타입 주석 부분을 생략 가능
// 다음과 같은 코드를 만나면 대입 연산자 오른쪽 값에 따라 변수의 타입을 지정
let n = 1; // n의 타입을 number 로 판단
let b = true; // b의 타입을 boolean 로 판단

// 타입이 지정되면 이후에 각 변수에는 해당 타입의 값만 저장 가능

// any 타입
// 타입스크립트는 자바스크립트와 호환을 위해 any 라는 이름의 타입을 제공
// 어떤 종류의 값도 저장 가능
let a : any = 1;
a = 'zz';

// undefined 타입
// 자바스크립트에서 변수를 초기화하지 않으면 undefined 값을 가진다. 그러나 타입스크립트에서는 타입이기도 하고, 값이기도 하다

let u : undefined = undefined; // 오직 undefined 값만 취할수 있다

export default print;