// Задание №1
// Создайте объект в переменной programmer. Дайте объекту имя,
// фамилию, возраст, язык программирования и зарплату. Выведите каждое свойство объекта по очереди в консоль.

// ПИСАТЬ КОД ЗДЕСЬ
console.log("Задание №1");
let programmer = {
  name: "Beka",
  surname: "Eraliev",
  age: 18,
  progLang: ["JS", "C++", "Java"],
  salary: 200,
};
console.log(`Name: ${programmer.name}`);
console.log(`Surname: ${programmer.surname}`);
console.log(`Age: ${programmer.age}`);
console.log(`Programming language: ${programmer.progLang}`);
console.log(`Salary: ${programmer.salary}`);

// Задание №2
// Запросите у пользователя ввести два числа и верните ему сумму этих двух чисел.
// Если сумма больше 10 и в то же время меньше 20 то, умножьте на 5. Если же сумма больше 20 и меньше 50, то разделите на 3.
// Иначе прибавьте 10.
// Для решения используйте функции: prompt и parseInt или опертаор +.
// Ответ может быть и десятичным числом, и выведите это конечное число.
// Например:
// let firstNum = prompt("Введите первое число")
// let secondNum = prompt("Введите второе число")

// ПИСАТЬ КОД ЗДЕСЬ
console.log("Задание №2");
let firstNum = +prompt("Введите первое число");
let secondNum = +prompt("Введите второе число");
let summ = firstNum + secondNum;
let res2 = 0;
if (summ > 10 && summ < 20) {
  res = summ * 5;
} else if (summ > 20 && summ < 50) {
  res = summ / 3;
} else {
  res = summ + 10;
}
console.log(`Результат: ${res2}`);
// Задание №3
// Вам дан сложный вложенный список. Используя цикл выведите все элементы в виде ключ: значение
// Ввод:
// let aboutUs = [
//   ["name", "Makers"],
//   ["type", "Bootcamp"],
//   ["place", "Bishkek"],
//   ["languages", "JavaScript, Python"],
//   ["simply", "the best!"]
// ];

// Вывод:
// name: Makers
// type: Bootcamp
// place: Bishkek
// languages: JavaScript, Python
// simply: the best!

// ПИСАТЬ КОД ЗДЕСЬ
console.log("Задание №3");

let aboutUs = [
  ["name", "Makers"],
  ["type", "Bootcamp"],
  ["place", "Bishkek"],
  ["languages", "JavaScript, Python"],
  ["simply", "the best!"],
];
for (let elem of aboutUs) {
  console.log(`${elem[0]}:${elem[1]}`);
}

// Задание №4
// Есть объект users в котором перечислен
// возраст участников. Напишите код,
// который выведет суммарный возраст
// всех участников. Решите задачу через
// цикл for...in.
// let users = {
//   John: 28,
//   Mark: 30,
//   David: 25,
//   Richard: 42
// };

// ПИСАТЬ КОД ЗДЕСЬ
console.log("Задание №4");
let users = {
  John: 28,
  Mark: 30,
  David: 25,
  Richard: 42,
};
let summ4 = 0;
for (let elem in users) {
  summ4 += users[elem];
}
console.log(summ4);
// Задание №5
// Напишите функцию removeElem(arr, element), которая принимает 2 аргумента.
// Первый аргумент- это массив.
// Второй аргумент- это элемент который нужно удалить из массива.
// Пример: let arr = [2, ‘hello’, true,  ‘world’,  5, ‘js’]
//     removeElem(arr,’world’)
// Ответ: [2, ‘hello’, true,  5, ‘js’]
// ПИСАТЬ КОД ЗДЕСЬ
console.log("Задание №5");
let arr = [2, "hello", true, "world", 5, "js"];

function removeElem(arr, element) {
  let index = arr.indexOf(element);

  if (index !== -1) {
    arr.splice(index, 1);
  }

  return arr;
}
console.log(removeElem(arr, true));

// Задание №6
// Создайте функцию-замыкание, которая возвращает анонимную функцию и высчитывает сумму аргументов возвращаемой функции с аргументом главной функции, то есть нужно посчитать сумму аргументов родительской функции и дочерней функции.

// function foo(a) {
//Допишите ф-ю
// }
// Пример:
// const res = foo(3)(4);
// console.log(res); //7

// ПИСАТЬ КОД ЗДЕСЬ
console.log("Задание №6");

function foo(a) {
  return function (b) {
    return a + b;
  };
}

const res = foo(5)(4);
console.log(res);

// Задание №7
// Дан лимит = 1000, напишите функцию, которая будет выводить в консоль удвоенное значение аргумента до тех пор, пока оно не достигнет лимита, и после этого вывести в консоль аргументы в обратном порядке

// Например:

// Ввод: functionLimit(50)
// Вывод:
// 50
// 100
// 200
// 400
// 800
// 800
// 400
// 200
// 100
// 50

// ПИСАТЬ КОД ЗДЕСЬ
console.log("Задание №7");
function count(limit, item) {
  let result = [];

  while (item * 2 <= limit) {
    console.log(item);
    result.push(item);
    item *= 2;
  }

  console.log(item);

  for (let elem of result.reverse()) {
    console.log(elem);
  }
}

count(1000, 50);
// Задание №8
// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// Используйте метод filter()

// ПИСАТЬ КОД ЗДЕСЬ
console.log("Задание №8");
let str = ["beka", "Eraliev", "Max"];

