// 1
// type A = {
//   age?: number | string;
//   nick: string | number;
//   info: number[] | { id: number } | string[] | {};
//   photo?: string | null;
// };
//
// const a1: A = {
//   age: 10,
//   nick: 'mynick',
//   info: [1, 100],
//   photo: 'string',
// };
//
// const a2: A = {
//   age: '10 years',
//   nick: '',
//   info: { id: 100 },
//   photo: null,
// };
//
// const a3: A = {
//   nick: '       ',
//   info: ['secret', 'key'],
// };
//
// const a4: A = {
//   nick: '',
//   info: {},
// };

// 2
// type A = {
//   first: string;
//   second: {
//     third: string;
//     fourth?: string;
//     fifth: {
//       sixth?: {
//         tenth: {
//           twelfth?: {
//             thirteenth: {
//               fifteenth: {
//                 sixteenth?: {
//                   last: 'Достучались';
//                 };
//               };
//             };
//             fourteenth: string;
//           };
//         };
//         eleventh: string;
//       };
//       seventh: number;
//       eight: string;
//     };
//   };
// };
//
// const a: A = {
//   first: 'z',
//   second: {
//     third: 'f',
//     fourth: 'a',
//     fifth: {
//       sixth: {
//         tenth: {
//           twelfth: {
//             thirteenth: {
//               fifteenth: {
//                 sixteenth: {
//                   last: 'Достучались',
//                 },
//               },
//             },
//             fourteenth: 's',
//           },
//         },
//         eleventh: 'kk',
//       },
//       seventh: 8,
//       eight: 'b',
//     },
//   },
// };
// const lastValue = a.second.fifth.sixth?.tenth.twelfth?.thirteenth.fifteenth.sixteenth?.last;
// console.log(lastValue?.toUpperCase());

// 3
// import chalk from 'chalk';
//
// let result: string = '';
//
// for (let i: number = 1; i <= 10; i++) {
//   let color: string;
//   if (i % 3 === 1) {
//     color = chalk.red('*');
//   } else if (i % 3 === 2) {
//     color = chalk.green('*');
//   } else {
//     color = chalk.blue('*');
//   }
//
//   result += color;
//   if (i < 10) {
//     result += ' - ';
//   }
// }
// console.log(result);

// 4
// type Fruit = 'apple' | 'banana' | 'orange' | 'grape' | 'strawberry';

// 5
// type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

// 6
// type Fruit = 'apple' | 'banana' | 'orange' | 'grape' | 'strawberry';
//
// type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
//
// type FruitAndMonth = {
//   fruit: Fruit;
//   month: Month;
// };
//
// const alliance: FruitAndMonth = {
//   fruit: 'apple',
//   month: 3,
// };
//
// console.log(alliance);

// ПОДСМОТРЕЛ
/*
1ая группа: 12,2,9,5
2ая группа: 4,6,10,8
3я группа: 3,7,11,1
*/

// import dayjs from 'dayjs';
//
// console.log(12, dayjs('2024-08-23T12:30:00Z').toISOString());
// console.log(2, dayjs('2024-08-23T15:30:00+03:00').toISOString());
// console.log(5, dayjs('2024-08-24T01:30:00+13:00').toISOString());
// console.log(9, dayjs('2024-08-23T09:30:00-03:00').toISOString());
// console.log('----\n');
//
// console.log(4, dayjs('2024-08-23T15:30:00Z').toISOString());
// console.log(6, dayjs('2024-08-23T17:30:00+02:00').toISOString());
// console.log(10, dayjs('2024-08-23T14:30:00-01:00').toISOString());
// console.log(8, dayjs('2024-08-23T03:30:00-12:00').toISOString());
// console.log('----\n');
//
// console.log(1, dayjs('2024-08-23T03:30:00-11:00').toISOString());
// console.log(3, dayjs('2024-08-23T14:30:00Z').toISOString());
// console.log(7, dayjs('2024-08-23T10:30:00-04:00').toISOString());
// console.log(11, dayjs('2024-08-24T02:30:00+12:00').toISOString());

// 7
// enum Colors {
//   Red = 'red',
//   Green = 'blue',
//   Blue = 'pink',
//   Yellow = 'yellow',
// }
//
// const colorValues = Object.values(Colors);
// console.log(colorValues);

// 8
// import { faker } from '@faker-js/faker';
// import chalk from 'chalk';
//
// const user = {
//   firstName: chalk.red(faker.person.firstName()),
//   lastName: chalk.green(faker.person.lastName()),
//   email: chalk.blue(faker.internet.email()),
//   phoneNumber: chalk.yellow(faker.phone.number()),
//   address: chalk.cyan(faker.location.streetAddress()),
//   city: chalk.magenta(faker.location.city()),
//   country: chalk.white(faker.location.country()),
// };
//
// console.log(user);

// 9
// import { faker } from '@faker-js/faker';
//
// enum Colors {
//   Red = 'red',
//   Green = 'blue',
//   Blue = 'pink',
//   Yellow = 'yellow',
// }
//
// type User = {
//   id: string;
//   name: string;
//   email: string;
//   favoriteColor: Colors;
// };
//
// const users: User[] = Array.from({ length: 10 }, () => ({
//   id: faker.string.uuid(),
//   name: faker.person.fullName(),
//   email: faker.internet.email(),
//   favoriteColor: faker.helpers.enumValue(Colors), // Рандомный цвет из enum
// }));
//
// const randomColor = faker.helpers.enumValue(Colors);
//
// const usersWithFavoriteColor = users.filter((user) => user.favoriteColor === randomColor);
//
// console.log(`Пользователи, у которых любимый цвет ${randomColor}:`);
// console.log(usersWithFavoriteColor);
