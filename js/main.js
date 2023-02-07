// const thief = {
//      age: 30,//Number
//      jacket: "black", //String
//      isLong: false, //Boolean
// };
// console.log(thief.jacket);

//Array
//                0       1         2     3    4   5
// const colors = ["red", "black", "green", 10,   [], {}];
// console.log(colors[5]);
// alert ("Hello World");

// const place = confirm ("Siz haliham saytdamisiz!");
// console.log(place);

// const currenPlace = prompt("Sayt sizga yoqdimi!", "Bilaman sizga yoqib tushdiyu prosta ok dep qo'ying");
// console.log(typeof currenPlace);

// const favoriteColor = [];
// favoriteColor[0] = prompt("Sizga yoqtiradigan rang #1","");
// favoriteColor[1] = prompt("Sizga yoqtiradigan rang #2","");
// favoriteColor[2] = prompt("Sizga yoqtiradigan rang #3","");

//Interpolatsiya
// console.log(favoriteColor);
// const channel = prompt("Qaysi bloggerni ko'p kuzatasiz!!!");
// console.log(`https://youtube.com/${channel}`);

//Interpolatsiya
// const user = "Hojiakbar";
// const job = "Web developer";
// console.log(`Foydalanuvchi ismi ${user}, va u ${job}`);

//Operator Prefiks
// let incr = 10;
// let decr = 10;
// console.log(incr++);
// console.log(decr--);
// console.log(incr++);
// console.log(decr--);
// console.log(incr);
// console.log(decr);

//Operator Prefiks
//Oldiga qo'ysaham birhil vazifani bajaradi
// let incr = 10;
// let decr = 10;

// console.log(++incr);
// console.log(--decr);

//% Pratsent foiz
// console.log(10 % 3);

//Tenglik belgisi == ikkita bo'lsa faqat qiymatini  solishtiradi
// console.log(5 * 5 == 25);
// console.log(4 * 4 == "hola"); //string qiymat hato
// console.log(4 * 4 == "16");

//Tenglik bergisi === uchta bo'lsa ham qiymatini ham ma'lumot turini solishtiradi
// console.log(5 * 5 === 25);
// console.log(4 * 4 === "hola"); //string qiymat hato
// console.log(4 * 4 === "16");

//Va Yoki belgilari
// && = va    Va belgisi ishlaganda hammasi true bo'lishi shart shunda true chiqaradi!!!
// const isAge = true;
// const isClose = true;  //true
// const isChecked = true;
// console.log(isAge && isClose && isChecked);

/* const isAg = true;
const isClos = true;
const isChecke = false; //false
console.log(isAg && isClos && !isChecke); */


//Va Yoki belgilari
// || = Yoki belgisi ishlaganda bittasi true bo'lsaham javob true bo'lip chiqadi !!!

// const isAge = true;
// const isClose = false;  //true
// const isChecked = false;
// console.log(isAge || isClose || isChecked);

// const isAg = false;
// const isClos = false;
// const isChecke = false; //false
// console.log(isAg || isClos || isChecke);


//  ! undov bu belgi ture va false ni teskari ugurib beradi Yani

// const isHola = true; //false
// const isToga = false; //true
// console.log(!isHola);
// console.log(!isToga);

//Uyga vazifa
/* const numberOfSerius = prompt("Nechta serial ko'rdingiz?", "");
const seriusDB = {
     count: numberOfSerius,
     serius: {},
     actors: {},
     genres: [],
     privat: false,
};*/
/* const a = prompt ("Ohirgi ko'rgan serialingiz?"),
      b = prompt ("Nechi baho berasiz?"),
      c = prompt ("Ohirgi ko'rgan serialingiz?"),
      d = prompt ("Nechi baho berasiz?");
      seriusDB.serius[a] = b;
      seriusDB.serius[c] = d;
console.log(seriusDB); */

//Shartli operatorlar If Agarda else Yokida
// const age = +prompt("How old are you?", "");

