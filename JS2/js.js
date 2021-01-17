/* let num1 = +prompt('1 number');
let num2 = +prompt('2 number');
sum = 0; 

while (num1 <= num2) {
    sum += num1;
    num1++;
}

alert(sum); */

/* var number = prompt('number');
for (var i=1; i<=number; i++) {
  if (number%i==0) {
    console.log(i);
  }
} */

/* var a = +prompt('number');
alert(String(a).length) */


/* let i=0;

let n=0;
let m=0;
let l=0;

let g=0;
let j=0;
do {
    let num = +prompt('Cuares?');
    if (num < 0) {n++} 
    else if (num == 0) {m++}
    else if (num > 1) {l++};
    if (num % 2 == 0) {g++} else {j++};
    i++;
} while (i < 10);

console.log(n, m, l, g, j); */



/* let l = 0; 
let i = 1; 

do {
  let a = +prompt('1number');
  let b = +prompt('2number');
  switch (l=prompt('deistvie (+ - / *)')) {
    case '+' : console.log(a+b);
    break;
    case '-' : console.log(a-b);
    break;
    case '/' : console.log(a/b);
    break;
    case '*' : console.log(a*b);
    break;
    default: console.log('chel tya puknuli...');
  }
  i = prompt('1 eshe 2 end');
}  while (i==1) ; */



/* let str = prompt("Введите число!");
let k = prompt("На сколько цифр его сдвинуть?");

console.log(str.slice(k) + str.slice(0, k)); */


/* const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let st = 0;

while (confirm(`${days[st]}. Хотите увидеть следующий день?`)) {
  st = (st + 1) % days.length;
} */

 let i,j = 0;
    for (i=1; i<10; i++) {
        for (j=1; j<10; j++)
            console.log(i*j);
        console.log("\n");
    } 