let result = str.filter((x) => x.length > 5);
console.log(result);

// Задание №9
// Дан массив
// let task2 = [10, 25, 25, 15, 5, 10];
// Выведите в alert сумму элементов
// этого массива.
// Используйте метод .forEach()

// ПИСАТЬ КОД ЗДЕСЬ
console.log("Задание №9");
let task2 = [10, 25, 25, 15, 5, 10];

let resul = 0;
task2.forEach(function (elem) {
  resul += elem;
});
alert(`Сумма элементов массива: ${resul}`);

// Задание №10
// 	Напишите функцию, определяющую
// максимальное количество повторяющихся
//  элементов в массиве.
// Массив для примера:
// let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];

// ПИСАТЬ КОД ЗДЕСЬ
console.log("Задание №10");
let arr10 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];
function checkTask(arr10) {
  let obj = arr10.reduce((a, c) => {
    a[c] = a[c] ? a[c] + 1 : 1;
    return a;
  }, {});
  let max = Object.entries(obj).reduce((a, c) => (a[1] > c[1] ? a : c));
  console.log(+max[0]);
}
checkTask(arr10);
// Задание №11
// Дан массив nums = [8,1,2,2,3]
// Напишите функцию, которая будет возвращать массив, в котором указано сколько есть чисел в массиве меньше, чем каждый элемент массива.
// Используйте метод map()
// Пример №1:
// Ввод: nums = [8,1,2,2,3]
// Вывод: [4,0,1,1,3]
// 4 элемента меньше чем 8
// 0 элементов меньше чем 1
// 1 элемент меньше чем 2
// 1 элемент меньше чем 2
// 3 элемента меньше чем 3

// Пример №2:
// Ввод: nums = [6,5,4,8]
// Вывод: [2,1,0,3]

// ПИСАТЬ КОД ЗДЕСЬ
console.log("Задание №11");
let nums = [8, 1, 2, 2, 3];

function checkNumCount(nums) {
  return nums.map((num) => {
    let count = 0;
    for (let elem of nums) {
      if (num > elem) {
        count++;
      }
    }
    return count;
  });
}

console.log(checkNumCount([6, 5, 4, 8]));
// Задание №12
// Вам нужно поменять местами значения
// переменных при помощи деструктуризации.
// let a = 0;
// let b = 1;
// Пример результата:
// console.log(a, b); // 1, 0

// ПИСАТЬ КОД ЗДЕСЬ
console.log("Задание №12");
let a = 0;
let b = 1;
[b, a] = [a, b];
console.log("a:", a, "b:", b);
// Задание №13
// Дан объект { size: { width: 100, height: 200 }, items: ["Cake", "Donut"], extra: true}.
// Деструктуризуйте все свойства и элементы данного объекта, включая вложенные объекты и массивы и выведите в консоли.

// ПИСАТЬ КОД ЗДЕСЬ
console.log("Задание №13");
let obj = {
  size: { width: 100, height: 200 },
  items: ["Cake", "Donut"],
  extra: true,
};
let {
  size: { width, height },
  items: [cake, donut],
  extra,
} = obj;
console.log("width:", width);
console.log("height:", height);
console.log("cake:", cake);
console.log("donut:", donut);
console.log("extra:", extra);
// Задание №14
// Необходимо создать объект, который будет
// представлять из себя лифт. У него
// должны быть методы:
// ● printFloor - печатает текущий этаж, на котором
// находится лифт
// ● upOneFloor - перемещает на один этаж вверх
// ● downOneFloor - перемещает на один этаж вниз
// ● toFloor - принимает целое числовое
// значение от 1 до 16 - переместиться на
// определенный этаж.
// Изначально лифт находится на первом этаже.
// Когда мы вызываем метод toFloor(),
// программа должна в консоли отобразить
// постепенное перемещение лифта на нужный этаж
// (только в этом методе).
// ● Лифт должен хранить текущий этаж, на котором он находится.
// ● Для наглядности, вызовите метод toFloor несколько раз в программе.
// ● Метод toFloor должен использовать методы oneFloorUp и oneFloorDown для
// перемещения по этажам, а также метод printFloor для вывода текущего этажа лифта.
// ● В здании 16 этажей, нельзя, чтобы лифт мог уехать ниже первого или выше 16-го этажа.

// ПИСАТЬ КОД ЗДЕСЬ
console.log("Задание №14");
let checkTask14 = {
  currentFloor: 1,
  printFloor: function () {
    return this.currentFloor;
  },

  upOneFloor: function () {
    if (this.currentFloor < 16) {
      this.currentFloor++;
      return this.currentFloor;
    } else {
      return "Error!";
    }
  },

  downOneFloor: function () {
    if (this.currentFloor > 1) {
      this.currentFloor--;
      return this.currentFloor;
    } else {
      return "Error!";
    }
  },

  toFloor: function (floor) {
    if (floor < 1 || floor > 16) {
      return "Error!";
    }

    while (this.currentFloor < floor) {
      this.upOneFloor();
      return this.printFloor();
    }

    while (this.currentFloor > floor) {
      this.downOneFloor();
      return this.printFloor();
    }

    return `Вы на ${floor}`;
  },
};
console.log("Текущий этаж:", checkTask14.printFloor());

console.log("Поднимаемся на один этаж:", checkTask14.upOneFloor());

console.log("Опускаемся на один этаж:", checkTask14.downOneFloor());

console.log("Переходим на этаж 5:", checkTask14.toFloor(5));