/* const yosh = prompt("Yoshimgizni kiriting:", "");
if (yosh > 2){
     console.log("Sizni bog'chamizga qabul qila olamiz");
}if (yosh => 7){
     console.log("Sizni maktabimizga qabul qilamiz");
}else if (yosh =>19){
     console.log("Sizni Universitetimizga qabul qila olamiz");
}else {
     console.log("Sizni magistirga taklif qilamiz");
} */

// if (age > 18){
//      console.log("Welcome");
// }else {
//      console.log("No entry");
// }

/* const country = prompt("Yoshigiz nechida?","");
if (country > 25){
     console.log("Ujasni film");
}else if( country > 18 && country < 25){
     console.log("Urush film");
}else {
     console.log("Multfilm");
} */

//Ternary Operator
// age > 25 ? console.log("Ujasni filims") : console.log("Boevik films");

// // Switch case
// const color = "green";
// // const color = prompt("Ismingizni kiriting!!!","");
// switch (color){
//      case "red":
//           console.log("To'xtang");
//           break;
//      case "green":
//           console.log("Yuring");
//           break;
//      case "yellow":
//           console.log("Tezlikni kamaytiring");
//           break;
//      default:
//           console.log("Tiqilinch");
//           break;
// }

//Tsikl Hardoim qaytariladigan ish
// let startNam = 1;

// //First While malum vaqt jarayonida
// while (startNam <= 20) {
//      console.log(startNam);
//      startNam++;
// }

// do {
//      console.log(startNam);
//      startNam++;
// } while (startNam <= 10);

    /*  while (startNam <= 10) {
          console.log(startNam);
          startNam++;
     } */

     //do Qil // bajar degani
     /* do{
          console.log(startNam);
          startNam++;
     }while (startNam <=10); */

     //Third
     /* for (let i = 1; i <= 10; i++) {
          if (i === 8) {
          //break; // O'zgaruvchida belgilangan sonda to'xtatadi
          continue; // O'zgaruvchiga berilgan sonni tashlan ketdi
          }
          console.log(i);
     } */

//Third
// for (let i = 1; i <= 8; i++){
//      console.log(startNam);
//      startNam++;
// }










// // Uyga vazifa



//  const seriusDB = {
//      count: 0,
//      serius: {},
//      actors: {},
//      genres: [],
//      private: false,
//      start: function () {
//           seriusDB.count = +prompt("Nechta serial ko'rdingiz", "Raqam kiriting");

//           while(seriusDB.count == "" ||
//           seriusDB.count == null ||
//           isNaN(seriusDB.count)
//           ){
//                seriusDB.count = prompt("Nechta serial ko'rdingiz", "");
//                }
//          },
//          rememberMySerius: function (){
//               for (let i = 0; i < 2; i++){
//                 const a = prompt("Oxirgi ko'rgan serialingiz?"),
//                 b = prompt("Nechi baho berasiz?");
//                 if (a != null && b != null && a !="" && b !=""){
//                 seriusDB.serius[a] = b;
//                 console.log("done");
//               }else{
//                 console.log("error");
//                 i--;
//               }
//            }
//          },
//          detectLevelSerius: function(){
//           if (seriusDB.count < 5) {
//                console.log("Kam serial ko'ribsiz");
//           } else if (seriusDB.count >= 5 && seriusDB.count < 10) {
//                console.log("Siz classik tomoshabin ekansiz");
//                } else if (seriusDB.count >=10) {
//      console.log("Siz serialchi zvezda keansiz");
//      }else {
//      console.log("Error");
//           }
//      },
//       showDb: function(){
//           if(!seriusDB.private){
//                console.log(seriusDB);
//           }
//      },
//       visableDb: function () {
//           if (seriusDB.private) {
//                seriusDB.private = false;
//           }else {
//                seriusDB.private = true;
//           }
//      },
//       writeGenres: function(){
//           // for (let i = 0; i <= 2; i++){
//                // const genre = prompt (`Yaxshi ko'rgan janringiz ${i + 1}`);
//                // if (genre == '' || genre == null) {
//                //      console.log("Siz noto'g'ri ma'lumot kiritdingiz");
//                //      i--;
//                // } else{
//                //      seriusDB.genres[i] = genre;
//                // }ss
//           // }
//           let genres = prompt ("Yaxshi ko'rgan janringizni vergul yordamida yozing")
//           .toLocaleLowerCase;
//           console.log(genres);
//           if (genres == '' || genres == null) {
//                console.log("Siz noto'g'ri ma'lumot kiritdingiz");
//                i--;
//           } else{
//                seriusDB.genres = genres.split(', ');
//                seriusDB.genres.sort();
//           }
//           seriusDB.genres.forEach((item, idx) => {
//                console.log(`Yaxshi ko'rgan janiringiz ${idx + 1} - nomi ${item}`);
//           });
//      },
//  };










   //#16. Funksiya,ES6

  /*  console.log("Hello World");

   function calc(a, b, c, d, e, f){
     console.log(a + b + c + d + e + f);
     console.log(a - b - c - d - e - f);
     console.log(a + b * c * d * e * f);
   }
   calc(1, 2); */

