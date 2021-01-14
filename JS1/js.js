/*let age = +prompt('Number?');

let message = (age < 2) ? 'Здравствуй, малыш!' :
  (age < 18 && age > 12) ? 'Мальчик' :
  (age < 60 && age > 18) ? 'Большой малый' :
  (age > 60 && age < 120) ? 'Дедуль, пенсия все еще 2к...' : 
  'Ну ты чет разошелся...'

alert( message );*/

 /*let number = prompt('От 1 до 9');
    switch(number) {
        case '0':
            console.log(')');
            break;
        case '1':
            console.log('!');
            break;
        case '2':
            console.log('@');
            break;
        case '3':
            console.log('#');
            break;
        case '4':
            console.log('$');
            break;
        case '5':
            console.log('%');
            break;
        case '6':
            console.log('^');
            break;
        case '7':
            console.log('&');
            break;
        case '8':
            console.log('*');
            break;
        case '9':
            console.log('(');
            break;
    }*/

  /*let number = prompt('Проверка трехзнакчного числа на повторы');
    if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2])
    {
        alert('Есть');
    }
    else
        alert('Нету'); */

    /*let year = prompt('Введите год', 0);
    let msg = (year%4 == 0 && year %100 !== 0) ? alert('Высокосный') :
    alert('Невысокосный');*/

    /*let amount = prompt('Долларов сколько:', 0);
    let currency = prompt('Евро = 1, Гривна = 2, кто? = 3', 0);
    switch(currency) {
        case '1':
            console.log(amount*0.79 + 'EUR');
            break;
        case '2':
            console.log(amount*28.80 + 'UAH');
            break;
        case '3':
            console.log(amount*33 + 'AZN');
            break;
    }*/

    let amount = prompt('Покупка на');
    let msg = (amount >=200 && amount < 300) ? alert(amount/100*97 + 'Гривны с 3% скидкой') :
                (amount >=300 && amount < 500) ? alert(amount/100*95 + 'Гривны с 5% скидкой') :
                (amount >=500) ? alert(amount/100*93 + 'Гривны с 7% скидкой') : 
                'Ну чет ты разошелся';
