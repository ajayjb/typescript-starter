import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";

// Type Annotations
const str: string = "String";
const num: number = 20;
const bool: boolean = true;
const nul: null = null;
const undef: undefined = undefined;
const date: Date = new Date();

type Name = string;
// Type Annotations

// Interfaces
// Any time we are creating interface its like we are creating new type
interface Person {
  name: Name;
  age: number | null | undefined | boolean;
}

type PersonType = {
  name: Name;
  age: number | null | undefined | boolean;
};

const ajay: Person = {
  name: "Ajay",
  age: 10,
};

const loki: { name: string; age: number } = {
  name: "Loki",
  age: 10000000,
};

const suresh: PersonType = {
  name: "Loki",
  age: 10000000,
};

const users: Person[] = [
  {
    name: "Ajay",
    age: 10,
  },
];
// Interfaces

// Types with functions
function getNumber(num: number): number {
  return num;
}

const getNumberArrowFunc: (num: number) => number = (num: number): number => {
  return num;
};

const getNumberFuncAssignedToVariable = function someFunc(num: number): number {
  return num;
};

const getNumberAnonymousFunc: (num: number) => void = function (
  num: number
): void {
  console.log(num);
};

// This function never returns, means code does not even reach return
const throwErrorMessage = (message: string): never => {
  throw new Error(message);
};
// Types with functions

// Types with api calls
interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
  isbn: string;
  image: string;
  published?: string;
  publisher?: string;
}

const printBook = (book: Book) => {
  console.log(
    `${book.title} by ${book.author} published on ${book.published} by publisher ${book.publisher}`
  );
};

// printBook({
//   id: 1,
//   title: "Dinah, if I like.",
//   author: "Cortney Carroll",
//   genre: "Officia",
//   description: `Alice. 'Then you should say "With what porpoise?"' 'Don't you mean "purpose"?' said Alice. 'Call it what you had been looking over their shoulders, that all the rest, Between yourself and me.'.`,
//   isbn: "9783693694305",
//   image: "http://placeimg.com/480/640/any",
//   published: "1971-11-11",
//   publisher: "Eveniet Minima",
// });

interface BooksResponse {
  status: string;
  code: number;
  locale: string;
  seed: null;
  total: number;
  data: Book[];
}

const getBooks = async () => {
  const res = await axios.get("https://fakerapi.it/api/v2/books?_quantity=1");
  const data: BooksResponse = res.data as BooksResponse;
  const books = data.data;
  console.log(books);
};
// Types with api calls

// Objects
interface Company {
  name: string;
  code: string;
  dbUrl: string;
}

const company: Company = {
  name: "ABC",
  code: "abc01",
  dbUrl: "xyz",
};

const a: {
  b: {
    c: string;
  };
} = {
  b: {
    c: "Hi",
  },
};

const {
  b: { c },
  b: d,
} = a;

const getCompany1 = (company: Company): void => {
  const { name, code, dbUrl } = company;
  console.log(company.name, company.code, company.dbUrl);
};

const getCompany2 = ({ name, code, dbUrl }: Company): void => {
  console.log(name, code, dbUrl);
};

// And also example of function inside interface
interface Profile {
  name: string;
  age: number;
  cord1: [number, number];
  cord2: {
    lat: number;
    lng: number;
  };
  setAge(n: number): void; // or setAge: (n: number) => void
}

const profile: Profile = {
  name: "xyz",
  age: 12,
  cord1: [0, 0],
  cord2: {
    lat: 0,
    lng: 0,
  },
  // this inside arrow function is undefined
  // setAge: (n: number) => {
  //   this.age = n;
  // },
  // this inside arrow function is undefined
  setAge(n: number) {
    this.age = n;
  },
};

const { age }: { age: number } = profile;

const {
  cord1: [lat1, lng1],
}: { cord1: number[] } = profile;

const {
  cord2: { lat, lng },
}: {
  cord2: {
    lat: number;
    lng: number;
  };
} = profile;
// Objects

// Arrays
const array1: number[] = [1]; // 1D array
const array2: number[][] = [[1]]; // 2D array
const array3: number[][][] = [[[1]]]; // 3D array

const array4: (string | number | Date)[] = [new Date(), 11, "eee"];
const array5: ((string | number | Date)[] | string | number)[] = [
  [1, "ee", new Date()],
  "66",
  99,
];
// Arrays

// Tuples
// In TypeScript, a tuple is a special type of array that
// allows you to store a fixed number of elements with specified types.
// Tuples are useful when you want to represent a collection of
// values that are different types but still in a fixed order.

type Tup1 = [string, number, Date?];

const tup1: Tup1 = ["qa", 1, new Date()];
const tup2: [string, ...string[]] = ["loki", "thor"];
// Tuples

// Types with classes
class Base {
  static baseStaticField = 90;
  baseMethod() {
    return 10;
  }
}

class Extended extends Base {
  extendedField = super.baseMethod(); // 10
  static extendedStaticField = super.; // 90
}
class Vehicle {
  public brand: string;
  public name: string;
  public year: number;

  constructor(brand: string, name: string, year: number) {
    this.brand = brand;
    this.name = name;
    this.year = year;

    this.init();
  }

  private init(): void {
    console.log(`${this.brand}-${this.name}-${this.year}`);
  }

  public drive(): void {
    console.log("Chugga Chugga");
  }

  public horn(): void {
    console.log("Chugga Chugga");
  }

  static f(){}
}
class Car extends Vehicle {

  static x = super.f()

  constructor(brand: string, name: string, year: number) {
    super(brand, name, year);
  }


  private getBrand = (): string => {
    return this.brand;
  };

  public drive(): void {
    console.log("Vroom Vroom");
  }

  // anonymous function dont use inside class //
  // private getBrand2 = function (): string {
  //   return this.brand;
  // };

  // The this inside the anonymous function does not refer to the class
  // instance unless you explicitly bind it. In a TypeScript class,
  // this might be undefined (in strict mode) or point to an unexpected value
  // depending on how the function is called.

  // If you prefer to use a regular anonymous function,
  // you need to explicitly bind it to the class instance.

  // private getBrand2 = function (): string {
  //   return this.brand;
  // }.bind(this);
  // anonymous function dont use inside class //

  static getClassName(): string {
    return "Car";
  }
}

const fronx: Car = new Car("Suzuki", "Fronx", 2023);
// Types with classes

// TS Generics
function convertToArray<Type>(value: Type): Type[] {
  return [value];
}

const convertToArrayArrowFunc = <T>(value: T): T[] => {
  return [value];
};
// TS Generics
