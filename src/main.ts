// 1
// type User = {
//   id: number;
//   name: string;
//   email?: string | null;
// };
//
// const profile1: User = {
//   id: 1,
//   name: 'Alice',
// };
//
// const profile2: User = {
//   id: 2,
//   name: 'Bob',
//   email: null,
// };
//
// const profile3: User = {
//   id: 3,
//   name: 'Charlie',
//   email: '',
// };
//
// const profile4: User = {
//   id: 4,
//   name: 'David',
//   email: 'david123@gmail.com',
// };
//
// const email1 = profile1.email ?? 'не обнаружено';
// const result1 = email1 || 'пусто';
// console.log(result1);
//
// const email2 = profile2.email ?? 'не обнаружено';
// const result2 = email2 || 'пусто';
// console.log(result2);
//
// const email3 = profile3.email ?? 'не обнаружено';
// const result3 = email3 || 'пусто';
// console.log(result3);
//
// const email4 = profile4.email ?? 'не обнаружено';
// const result4 = email4 || 'пусто';
// console.log(result4);

// 2
// function GreatestIntegerDivisor(num: number): number {
//   if (num === 1) return 1;
//
//   for (let i = Math.floor(num / 2); i >= 1; i--) {
//     if (num % i === 0) {
//       return i;
//     }
//   }
//   return 1;
// }
//
// function printGreatestDivisors(numbers: number[]): void {
//   numbers.forEach((num) => {
//     const greatestDivisor = GreatestIntegerDivisor(num);
//     console.log(`${num} - ${greatestDivisor}`);
//   });
// }
//
// const numbers = [1, 5, 11, 12, 21, 61, 85, 123];
// printGreatestDivisors(numbers);

// function sumObjectValues(obj: Record<string, number>): number {
//   return Object.values(obj).reduce((sum, value) => sum + value, 0);
// }
//
// // Пример использования
// const obj1 = {
//   a: 10,
//   b: 20,
//   c: 30,
// };
//
// const obj2 = {
//   x: 5,
//   y: 15,
// };
//
// const obj3 = {
//   p: 100,
//   q: 200,
//   r: 300,
// };
//
// const obj4 = {
//   f: 42,
// };
//
// console.log(sumObjectValues(obj1));
// console.log(sumObjectValues(obj2));
// console.log(sumObjectValues(obj3));
// console.log(sumObjectValues(obj4));
