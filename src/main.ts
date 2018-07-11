import { Rational } from "./rational";

const r1 = new Rational(3, 4);
const r2 = new Rational(2, 4);

console.log(`r1=${r1}, r2=${r2}`);

const r3 = r1.add(r2);

console.log(`r3=${r3}`);