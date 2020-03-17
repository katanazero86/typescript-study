// 타입단언 (type assertion)
// 마치 제네릭 지정하는거 같은..?

// (<type>)
// as type

// 타입단언은 타입스크립트 컴파일러에게 이 타입에 추론은 이걸로 하면되라고 단언하는걸로 생각하자

let someValue: any = "this is a string";
let val = 123456;
let strLength: number = (<string>someValue).length;

let numVal: number = (<number>val);

