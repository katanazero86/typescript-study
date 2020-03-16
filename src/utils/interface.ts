// 객체와 인터페이스

let obj : object = {
    name : 'zzzz',
    age : 20
};

obj = {newName : 'zzzz'};

// object 타입은 key:value 형태로 자유롭게 담을 수 있다.
// 위와같은 자유로움을 막고자 인터페이스 구문이 존재한다.

interface PersonInterface {
    name : string,
    age : number
}

// PersonInterface 타입으로 지정하면, name / age 속성만을 갖는 객체의 타입 범위를 좁힌다.
let personObj : PersonInterface = {name : '영웅왕', age : 25};
// personObj = {name : 'zzz'}; // error

// 선택속성 구문

interface CardInterface {
    name : string,
    max : number,
    bus? : boolean,
}

let cardObject : CardInterface = {name : '체크카드', max : 10};
cardObject = {name : '신용카드', max : 100, bus: true};

// 익명 인터페이스
// 이름 없는 인터페이스 생성이 가능하다.

let ai : {
    name : string
} = {
    name : 'zero86'
};