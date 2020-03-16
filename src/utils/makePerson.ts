const makePerson = (name: string, age: number) => {
    return {name: name, age: age};
};

const makePersonTest = () => {
  console.log(
      makePerson('test', 100),
      makePerson('zzzz', 999)
  );
};


export {
    makePerson,
    makePersonTest
}