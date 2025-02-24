// //while 1
//
// let firstNum = Math.round(Math.random() * 6);
// let secondNum = Math.round(Math.random() * 6);
// let count = 0;
// while (firstNum > secondNum || firstNum < secondNum) {
//     console.log(`Первое число: ${firstNum} Второе число: ${secondNum}`);
//     firstNum = Math.round(Math.random() * 6);
//     secondNum = Math.round(Math.random() * 6);
//     ++count;
// }
// console.log(`ДУБЛЬ ${firstNum}, ${secondNum}`);
// console.log(`Попыток: ${count}`);

// for 1
//
// let numbers = [1, -2, 3, -4, 5, 6];
// let positiveCount = 0;
// let negativeCount = 0;
//
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) {
//         positiveCount++;
//     } else if (numbers[i] < 0) {
//         negativeCount++;
//     }
// }
// console.log(`Количество положительных чисел: ${positiveCount}`);
// console.log(`Количество отрицательных чисел: ${negativeCount}`);

// for 2
// let numbers = [1.1, 2.2, -2, 3.3, -1, 5.5, 5.99, 7.49, 7.9999, -2.2];
// let positiveIndices = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) {
//         positiveIndices.push(i);
//     }
// }
// for (let i = 0; i < positiveIndices.length - 3; i++) {
//     let index = positiveIndices[i];
//     numbers[index] = Math.round(numbers[index]);
// }
// console.log(numbers);

// for 3
// let strings = ['яблоко', 'грушв', 'ручка', 'книга', 'колесо'];
// let start = Math.floor(strings.length / 2);
// let secondHalf = strings.slice(start);
// console.log(secondHalf);

// for 4
// for (let i = 1; i <= 5; i++) {
//     let space = ' '.repeat(5 - i);
//     let star = '*'.repeat(2 * i - 1);
//     console.log(space + star);
// }

// for 5
// const matrix = [
//     ['Id', 'Title', 'Description'],
//     [1, 'Title-1', 'Description-1'],
//     [2, 'Title-2', 'Description-2'],
//     [3, 'Title-3', 'Description-3', 'Поле с багом'],
//     [4, 'Title-4', 'Description-4'],
//     [5, 'Title-5', 'Description-5'],
//     [6, 'Title-6', 'Description-6', 'Поле с багом'],
// ];
//
// let maxLength = 0;
// for (let i = 0; i < matrix.length; i++) {
//     if (matrix[i].length > maxLength) {
//         maxLength = matrix[i].length;
//     }
// }
//
// for (let i = 0; i < matrix.length; i++) {
//     let row = '';
//     for (let j = 0; j < maxLength; j++) {
//         let value = matrix[i][j] !== undefined ? matrix[i][j] : '';
//         row += `${value}\t`;
//     }
//     console.log(row);
// }

//Подглядел
// const size = potatoes.length;
// const varieties = [];
// let resultSum = null;
// let resultPotatoes = [];
// let resultDifference = null;
// let resultVariety = null;
//
// /* Решение
// Для каждого вложенного цикла используем текущий индекс верхнего цикла, в таком случае,
// если первый цикл взял 1ую картошку, то второй цикл возьмёт 2ую картошку, а третий цикл возьмёт 3ю картошку,
// и таким образом нам не нужно руками контролировать, чтобы в каждую переменную записалась разная картошка.
//  */
// for (let idx1 = 0; idx1 < size; idx1++) {
//     const potato1 = potatoes[idx1];
//
//     for (let idx2 = idx1 + 1; idx2 < size; idx2++) {
//         const potato2 = potatoes[idx2];
//
//         for (let idx3 = idx2 + 1; idx3 < size; idx3++) {
//             const potato3 = potatoes[idx3];
//
//             // Вес для этих 3х картошек
//             const sum = potato1.weight + potato2.weight + potato3.weight;
//
//             // Точность для этих 3х картошек
//             const difference = Math.abs(sum - targetWeight);
//
//             // Если результата ещё нет, или погрешность этих 3х картошек меньше запомненной - обновляем запомненные данные
//             if (resultDifference === null || difference < resultDifference) {
//                 resultSum = sum;
//                 resultDifference = difference;
//                 resultPotatoes = [potato1, potato2, potato3];
//             }
//         }
//     }
// }
//
// // Перебираем выбранные картошки и ищем превалирующий сорт
// for (let i = 0; i < resultPotatoes.length; i++) {
//     const variety = potatoes[i].variety;
//
//     if (varieties.includes(variety)) {
//         // В массиве уже есть одна картошка такого сорта, значит эта вторая, значит этот сорт "победил"
//         resultVariety = variety;
//         break;
//     }
//
//     varieties.push(variety);
// }


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