//    function sayMyName (name, surname) {
//      console.log(`My name is ${name} ${surname}`);
//    }
//    sayMyName("Hojiakbar", "Usmonov");

// const calc = (a,b) => a + b;  // => katta belgisidan keyin aftomatik returin paydo bo'ladi // Return qaytarib beradigan kod hisoblanadi
// console.log(calc(10,15));

/* //Function decloration
function calc( a, b ) {
     return a + b;
}
const sumOfAandB = calc(10,5);
console.log(sumOfAandB); */

/* //Function Expression
const logger = function () {
     console.log("Hello World");
};
logger(); */

/* //Arrow function
const calc = (a) => {
     console.log("!");
     return a;
}; */

//Methodlar bilan ishlash
/* let user = "Samar";
// console.log(user[2] = "r");
console.log(user.toLocaleLowerCase()); //Barcha harflarni kichik qilib beradi
console.log(user.toUpperCase());//Barcha harflarni katta qilib beradi
console.log(user); */

// const greting = ("Assalomu alekum");
/* console.log(greting.indexOf("a"));  *///indexOf textdagi harfni nechanchi qatorda ekanini aytib beradi
// console.log(greting.slice(0,17));
// console.log(greting.substring(0,17));


//# Metod va Xususiyatlar
//Math metod
/*  const num = 8.9;
console.log(Math.round(num));//Butunlik darajasi eng yaqin sonni chiqarib beradi
const engKichikButun = "13.9px";
 console.log(parseInt(engKichikButun));//eng kichik butun sonni chiqarib beradi// Malumot turini string qiladi va so'zlarni olib tashlaydi
console.log(parseFloat(engKichikButun));//Son qanday bo'lsa shundayligicha shuni chiqarib beradi harflarni olib tashlaydi */


// // Callback Ma'lumot yoki Funksiyalarni novbati bilan chiqarish uchun ishlatiladi
// function first(cb){
//      //code
//      setTimeout(() => {
//           console.log(1);
//           cb();
//      }, 1000);
// }

// function second (){
//      //code
//      console.log(2);
// }
// first(second);

// const qochoq = {
//      jacket: "black",
//      height: 1.7,
//      color: {
//           hair: "gray",
//           style: "curley"
//      },
//      howOut: function () {
//           console.log("Yashshamagur eshikdan qochgan ko'rinadi");
//      },
//      };
//      qochoq.howOut();
//      const {hair, style} = qochoq.color;
//      console.log(hair);
//      console.log(style);
// console.log(qochoq.height);
// // delete qochoq.jacket;
// console.log(qochoq);

// console.log(Object.keys(qochoq).length);

// for ( let key in qochoq ) {
//      if (typeof qochoq[key] === "object") {
//           for (let i in qochoq[key] ) {
//                console.log(`Malumot ${i} va keyingi ${qochoq[key][i]}`);
//           }
//      } else {
//           console.log(`Malumot ${key} va keyingi ${qochoq[key]}`);
//      }
// }

//property Malum bir vazifani bajarishda ishlatiladigan kod


// function edu (subject, callback) {
//      console.log(`I wanna teach ${subject}`);
//      callback();
// }
// edu ("javascript", function(){
//      console.log("That's great");
// });


