const str: string = "String";
const num: number = 20;
const bool: boolean = true;
const nul: null = null;
const undef: undefined = undefined;

type Name = string;

interface Person {
  name: Name;
  age: number;
}

const ajay: Person = {
  name: "Ajay",
  age: 10,
};

const getNumber: (num: number) => number = (num: number) => {
  return 5;
};

const x = getNumber(19);

console.log(x);
