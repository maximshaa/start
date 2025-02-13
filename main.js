// let obj = {
//     name: "Max",
//     age: 18,
//     city: "Tomsk"
// };
//
// obj.gender = "male";
//
// obj["eye-color"] = "green";
//
// delete obj.gender;
// delete obj["eye-color"];
//
// obj.father = {
//     name: "Stas",
//     age: "40"
// };
//
// obj.father.gender = "male";
//
// obj.father.age = "41";
//
// let moreName = "Pppov";
// let surname = "Popov";
// obj[moreName] = surname;
//
// let name = "Anton";
// let age = 20;
// let city = "Moscow";
//
// let newObj = { name, age, city };
//
// console.log(obj);
// console.log(newObj);


const alex = {
    name: 'Alex',
    dateOfBirth: new Date('2024-05-15'),
};

const jake = {
    name: 'Jake',
    dateOfBirth: new Date('1970-01-01T00:00:00.000Z'),
};

const john = {
    name: 'John',
    dateOfBirth: new Date('2007-12-30T11:32:59.953+03:00'),
};

const bob = {
    name: 'Bob',
    dateOfBirth: new Date('2025-02-13T16:05:02.302Z'),
};


const currentDate = new Date('2025-01-20'); // Программа была запущена 20 января 2025


alex.age = currentDate.getUTCFullYear() - alex.dateOfBirth.getUTCFullYear();
if (
    currentDate.getUTCMonth() < alex.dateOfBirth.getUTCMonth() ||
    (currentDate.getUTCMonth() === alex.dateOfBirth.getUTCMonth() && currentDate.getUTCDate() < alex.dateOfBirth.getUTCDate())
) {
    alex.age--;
}
if (alex.age < 0) alex.age = 0;

jake.age = currentDate.getUTCFullYear() - jake.dateOfBirth.getUTCFullYear();
if (
    currentDate.getUTCMonth() < jake.dateOfBirth.getUTCMonth() ||
    (currentDate.getUTCMonth() === jake.dateOfBirth.getUTCMonth() && currentDate.getUTCDate() < jake.dateOfBirth.getUTCDate())
) {
    jake.age--;
}
if (jake.age < 0) jake.age = 0;

john.age = currentDate.getUTCFullYear() - john.dateOfBirth.getUTCFullYear();
if (
    currentDate.getUTCMonth() < john.dateOfBirth.getUTCMonth() ||
    (currentDate.getUTCMonth() === john.dateOfBirth.getUTCMonth() && currentDate.getUTCDate() < john.dateOfBirth.getUTCDate())
) {
    john.age--;
}
if (john.age < 0) john.age = 0;  // Проверка для John

bob.age = currentDate.getUTCFullYear() - bob.dateOfBirth.getUTCFullYear();
if (
    currentDate.getUTCMonth() < bob.dateOfBirth.getUTCMonth() ||
    (currentDate.getUTCMonth() === bob.dateOfBirth.getUTCMonth() && currentDate.getUTCDate() < bob.dateOfBirth.getUTCDate())
) {
    bob.age--;
}
if (bob.age < 0) bob.age = 0;  // Проверка для Bob

// Выводим результаты
console.log(alex);
console.log(jake);
console.log(john);
console.log(bob);