// //Object //Destruptizatsiya
// const theif = {
//      jacket: "black",
//      height: 1.7,
//      colors: {
//           hair: "grey",
//           style: "curley"
//      },
// };
// // console.log(theif.height);
// // delete theif.jacket;
// // console.log(theif);
// console.log(Object.keys(theif).length);

// for ( let key in theif) {
//      console.log(`Property ${key} has value ${theif[key]}`);
// }






//Massivlar


// const arr = [11, 2, 22, 1];
// arr.sort(compareFn);
// console.log(arr);
// function compareFn(a, b) {
//      return a - b;
// }

// arr.pop();//Ohiridan bittasini olib tashlaydi
// arr.push(7); //ohiriga bitta son qo'sha oladi
// arr.shift();
// arr.unshift(0);
// console.log(arr);
// for (let i = 0;  i < arr.length; i++ ){
//      console.log(arr[i]);
// }
// for (let value of arr) {
//      console.log(value);
// }
// arr.forEach (function (item, index, arr) {
//      console.log(`${index} ${item} into arr ${arr}`);
// });

// const movies = prompt("Bu yerga nima yozsang yoz mazgi", "");
// const userMovies = movies.split(", ");
// userMovies.sort();
// console.log(userMovies.join("- "));





//Clonlash ES6
// const number = {
//      x: 10,
//      y: 5,
// };
// const newNumber = number;
// newNumber.x = 15;
// console.log(number);

// function nusxaObj(obj) {
//      let objNusxa = {}

//      for ( let key in obj) {
//           objNusxa[key] = obj[key]
//      }
//      return objNusxa;
// }
// const number = {
//      x: 10,
//      y: 5,
//      z: {
//           a: 1,
//           b: 2,
//      }
// };
// const newNumber = nusxaObj(number);
// newNumber.x = 15;
// newNumber.z.a = 10;

// console.log(newNumber);
// console.log(number);

//Object.assign bo'sh abektga yangi manbani osongina qo'shib berishda ishlatiladi
// const number = {
//      x: 10,
//      y: 5,
// };
// const addNumber = {
//      z: 15,
// };

// const allNumbers = Object.assign(number, addNumber);

// console.log(allNumbers);


// const arr = [1, 2, 3, 4];
// const numbers = arr.slice();
// numbers[3] = "Hojiakbar";
// console.log(arr);
// console.log(numbers);

// //SPREAD

// const liverpool = ['Salah', 'Mane'];
// const manCiti = ['Mahrez'];

// const mixPlayer = [...liverpool, ...manCiti];
// console.log(mixPlayer);

// SPREAD OPERATORI  // oddi o'zgaruvchini emas funksiyani qabul qidi va bajara oladi

// const calc =[1, 2, 3];

// function logger(a, b, z) {
//      console.log(a + b + z);
// }
// logger(...calc);

// const numbers = {
//      a: 10,
//      b: 15,
// };
// const newNumber = {...numbers};
// console.log(newNumber);




//OOP Asoslari

// const car = {
//      motor: 'X',
//      color: 'red',
//      isAirBag: true,
//      isSpead: function () {
//           console.log(320);
//      },
// };

// const gm = {
//      isAirBag: false,
// };
// const bmv = Object.create(car);
// // Object.setPrototypeOf(gm, car);
// console.log(bmv);


// gm.__proto__ = car;
// console.log(gm.color); Bu eski yo'li hisobanadi
// gm.isSpead();







//Dynamic Typing
//to string
// -1)
// console.log(typeof String(4));

// // -2)
// console.log(typeof('samar' + 21));

// // -3)
// // numberni string malumot turiga o'tqazish
// const youtubeChanel = 10;
// console.log('youtube.con/chanel/' + youtubeChanel);

//To number
// -1)
// console.log(typeof Number('4'));

// -2)
// console.log(typeof + '5');

// -3)
// console.log(typeof parseFloat('15'));
// console.log(typeof parseInt('15'));


// console.log(typeof Boolean ('4'));
// console.log(typeof !!'4');







