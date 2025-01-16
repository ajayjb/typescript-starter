const str: string = "String";
const num: number = 20;
const bool: boolean = true;
const nul: null = null;
const undef: undefined = undefined;

type Name = string;

interface Person {
  name: Name;
  age: number | null | undefined | boolean;
}

const ajay: Person = {
  name: "Ajay",
  age: 10,
};

const users: Person[] = [
  {
    name: "Ajay",
    age: 10,
  },
];

const getNumberArrowFunc: (num: number) => number = (num: number) => {
  return 5;
};

function getNumber(num: number): number {
  return num;
}

// TS Generics
function convertToArray<Type>(value: Type): Type[] {
  return [value];
}

const convertToArrayArrowFunc = <T>(value: T): T[] => {
  return [value];
};

convertToArray("kill");

const x = getNumber(19);

console.log(x);
