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
  const data: BooksResponse = <BooksResponse>res.data; // res.data as BooksResponse
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

// These static, public, private, protected are called modifiers

// public:
// (Instance Level) If we don't mention any modifier then its public. It can be called in same class, child class and on instance of class.

// private:
// (Instance Level)  It can be called in same class, not in child class or on instance of class.

// protected:
// (Instance Level)  It can be called in same class and in child class not on instance of class.

// static:
// (Class level) It can called in the same class and child class. not on instance of class.
// It can be called in static method only using this keyword. To use in other modifier we use the class name it self since it exists on the class.

class Base {
  static baseStaticField = 90;
  baseMethod() {
    return 10;
  }
}

class Extended extends Base {
  constructor() {
    super();
  }

  extendedField = super.baseMethod();
  static extendedStaticField = super.baseStaticField;
}
class Vehicle {
  public brand: string;
  public name: string;
  public year: number;
  public power: number;

  static description: string = "This is vehicle class";

  constructor(brand: string, name: string, year: number, power: number) {
    this.brand = brand;
    this.name = name;
    this.year = year;
    this.power = power;
  }

  public getName(): string {
    return `${this.brand}-${this.name}-${this.year}`;
  }

  public drive(): void {
    console.log("Chugga Chugga");
  }

  private horn(): void {
    console.log("Honk Honk");
  }

  protected stop() {
    console.log("Burr Burr");
  }

  static getClassName(): string {
    return "Vehicle";
  }
}
class Car extends Vehicle {
  static superClassDescription = super.description;
  static description = "This is car class";

  public type: string;

  constructor(
    brand: string,
    name: string,
    year: number,
    power: number,
    type: string
  ) {
    super(brand, name, year, power);
    this.type = type;

    this.init();
  }

  private init() {
    console.log(Car.description);
  }

  public getName = (): string => {
    return `${this.brand}-${this.name}-${this.year} ${this.type} Car`;
  };

  // In child class if we are over writing a method we can't change the modifier, this throws error.
  // If a method is public in super class, then it has to be public in child class, if we are over writing
  // private drive(): void {
  //   console.log("Vroom Vroom");
  // }

  public drive(): void {
    console.log("Vroom Vroom");
  }

  static getClassName(): string {
    return "Car";
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
}

// const fronx: Car = new Car("Suzuki", "Fronx", 2023, 500, "SUV");
// Types with classes

// TS Generics
function convertToArray<T>(value: T): T[] {
  return [value];
}

const convertToArrayArrowFunc = <T>(value: T): T[] => {
  return [value];
};

function getFirst<T>(a: T[]): T {
  return a[0];
}

const getFirst1 = <T>(a: T[]): T => {
  return a[0];
};

const nums = [1, 2, 3, 4];
getFirst<number>(nums); // or getFirst(nums);

const strs = ["1", "2", "3", "4"];
getFirst<string>(strs); // or getFirst(strs);

const some = new Map<string, number>([["k", 1]]);
const map = new Map<string, Map<string, number>>([["w", some]]);

type ApiRes<k = { ifIDontPassAnyThing: number }> = {
  data: k;
  isError: boolean;
};

type UserRes = ApiRes<{ name: string }>;
type BlogRes = ApiRes<{ title: string }>;

const user: UserRes = {
  data: { name: "loki" },
  isError: false,
};

const blog: BlogRes = {
  data: { title: "loki" },
  isError: false,
};

// Default
const ifIDontPassAnyThing: ApiRes = {
  data: { ifIDontPassAnyThing: 1 },
  isError: false,
};

const s: object = [1, 2];

// TS Generics

// type assertions

// type assertions
// Use type assertions when you need to override TypeScript's
// inferred type for specific cases (but use with caution)

//

{
  type User = {
    name: string;
  };

  const some1: any = { x: 1 };

  // Modern,
  const some2 = some1 as User;
  // console.log(some2.name); throws error at run time, not at compilation time
  // its just tells assume some1 as string,
  // it does not change value. if we assign wrong value we will get error at only run time not at compilation,
  // because ts just compiles code to js assuming it as string

  // Legacy
  const some3 = <string>some1;
}
