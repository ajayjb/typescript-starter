import axios from "axios";

// Type Annotations
const str: string = "String";
const num: number = 20;
const bool: boolean = true;
const nul: null = null;
const undef: undefined = undefined;
const date: Date = new Date();

type Name = string;

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

console.log(suresh.age);

const users: Person[] = [
  {
    name: "Ajay",
    age: 10,
  },
];

const getNumberArrowFunc: (num: number) => number = (num: number): number => {
  return num;
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

const x = getNumber(19);

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
  isbn: string;
  image: string;
  published: string;
  publisher: string;
}
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

getBooks();

class Car {
  private brand: string;
  private name: string;
  private year: number;

  constructor(brand: string, name: string, year: number) {
    this.brand = brand;
    this.name = name;
    this.year = year;
  }

  public init() {
    console.log(`${this.brand}-${this.name}-${this.year}`);
  }

  static getClassName() {
    return `Car`;
  }
}

console.log(Car.getClassName());

const fronx: Car = new Car("Suzuki", "Fronx", 2023);
fronx.init();

let isValMore: boolean | number = false;

const numbers: number[] = [-2, -5, 10];

for (let i: number = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    isValMore = true;
  }
}

for (const item of numbers) {
}
