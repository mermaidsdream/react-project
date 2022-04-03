// Напиши функцию pluck, которая берет массив объектов и возвращает массив значений определенного поля:

// var characters = [
//   { 'name': 'barney', 'age': 36 },
//   { 'name': 'fred', 'age': 40 }
// ];

// console.log(pluck(characters, 'name')); // ['barney', 'fred']
// Такая функция есть в lodash: http://lodash.com/docs#pluck
// Функция не должна изменять исходный массив.

// --- Solution ---

function pluck(objects, fieldName) {
  return objects.map(value => value[fieldName]);
}
