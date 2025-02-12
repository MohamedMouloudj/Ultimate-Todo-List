"use client";
import React from "react";

const name: string = "John";
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];
const readTuple: readonly [num: number, str: string] = [2, "author"];

type Person = {
  name: string;
  age?: number;
};
const person: Person = {
  name: "John",
  age: 30,
};
const person1: Person = {
  name: "John",
};

let people: Person[];

function printName(name: string): void {
  console.log(name);
}
printName(name);

//The difference between void and never is that void return undefined while never return nothing
let printName2: (name: string) => void;
let printName3: (name: string) => never;

// let theAnyType: any; Not recommended
let theUnknownType: unknown;

type Person2 = Person & {
  role: string;
  profile: string;
};

// const person2: Person2 = {
//   role: "author",
// };

interface PersonInterface {
  name: string;
}

interface PersonInterface2 extends PersonInterface, Person2 {
  role: string;
}

const personInterface: PersonInterface2 = {
  name: "John",
  age: 30,
  role: "author",
  profile: "profile",
};
console.log(personInterface);

export default function Test() {
  return <div></div>;
}
