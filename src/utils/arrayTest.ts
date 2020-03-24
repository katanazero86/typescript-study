// 배열

const arr = new Array();
arr.push(1);
arr.push(2);
arr.push(3);

const arr2 = [1,2,3];

const objTest = {
    name : 'foo'
};

console.log(Array.isArray(arr)); // true
console.log(Array.isArray(objTest)); // false


// 배열의 타입

const arrayTest:string[] = new Array();
arrayTest.push('a');
arrayTest.push('b');
// arrayTest.push(1); //  error

const str : string = 'abc';
console.log(str[0]);

for(let c of str) { // 배열의 요소값을 순회
    console.log(c)
}

const strArray : string[] = str.split('');

for(let index in strArray) {  // 배열의 index 값을 순회
    console.log(index)
}

for(let value of ['j.j', 't.k', 'k.k']) {  // 배열의 요소값을 순회
    console.log(value)
}

console.log(strArray.length);

// 제네릭 타입 정의
const getArrayLength = <T>(arr : T[]) : number => {
    return arr.length;
}

console.log(getArrayLength(strArray));

interface TestInterface {
    value : number,
    name : string,
}

const arrInterface : TestInterface[] = new Array();
arrInterface.push({
    value : 1,
    name : '김치찌개'
});
arrInterface.push({
    value : 2,
    name : '강강술래'
});

console.log(getArrayLength(arrInterface));


// 연습문제 (1~100 까지 합)
let result : number = 0;
for(let i : number = 1; i < 101; i++) {
    result += i;
}

console.log(result);

// 1~100까지 홀수의 합

let result2 : number = 0;
for(let i : number = 1; i < 101; i++) {
    if(i % 2 != 0) {
        result2 += i;
    }
}

console.log(result2);

// map

const testArray : number[] = [1,2,3,4,5,6,7,8,9,10];

let mapResult = testArray.map((value : number) => {
    return value * 2;
});

console.log(mapResult);

// filter

let filterResult = testArray.filter((value : number) => {
    return value % 2 === 0;
});

console.log(filterResult);

// 함수형 프로그래밍에서 순수함수(pure function) 이라는 조건을 만족해야함. -> side-effect 가 없는 함수
// 타입스크립트에서 이러한 순수함수 구현을 위해 readonly 키워드를 제공

function pureFunction(arr : readonly number[]) {
 // arr.push(1); // error
}


// 튜플
// 어떤 언어에는 tuple 이라는 타입이 존재 (JS 에는 없다) -> array 와 비슷하다.

const array : number[] = [1,2,3];
const tuple : [boolean, string] = [true, 'success'];

// 보통 튜플을 사용할 때는 별칭으로 의미를 명확하게 한다
type TupleType = [boolean,string];

const tuple2 : TupleType = [false, 'fail'];

// 튜플을 이용하여 비구조화 할당문에 적용이 가능

function callError() : TupleType {

    return [true, 'error..'];

}

const [errorResult, errorMessage] = callError();
console.log(`${errorResult} : ${errorMessage}`);