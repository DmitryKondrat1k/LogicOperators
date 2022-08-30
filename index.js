'use strict';

// const hambuger = 5;
// const fries = 0;

// if (hambuger&&fries) {
//    console.log('Я сыт!');
// }
// Результат логических операций - это логическое булевое значение


// const hambuger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hambuger ===3 && cola && fries);
// Логический оператор && при выводе в консоль дает первое ложное FALSE
// значение, на котором он остановился, в данном случае на cola 
// console.log(0)
// Если все значения в условии верны, то выводится последнее значение

// console.log(1 && 0); //0
// console.log(1 && 5); //5
// console.log(null && 5); //null
// console.log(0 && "yes"); //0


   // Приоритет оператора строгого сравнения выше чем 
   // у логического && , условие прекратится на cola
   // true           false   
// if (hambuger ===3 && cola ===1 && fries) {
//    console.log('Все сыты!');
// } else {
//    console.log('Мы уходим');
// }


const hambuger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
   
   // FALSE                         TRUE
if (hambuger ===3 && cola === 2 || fries ===3 && nuggets) {
   console.log('Довольны!');
} else {
   console.log('Мы уходим');
}
// Как только оператор или || находит правду TRUE,
// то он перестает работать
// Если все значения FALSE, то возвращает последнее значение

console.log(hambuger ===3 && cola === 2 || fries ===3 && nuggets);


let jonhReport, alexReport, samReport, mariaReport = 'done';

console.log(jonhReport||alexReport||samReport||mariaReport);

console.log(!0);
// Оператор ! (НЕ) возвращает противоположное значение
// В данном случае 0 было FALSE, с оператором ! становится TRUE