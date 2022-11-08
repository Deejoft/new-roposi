// console.log('Hello world');


//COMMENT IN JAVASCRIPTS
//VARIABLE 
// = assignment operator
//

//var
//let
//const


// var loveth = 23;
// console.log(loveth);

// let loveth1 = 56;
// console.log(loveth1);

// const loveth3 = 45;
// console.log(loveth3);




// let fruited = "loveth";
// console.log(fruited);


//true and false are boolean 

// let fruit_mango = 45;
// console.log(fruit_mango);

//Write all the rules for naming a variable in Javascripts
//write out all the reserved words in JS
// if
// else
// else if
// true
// false

// console.log(document.body);


//DOM API
// document.getElementById('papa').textContent = 'I AM THE BADDEST DEVELOPER...COMMA JOIN ME';
// document.getElementById('Loveth').textContent = 'My latest roomie, she go pack come this weekend';


//DOM API CREATING A NEW ELEMENT PROGRAMMATICALLY
// var loveth_roomie = document.createElement('h2');
// loveth_roomie.textContent = 'LOVETH NA MY NEW ROOMIE';
// document.body.appendChild(loveth_roomie);


// var imago = document.createElement('img');
// imago.src = 'LOGO2.png';
// document.body.appendChild(imago);


// alert('PLEASE CLOSE ME');
// window.alert('can i close you');

//prompt is used to get input from user
// prompt(' when are you coming bk to Ib Loveth');

// window.confirm('Do you really want to leave us ');


//ARRAY

// var fruits = ['mango', 'orange', 'pineapple', 'cashew', 'cherry', 'strawberry'];
// console.log(fruits.length);
// console.log(fruits.indexOf('mango'));
// console.log(fruits.shift());
// console.log(fruits.unshift('loveth'));
// console.log(fruits.push('sweet'));
// console.log(fruits.pop())
// fruits.forEach(element => console.log(element));
// console.log(fruits[0]);
// console.log(fruits[3]);


// console.log(fruits);


//OBJECT

// var question_master = {
//     firstname : 'Nwankwo',
//     lastname : ' Loveht',
//     Age : '35'
// }
// console.log(question_master.firstname);




//console.time
// console.time('response in');
// alert('thank you for coming today Sweet loveth');
// console.timeEnd('response in')
// console.time('response in')
// alert('thank you');
// console.timeEnd('response in');


//table in JAVASCRIPTS
// console.table(['Hello', 'World']);

// var longertable = [
//     {
//         'firstname': 'Ajanlekok',
//         'lastname': 'Osundanyo',
//         'Age' : 45
//     },
//     {
//         'firstname': 'Nwankwo',
//         'lastname': 'Loveth',
//         'Age' : 109
//     },
//     {
//         'firstname': 'Ajanlekok',
//         'lastname': 'Osundanyo',
//         'Age' : 45
//     },
//     {
//         'firstname': 'Dolapo',
//         'lastname': 'Omo baba',
//         'Age' : 467
//     }
// ]
// console.table(longertable[1]);
// console.table(longertable, ['firstname', lastname])



// //datatypes in Javascripts
// console.log(typeof(67));
// console.log(typeof(9.67));
// console.log(typeof('oluwa'));
// console.log(typeof(true));
// console.log(typeof(false));
// console.log(typeof(NaN));


//STRING 4567

// var intstring =  String(6776);
// console.log(typeof(intstring));


//CONCATENATING TWO STRING

// var first_string = 'thank you ';
// var second_string = ' more blessing';

// console.log(first_string +""+ second_string);

//template literal

// var ro = " it's an honour to have you";
// var go =  `Hello ${ro}!`;
// console.log(go);



//LOGIC OPERATORS WITH BOOLEAN  
//AND


// let a = 7;
// let b = 8;
// let c = 19;
// console.log( a < b && c > b);

//OR 
// let a = 7;
// let b = 8;
// let c = 19;

// console.log( a > b || c < a  || b < c)

// NOT
// let a = 9;
// let b = 45;
// let c = 12;
// console.log( a < b != b > c  );



//CONDITIONAL EXPRESSIONS
// var i = 7;
// if(i > 9){
//     console.log('thank you ');
// }else{
//     console.log('Very well');
// }

//ELSE IF CONDITIONS

// var f = 12;
// if( f > 45 ){
//     console.log('come on');
// }else if(f == 5){
//     console.log('coming in now')
// }else{
//     console.log(' GOOD');
// }

//nesting
// var f = 12;
// if( f > 45 ){
//     console.log('come on');
// }else{
//     if(f == 5){
//         console.log('good motherfucker');
//     }else{
//         console.log(' DEEJOFT')
//     }
      
  
// }


//ARRAY LIKE OBJECT
// const roto = ['kals', 'benzo', ' rover'];
// console.log(roto[1]);

//CHANGING AN ARRAY ELEMENT
// const gogo = [ 'opel omega', 'honda', 'rolls royce'];
// gogo[1] = 'bmw';
// console.log(gogo);
// document.getElementById('Loveth').innerHTML = gogo;


//deleting an array
// const deleto = [ 1,2,3,4,5];
// delete deleto[1];
// console.log(deleto);


//object

// var gravity = {
//     firstname : 'Dodo'
// };
// var gelato  = {
//     dada : 'oluwa'
// };
// Object.assign(gravity, gelato, {lastname: 'jojo', Age: 45});
// console.log(gravity, gelato);


//MODULUS
// console.log( -48 % 10);


//incrementing and decrementing
// a = 6;
// b = ++a;
// c = a
// console.log(c);

// a = 5;
// b = a--;

// console.log(b);

//EXPONENTIATION

// console.log( 2**4);
// console.log(Math.pow(2,4));


//ceil and floor
// console.log(Math.ceil(-7.70));

// console.log(Math.floor(-5.10));



//FUNCTION
//lets calculate how to print the age of person on html page using javascripts
// var numfield1 = document.getElementById('numfield1');
// var numfield2 = document.getElementById('numfield2');
// var submitfield = document.getElementById('submitfield');


// function Ageinyear(){
//     if(!numfield1.value || !numfield2.value){
//         alert('Please input a valid value inside the box');
//     }else{
//         let jajaop = numfield1.value;
//         let oppos = numfield2.value;
//         let results = jajaop- oppos;
        
//         alert(results);


//     }
// }


//LOOP
// for( 
//     var i = 0;
//     i <= 10;
//     i++
    
// ){
//     console.log(i);
// }


//for of

// const iter = [0,1,2,4,5];
// for ( var i of iter){
//     console.log(i);
// }




// var i = 0;
// while( i < 12){
//     console.log(i);
//     i++;
// }


//do while loop
// var i = 90;
// do {
// console.log(i);
// } while (i < 100);


//switch statement

switch (7) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       days = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
    default:
      day = ' Last man standing'

  }
console.log(day);

