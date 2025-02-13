// const a = 10;
//
// if (a === 2 || 3) {
//     console.log(-1);
// }
//
// if (a === 2 || a === 3) {
//     console.log(0);
// }
//
// if (10 % 1) {
//     console.log(1); //1
// }
//
// if (10 % 0) {
//     console.log(2);
// } else if (10) {
//     console.log(3); //3
// } else if (true) {
//     console.log(4);
// }
//
// let g = '';
//
// if (g) {
//     console.log(5);
// } else {
//     console.log(6); //6
// }
//
// if (undefined) {
//     console.log(7);
// }
//
// if ('0') {
//     console.log(8); //8
// } else if ('') {
//     console.log(9);
// } else {
//     console.log('a');
// }
//
// if (!'0') {
//     console.log('b');
// } else {
//     console.log('c'); //c
// }
//
// if (!!'' || !!0 || !!1) {
//     console.log('d'); //d
// }
//
// if (undefined || false || '' || 0) {
//     console.log('e');
// } else if (!false && (0 || '0')) {
//     console.log('f'); //f
// } else {
//     console.log('g');
// }
//
// const a = 0;
// const b = 1;
// let c;
//
// console.log(a == '0' ? 'h' : 'i'); //h
// console.log(!(a > b) ? 'j' : 'k'); //j
// console.log(0 ? 'l' : 'm'); //m
// console.log(!0 ? 'n' : 'o'); //n
// console.log((null === undefined || 11 % 5) && (a > b || !!true) ? 'n' : 'o'); //n
//
// console.log('abc' == 'ABC' ? 'p' : 'q'); //q
// console.log('false' ? 'r' : 's'); //r
// console.log('false' == false ? 't' : 'u'); //t
// console.log(Number('one') ? 'v' : 'w'); //v
// console.log(c ? 'x' : 'y'); //y
// console.log(null == undefined ? 'z' : '🫡'); //z
//
//
// Положительное или нет
// let a = 1;
// if (a > 0){
//     console.log('Число положительное');
// }
// else if (a < 0){
//     console.log('Число отрицательное')
// }
// else {
//     console.log('Это ноль')
// }


//Простые условия. Два числа
// let a = 5;
// let b = 10;
// if (a === b) {
//     console.log('Числа равны');
// }
// else {
//     console.log('Числа не равны')
// }
//
// let num1 = a.toString().length;
// let num2 = b.toString().length;
// if (num1 === num2) {
//     console.log(`В числах одинаковое кол-во символов`)
// }
// else {
//     console.log(`В числах разное кол-во символов`)
// }
//
// if (a > b) {
//     console.log(`${a} больше чем ${b}`)
// }
// else {console.log(`${b} больше чем ${a}`)}
//
// if (a > b) {
//     console.log(`${b} меньше чем ${a}`)
// }
// else {console.log(`${a} меньше чем ${b}`)}
//
// if (a % b === 0) {
//     console.log(`${a} делится на ${b} без остатка`)
// }
// else {
//     console.log(`${a} не делится на ${b} без остатка`)
// }
//
// if (b % a === 0) {
//     console.log(`${b} делится на ${a} без остатка`)
// }
// else {
//     console.log(`${b} не делится на ${a} без остатка`)
// }


//Простые условия. Две строки.
// let a = 'abc';
// let b = 'dnc';
// let firstSymbol1 = a.charAt(0);
// let firstSymbol2 = b.charAt(0);
// let lastSymbol1 = a.charAt(2);
// let lastSymbol2 = b.charAt(2);
//
// if (firstSymbol1 === firstSymbol2) {
//     console.log('Первые символы равны');
// }
// else {
//     console.log('Первые символы не равны');
// }
//
// if (lastSymbol1 === lastSymbol2) {
//     console.log('Последние символы равны');
// }
// else {
//     console.log('последние символы не равны');
// }

// let a = 12;
//
// if (a % 3 === 0 && a % 5 === 0) {
//     console.log('FizzBuzz');
// }
// else if (a % 3 === 0) {
//     console.log('Fizz');
// }
// else if (a % 5 === 0) {
//     console.log('Buzz');
// }

//Определите роль
// const role = 'manager';
// let level;
// switch (role) {
//     case 'user':
//     case 'client':
//     level = 1;
//     console.log(level);
//     break;
//
//     case 'admin':
//     case 'manager':
//     level = 2;
//     console.log(level);
//     break;
//
//     case 'superadmin':
//     level = 3;
//     console.log(level);
//     break;
//
//     default:
//      level = 'неизвестен';
//      console.log(level);
// }


// const characterName = 'patrick';
//
// switch (characterName) {
//     case 'spongebob':
//         console.log('| ( · )( · ) |');
//         break;
//     case 'patrick':
//         console.log('/ ( · )( · ) \\');
//         break;
//     case 'squidward':
//         console.log('( ( · )( · ) )');
//         break;
//     case 'plankton':
//         console.log('| ( · ) |');
//         break;
//     case 'mr. crabs':
//         console.log('|·||·|');
//         break;
//     default:
//         console.log('Персонаж не найден');
// }


//Маппер
// const externalStatus = 'rejected';
//
// switch (externalStatus) {
//     case 'approved':
//         console.log('approved');
//         break;
//     case 'pending':
//         console.log('pending');
//         break;
//     case 'moderation':
//         console.log('pending');
//         break;
//     case 'waiting':
//         console.log('pending');
//         break;
//     case 'declined':
//         console.log('declined');
//         break;
//     case 'rejected':
//         console.log('declined');
//         break;
//     case 'notaccepted':
//         console.log('declined');
//         break;
//     default:
//         console.log('pending');
// }
