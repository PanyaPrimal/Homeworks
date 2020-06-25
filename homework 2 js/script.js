'use strict';
//1
function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
  alert( fib(4) ); 
  alert( fib(8) ); 
//2

for (let n = 1000, num = 1; true; num++) {
    n /= 2;
    if (n<50){
        alert(num)
        break 
    }
}

//3

let obj = {
    name: "Ivan",
    phone: "+88005553535",
    address: "st. Pushkina, house Kolotushkina",
    total_price: 830,
    total_weight: 2700,
    items: [{
      name: "cup",
      price: 100,
      weight: 200
    },{
      name: "spoon",
      price: 30,
      weight: 100
    },{
      name: "teapot",
      price: 550,
      weight: 2000
    },{
      name: "pot",
      price: 150,
      weight: 400
    }]
  }