//Dom bilan ishlash

//Old way //Bunday qilib elementlarni olish eski yo'l hisoblanadi

// const box = document.getElementById('box');  Id
// console.log(box);

// const buttons = document.getElementsByTagName('button')[0];// [Massiv] Hech qachon massivni ichidagi elementga o'zgartirish kiritib bo'lmaydi //Tag name yani buttonga o'xshagan
// console.log(buttons);

// const circles = document.getElementsByClassName('circle')[0]; //Ichidagi class elementlarni olish uchun [Massiv 0 1 2 3 4] qilib olvolishimiz kerak bo'ladi
// console.log(circles ); // Bu oddi class olishni yo'li

// New way //Elementlarni olishni  Yangi yo'li

//Idni documentdan olish usullarni
// const box = document.querySelector ('#box'); //Idni olishda # rishotka bergisini quyib ketish kerak
// console.log(box);

// const box = document.querySelectorAll ('#box');
// console.log(box);


// Tag larni documentdan olish usullari
// const buttons = document.querySelector('button'); //Bu taglarni olish usuli //bir element
// console.log(buttons);

// const buttons = document.querySelectorAll('button');  //ikki element
// console.log(buttons);



// const hearts = document.querySelector ('.heart');// QuerySelector faqatgina bitta elementni olib beradi va doim birinchi elementni olib beradi
// console.log(hearts);

// const hearts = document.querySelectorAll('.heart'); //ikki element . nuqta orqali classlarni olish mumkin
// console.log(hearts);


//Bir elementni ichidagi elementni olish usuli

// const wrapper = document.querySelector('.wrapper');
// console.log(wrapper);


// const hearts = wrapper.querySelectorAll('.heart');
// console.log(hearts);


// heart.forEach((item) => {
//      console.log(heart);
// });







//Metodlar bilan ishlash


// const box = document.querySelector('#box');
// box.style.backgroundColor = 'black';
// box.style.height = '200px';
// box.style.width = '200px';


// const buttons = document.querySelectorAll('button');

// buttons[2].style.width = '150px';
// buttons[2].style.height = '150px';
// buttons[2].style.backgroundColor = 'green';

//Ommaviy o'zgartirish uchun eski yo'li
// const hearts = document.querySelectorAll('.heart');

// for (let i = 0; i < hearts.length; i++) {
//      hearts[i].style.backgroundColor = 'silver'; bu eski va juda kam foydalaniladigan yollaridan biri
// }


//Ommaviy o'zgartirish uchun yangi yo'li

// const hearts = document.querySelectorAll('.heart');

// hearts.forEach((item) => {
//      item.style.backgroundColor = 'aqua';
// });


//Bodyga nimadur qo'shish

// const btn = document.createElement('button');
// document.body.append(btn);
// const circleWrapper = document.querySelector('.circle__wrapper');
// const circles = document.querySelectorAll('.circle');

// const myCircle = document.createElement("div");
// myCircle.classList.add('circle');
// circleWrapper.append('myCircle');//Davomidan tushadi



// circleWrapper.before('myCircle');//Ustiga chiqadi
// circleWrapper.after('myCircle');//tagiga tushadi
// circles[0].after('myCircle');// 0dagi elementdan oldin qo'shiladi after bo'sa 0dagi elementdan keyin qo'shiladi
//circles[1].remove(); //remove elementi o'chirib tashlashda ishlatiladi
// circles[1].replaceWith(myCircle); //O'rniga o'rin qo'yib qo'yish mumkin
// circleWrapper.append(myCircle);
// myCircle.innerHTML = 'E'; //textni qo'sha oladi
// myCircle.textContent = 'E';


//29- UYga vaziga

const adv = document.querySelectorAll('.promo__adv  img'),
 wrapper = document.querySelector('.promo__bg'),
 genre = wrapper.querySelector('.promo__genre'),
 seriesList = document.querySelector('.promo__interactive-list');

 adv.forEach((item) => {
     item.remove();
 });

 genre.textContent = 'Comediya';

 wrapper.style.backgroundImg = "url(img/)";