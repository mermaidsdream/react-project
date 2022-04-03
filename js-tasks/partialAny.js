// Наша функция partial позволяет фиксировать только первые аргументы. Усовершенствуй ее, чтобы зафиксировать можно было любые аргументы, 
// пропущенные аргументы обозначаются с помощью undefined:

// function test(a, b, c) { return 'a=' + a + ',b=' + b + ',c=' + c; }
// var test1_3 = partialAny(test, 1, undefined, 3);
// console.log(test1_3(5)); // a=1,b=5,c=3
// Чтобы избежать путаницы, пусть новая функция называется partialAny

// --- Solution ---

function partialAny(...) {

   return;
}
