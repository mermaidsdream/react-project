// Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. Пример:

// function square(x) { return x * x; } // возведение в квадрат
// console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
// console.log(map(square, [])); // []
// Обрати внимание: функция не должна изменять переданный ей массив:

// var arr = [1, 2, 3];
// console.log(map(square, arr)); // [1, 4, 9]
// console.log(arr); // [1, 2, 3]
// Это аналог array_map из PHP.

// --- Solution ---

function map(fn, array) {
  let newArr = [];
    
  for (let i = 0; i < array.length; i++) {
        newArr.push(fn(array[i]));
  }   
  return newArr;
}
