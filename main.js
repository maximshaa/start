//1
// const first = {
//     name: 'Фигура №1',
//     type: 'square',
//     color: 'red',
//     border: 'black',
//     size: 'large',
// };
//
// const second = {
//     name: 'Фигура №2',
//     type: 'square',
//     color: 'red',
//     border: null,
//     size: 'large',
// };
//
// const third = {
//     name: 'Фигура №3',
//     type: 'circle',
//     color: 'red',
//     border: 'black',
//     size: 'large',
// };
//
// const fourth = {
//     name: 'Фигура №4',
//     type: 'square',
//     color: 'green',
//     border: 'black',
//     size: 'large',
// };
//
// const fifth = {
//     name: 'Фигура №5',
//     type: 'square',
//     color: 'red',
//     border: 'black',
//     size: 'small',
// };
//
// const figures = [first, second, third, fourth, fifth];
//
// const results = {};
//
// const keys = ['type', 'color', 'border', 'size'];
//
// for (const key of keys) {
//     const figuresByKey = {};
//
//     for (const figure of figures) {
//         if (!figuresByKey[figure[key]]) {
//             figuresByKey[figure[key]] = [];
//         }
//         figuresByKey[figure[key]].push({ name: figure.name });
//     }
//
//     let uniqueKey;
//     for (const k in figuresByKey) {
//         if (figuresByKey[k].length === 1) {
//             uniqueKey = k;
//             break;
//         }
//     }
//     const uniqueFigure = figures.find((f) => f[key] === uniqueKey);
//     results[key] = uniqueFigure;
//     console.log(`От всех других фигур, по признаку ${key} отличается эта фигура:`, uniqueFigure);
// }


//2
// const user = {
//     example: [1, 2, 3],
//     'X-Address': {
//         street: 'Ленина',
//         house: '10-Б',
//     },
//     nickname: null,
//     permissions: [true, false],
//     age: 101,
//     emails: ['alice@example.com', 'bob@example.com', 'charlie@example.com', 'peter@example.com'],
//     name: 'Peter Charles',
//     isAdult: true,
//     now: new Date().toISOString(),
// };
//
// let maxLength = 0;
// let lastElement = null;
//
// for (const key in user) {
//     if (Array.isArray(user[key])) {
//         if (user[key].length > maxLength) {
//             maxLength = user[key].length;
//             lastElement = user[key][maxLength - 1];
//         }
//     }
// }
//
// console.log(`Максимальная длина: ${maxLength}. Последнее значение: ${lastElement}`);


