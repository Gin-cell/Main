/* let list = [
        {
            name : 'potato', 
            amount : 5,
            check : 'No'
    },
        {
        name : 'tomato', 
        amount : 3,
        check : 'Yes'
    },
        {
        name : 'onion', 
        amount : 4,
        check : 'No'
    },
        {
        name : 'banana', 
        amount : 2,
        check : 'No'
    }
]


  function sort() {
    function compare( a, b ) {
        if ( a.check < b.check ){
          return -1;
        }
        if ( a.check > b.check ){
          return 1;
        }
        return 0;
      }
      
      list.sort(compare);

      for (i = 0; i<list.length; i++) {
          console.log(list[i]);
      }
  } 
  function change( name ) {
    name = prompt('What did you buy already?')
    for (var i in list) {
      if (list[i].name == name) {
         list[i].check = 'Yes';
         break;
      }
    }
    sort();
 }
  function push(a, amount, check) {
      a = prompt('name product?')
      for (var i in list) { 
        
        if (list[i].name == a) {
          list[i].amount++
          sort();
        }  /* else if (list[i].name != a) {
          amount = +prompt('amount?')
          check = prompt('Check? Yes/No')
          list.push({'name': a, 'amount': amount, 'check': check});
          sort();
          break; 
      } */ 
      //Вот так он работет, а если раскоментировать - ломается и только добавляет новые, но не сверяет. 
      //Пытался дебажить - не понял таки в чем проблема.
      //Если раскоментить - оно проверяет 0 индекс, после чего сразу же прыгает в следующее условие. Если комментить - то работает пока не найдет похожий. 
/*       }
  }

  

sort(); 

push();

change();  */



//////////////////////



/*  let bill = [
      {
        name : 'potato', 
        amount : 5,
        price : 40
      },
        {
        name : 'tomato', 
        amount : 3,
        price : 20
    },
        {
        name : 'onion', 
        amount : 4,
        price : 30
    },
        {
        name : 'banana', 
        amount : 2,
        price : 50
    }
]

function print() {
  let sum = 0; 
  let sum2 = 0;
  let amountSum = 0;

  for (i = 0; i<bill.length; i++) { //Тут сумму всего чека вычисляю
    sum2 = bill[i].price * bill[i].amount; 
    sum += sum2;
  } 

  for (i = 0; i<bill.length; i++) { //Средню сумму чека (всю сумму делю на все количество товара)
    amountSum += bill[i].amount;
    Average = (sum/amountSum).toFixed(2);
  }

  for (i = 0; i<bill.length; i++) { //красивый(нет) вывод чека
    console.log(bill[i].name, '\n', 'Количество :' + bill[i].amount, '\n' + 'Цена :' + bill[i].price);
  }

  console.log(`Общая сумма:${sum}`); //так как в цикл если запихну, будет его повторять, поэтому сумма и среднее отдельно внизу
  console.log(`Средняя стоимость продукта в чеке:${Average}`);
}

function getMax() { //Самый дорогой товар, как вытащить имя еще не придумал.
  sum = bill.reduce((max, p) => p.price > max ? p.price : max, bill[0].price);
  console.log(`Самый дорогой продукт в чеке стоит: ${sum}`);
}




print();
getMax(); */



///////////////////



let auditory = [
    {
      name : 'Math', 
      amount : 10,
      department : 'physical and mathematical'
    },

    {
      name : 'Presentation', 
      amount : 20,
      department : 'Office'
    },

    {
      name : 'Labaratories', 
      amount : 15,
      department : 'IT'
    },

    {
      name : 'English language', 
      amount : 14,
      department : 'philology'
    }
]

function print() {
  for (i = 0; i<auditory.length; i++) { 
    console.log(auditory[i].name, '\n', 'Количество :' + auditory[i].amount, '\n' + 'Факультет :' + auditory[i].department);
  }
}

function choose(needed) {
     for (i = 0; i<auditory.length; i++) {
    if (auditory[i].department == needed) {
      console.log(auditory[i].name , '\n', 'Количество :' + auditory[i].amount, '\n' + 'Факультет :' + auditory[i].department )
    } 
  }  
  /* let departmentNeed = auditory.find(x => x.department === needed).name
  
  console.log(departmentNeed); */
}
  function sorting() {
    auditory.sort(function (a, b) {
      return a.amount - b.amount;
    })
  }

  function compare( a, b ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }
  


/* print(); */

/* choose('IT'); */

/* sorting();
print(); */

auditory.sort( compare );
  print();