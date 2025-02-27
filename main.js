//1
// const numbers = [-9007199254740991, 10, 20, 30, 9007199254740991];
//
// let min = Infinity;
// let max = -Infinity;
// let sum = 0;
//
// for (let num of numbers) {
//     if (num < min) {
//         min = num;
//     }
//     if (num > max) {
//         max = num;
//     }
//     sum += num;
// }
//
// const average = sum / numbers.length;
//
// console.log(`Минимальное значение: ${min}`);
// console.log(`Максимальное значение: ${max}`);
// console.log(`Среднее значение: ${average}`);


//2
// let countVowels = 0;
// let countConsonants = 0;
// let word = 'слова';
//
// const vowels = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];
//
// for (let i = 0; i < word.length; i++) {
//     let letter = word.at(i);
//
//     let isVowel = false;
//     for (let vowel of vowels) {
//         if (vowel === letter) {
//             countVowels++;
//             isVowel = true;
//             break;
//         }
//     }
//
//     if (!isVowel) {
//         countConsonants++;
//     }
// }
//
// console.log(`Итоговое количество гласных: ${countVowels}`);
// console.log(`Итоговое количество согласных: ${countConsonants}`);


//3
// const array1 = [];
// const array2 = [];
//
// if (array1.length !== array2.length) {
//     console.log(false);
// } else {
//     const sortedArray1 = array1.sort();
//     const sortedArray2 = array2.sort();
//
//     let result = true;
//
//     // Сравниваем отсортированные массивы
//     for (let i = 0; i < sortedArray1.length; i++) {
//         if (sortedArray1[i] !== sortedArray2[i]) {
//             result = false;
//             break;
//         }
//     }
//
//     console.log(result);
// }


//4
// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 25 },
//     { name: 'Diana', age: 35 },
//     { name: 'Eve', age: 30 },
//     { name: 'Frank', age: 28 },
//     { name: 'Grace', age: 25 },
//     { name: 'Hannah', age: 41 },
//     { name: 'Ivy', age: 30 },
//     { name: 'Jack', age: 28 },
// ];
//
// const counter = {};
//
// for (const user of users) {
//     if (counter[user.age]) {
//         counter[user.age]++;
//     } else {
//         counter[user.age] = 1;
//     }
// }
//
// for (const age in counter) {
//     console.log(`Возраст=${age}. Количество людей=${counter[age]}`);
// }


//5
// const mary = {
//     name: 'Mary',
//     wantApples: 2,
// };
//
// const alex = {
//     name: 'Alex',
//     wantApples: 1,
// };
//
// const mike = {
//     name: 'Mike',
//     wantApples: 5,
// };
//
// const brown = {
//     name: 'Brown',
//     wantApples: 4,
// };
//
// const people = [mary, alex, mike, brown];
// const apples = 11;
//
// const happy = [];
// const notHappy = [];
//
// for (const person of people) {
//     const share = Math.floor(apples / people.length);
//     person.eaten = share;
//     person.isHappy = person.eaten >= person.wantApples;
//
//     if (person.isHappy) {
//         happy.push(person);
//     } else {
//         notHappy.push(person);
//     }
//
// }
//
// console.log(happy);
// console.log(notHappy);


//6
// const alice = {
//     name: 'Alice',
//     age: 10,
//     illness: null,
//     driverLicenses: ['B'],
// };
//
// const bob = {
//     name: 'Bob',
//     age: 18,
//     illness: 'Cold',
//     driverLicenses: ['B'],
// };
//
// const charlie = {
//     name: 'Charlie',
//     age: 17,
//     illness: null,
//     driverLicenses: ['C', 'E'],
// };
//
// const diana = {
//     name: 'Diana',
//     age: 22,
//     illness: 'H. Disease',
//     driverLicenses: ['A', 'C', 'D'],
// };
//
// const eve = {
//     name: 'Eve',
//     age: 35,
//     illness: null,
//     driverLicenses: ['A', 'B', 'E'],
// };
//
// const frank = {
//     name: 'Frank',
//     age: 37,
//     illness: null,
//     driverLicenses: [],
// };
//
// const gorge = {
//     name: 'Gorge',
//     age: 28,
//     illness: null,
//     driverLicenses: ['B', 'D'],
// };
//
// const persons = [alice, bob, charlie, diana, eve, frank, gorge];
//
// const invalidPersons = [];
// const validPersons = [];
//
// // Переписанный код
// for (const person of persons) {
//     if (person.age >= 18 && person.illness === null && person.driverLicenses.includes('B')) {
//         validPersons.push(person);
//     } else {
//         const invalidPerson = {
//             name: person.name,
//             age: person.age,
//             illness: person.illness,
//             driverLicenses: person.driverLicenses,
//         };
//
//         if (person.age < 18) {
//             invalidPerson.reason = 'Молодой';
//         } else if (person.illness !== null) {
//             invalidPerson.reason = 'Болен';
//         } else {
//             invalidPerson.reason = 'Нет прав';
//         }
//
//         invalidPersons.push(invalidPerson);
//     }
// }
//
// console.log('Для трюка подходят:', validPersons);
// console.log('\nДля трюка НЕ подходят:', invalidPersons);




//for in 1
// const person = { age: 10, name: 'Bob', child: 'Max' };
//
// for (const key in person) {
//     console.log(`${key}: ${person[key]}`);
// }

//for in 2
// const person = { age: 10, name: '', child: 'Max' };
//
// const keysArray = [];
// const valuesArray = [];
//
// for (const key in person) {
//     keysArray.push(key);
//     valuesArray.push(person[key]);
// }
//
// console.log('Ключи:', keysArray);
// console.log('Значения:', valuesArray);



