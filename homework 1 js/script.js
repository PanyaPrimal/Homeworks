'use strict';

//1
let second = 1;
let minute = second * 60;
let hour = minute * 60;
alert( hour * 3 );

//2
let num = 1;
num +=12;
num -=14;
num *=5;
num /=7;
num++;
num--;
console.log(num);

//3 
let z=10, x=2, r=5;
console.log(z+x+r);

//4
let a=17, b=10;
let c=a-b;
let d=7;
let result = d + c;
console.log(result);

//5
let name = 'Виктор';
console.log('Привет, ' + name + '!');

//6
let s = 3;
if (s === '1') {
    alert ('Верно');
} else {
    alert ('Неверно');
};

//7
let item = true;
if (item != true) {
    alert ('Верно');
} else {
    alert ('Неверно');
};

item =! false ? alert ('Верно') : alert ('Неверно');


//8

let k = -3;
if ( k>0 && k<4 ) {
    alert ('Верно');
} else {
    alert ('Неверно');
};

//9  
let j = 4;
let n = 4;
if ( 3 < j < 12 || 7 <= n <15) {
    alert ('Верно');
} else {
    alert ('Неверно');
};

//10
let month = 10;
if (month == 12 || 0 < month && month < 3){
    alert('zima');
}else if(3 <= month && month <= 5){
    alert('vesna');
}else if(6 <= month && month <= 8){
    alert('leto');
}else if(9 <= month && month <= 11){
    alert('osen')};
    


//11
let number = 0;
while (number <= 100){
    if(number % 2==0){
        console.log(number);
    }
    number++;
}
