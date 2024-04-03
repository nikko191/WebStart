const input_1 = document.querySelector('.i-1');
const input_2 = document.querySelector('.i-2');
const input_3 = document.querySelector('.i-3');
const button_1 = document.querySelector('.b-1');
const button_2 = document.querySelector('.b-2');
const button_3 = document.querySelector('.b-3');
// const button_clear = document.querySelector('.b-clear');
const out_1 = document.querySelector('.out-1');
const out_2 = document.querySelector('.out-2');
const out_3 = document.querySelector('.out-3');

console.log(`-----js script is included------`); //cutting const's zone

pageEvents();

function pageEvents() {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // Максимум не включается, минимум включается
    }

    button_1.onclick = () =>  {
        out_1.textContent = getRandomInt(117, 132);
    }

    console.log ('Please input min-max numbers in HTML-forms for the first and the second tasks')
    button_2.onclick = () =>  {
        let minim = parseInt(input_1.value);
        let maxim = parseInt(input_2.value);
        out_2.textContent = getRandomInt(minim, maxim);
    }

    function hello() {}; function e2021() {};

}

// function pageEvents__js2__23() {
//     // localStorage.setItem('data', 5);
//     // console.log(localStorage.getItem('data'));
//     // const a = [3, 4, 5];
//     // localStorage.setItem('a', JSON.stringify(a));
//     // let b = localStorage.getItem('a');
//     // console.log(b);
//     // b = JSON.parse(b);
//     // console.log(b);
//     // console.log(b[0])
//     //----------------------------------

//     button_1.onclick = function t1() {
//         localStorage.setItem('5', 11);
//     }

//     button_2.onclick = function t2() {
//         localStorage.setItem('a2', JSON.stringify([7, 6, 5]))
//     }

//     button_3.onclick = function t3() {
//         let b = localStorage.getItem('a2');
//         console.log(b);
//         b = JSON.parse(b);
//         console.log(b)
//     }
// }


// function pageEvents__js2__20() {

//     function task_first() {
//         out_1.onclick = () => {
//             if (input_1.value != '') {
//             out_1.textContent = input_1.value;
//             }
//             else {
//                 out_1.textContent = '. . .';
//             }
//         }

//     }

//     input_2.onkeypress = (event) => {
//             console.log(`The keycode is ${event.keyCode}. Everything alright...`)
//             out_2.textContent = event.key;
//     }

//     input_3.onkeypress = (event) => {
//         let keyValue = event.keyCode;
//         console.log(`The keycode is ${event.keyCode}. Everything alright...`);
//         if ((keyValue > 47)&&(keyValue < 58)) { out_3.textContent = false }
//         else if ((keyValue > 96)&&(keyValue < 123)) { out_3.textContent = true }
//         else { out_3.textContent = '. . .'}
//     }
// }

// document.querySelector('.divs__second').onclick = () => {
//     function getKey(event) {
//         if (event.key == 'Alt') {
//             document.querySelector('.out-2').textContent = true;
//             return true
//         }
//         else {
//             document.querySelector('.out-2').textContent = false;
//             return false
//         }

//     }
//     document.onkeyup = getKey;

// function pageEvents__js2__19 () {

// document.querySelector('.divs__first').onclick = () => {
//     document.querySelector('.out-1').textContent = document.querySelector('.divs__first').textContent;
// }

// document.querySelector('.divs__second').onclick = () => {
//     function getKey(event) {
//         if (event.key == 'Alt') {
//             document.querySelector('.out-2').textContent = true;
//             return true
//         }
//         else {
//             document.querySelector('.out-2').textContent = false;
//             return false
//         }

//     }
//     document.onkeyup = getKey;

// }

// document.querySelector('.divs__third').addEventListener('click', blockWidth);

// let w = parseInt(window.getComputedStyle(document.querySelector('.divs__third')).width);

// function blockWidth() {
//     w += 5;
//     document.querySelector('.divs__third').style.width = w + 'px';
//     console.log(w);
//     console.log(`actual width = ${w}px`)
//     console.log(`width = ${document.querySelector('.divs__third').style.width}px`)
// }

// }

// function pageEvents__js2_18() {

//     let a1 = [4,5,6,7,12,34,56,78,90,11];
//     let a2 = [2,3,4,5,10,11,12];
//     let a3 = [2, "hello", 3, "hi", 4, "Mazai"];
//     let a1_res = []; let i = 0;
//     let a2_res = [];
//     let a3_res = [];

//     button_1.onclick = () => {
//         a1.forEach(function (elem, index) {
//             a1_res[i] = elem*2;
//             i++;
//         });
//         console.log(a1);
//         console.log(a1_res);
//     };

//     button_2.onclick = () => {
//         a2.forEach(function (elem, index) {
//             a2_res[i] = elem/2;
//             i++;
//         });
//         console.log(a2);
//         console.log(a2_res);
//     };

//     button_3.onclick = () => {
//         a3.forEach(function (elem, index) {
//             if (typeof(elem) == 'string') {
//                 a3_res[i] = elem;
//                 i++;
//             }
//         });
//         console.log(a3);
//         console.log(a3_res);
//     };

// }


// function pageEvents_js2_17() {

//     let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
//     let a2 = [2,3,4,5,10,11,12];
//     let a3 = [4,"3",6,7,"12",34,"56",78,90,11];

//     button_1.onclick = () => {
//         let a1_res = a1.map((item, index) => {
//             return item*2
//         });
//         console.log(a1);
//         console.log(a1_res);
//     }

//         button_2.onclick = () => {
//         let a2_res = a2.map((item, index) => {
//             return Math.pow(item, 2)
//         });
//         console.log(a2);
//         console.log(a2_res);
//     }

//     button_3.onclick = () => {
//         let a3_res = a3.map((item, index) => {
//             return parseInt(item)
//         });
//         console.log(a3);
//         console.log(a3_res);
//     }

// }

// function pageEvents_js2_16 () {
//     let a1 = [0];
//     let i = 0;
//     let a2 = [0];
//     let k = 0;

//     document.addEventListener('keydown', input_first);

//     function input_first(event) {
//         if ((event.key == "Enter")&&(input_1.value != '')) {
//             a1[i] = input_1.value;
//             console.log(`i = ${i}, a1[${i}] = ${a1[i]}`)
//             console.log(`input_1.value = ${input_1.value}`)
//             console.log(a1);
//             i++;
//             input_1.value = '';
//         }
//     }

//     button_1.onclick = function f1() {
//         let textLineOne = '';
//         for (i = 0; i < a1.length; i++) {
//             textLineOne += a1[i] + ' ';
//         }
//         out_1.textContent = textLineOne;
//     }

//     document.addEventListener('keydown', input_second);

//     function input_second(event) {
//         if ((event.key == "Enter")&&(input_2.value != '')) {
//             a2[k] = input_2.value;
//             console.log(`k = ${k}, a2[${k}] = ${a2[k]}`)
//             console.log(`input_2.value = ${input_2.value}`)
//             console.log(a2);
//             k++;
//             input_2.value = '';
//         }
//     }

//     button_2.onclick = function f2() {
//         let textLineTwo = '';
//         for (k = 0; k < a2.length; k++) {
//             textLineTwo += a2[k] + ' ';
//         }
//         out_2.textContent = textLineTwo;
//     }

//     button_3.onclick = function f3() {
//         let r = document.getElementsByClassName('out-3');
//         console.log(r);
//         for (m = 0; m < r.length; m++) {
//             console.log(`r[${m}] = ${r[m].value}`);
//             r[m].value = 3;
//             // r[i] = 3;
//         }
//     }

// }


// let s2 = new Set();
// let a = []; let i = 0;
// let elem = '';

// button_2.onclick = function f2() {
//     a[i] = document.querySelector('.i-1').value;
//     console.log(`a[${i}] = ${a[i]}`);
//     s2.add(a[i]);
//     console.log(s2);
//     i++;
//     input_1.value = '';
// }

// button_3.onclick = function f3() {
//     elem = document.querySelector('.i-3').value;
//     for (let item of s2) {
//         if (elem == item) {
//                 s2.delete(item);
//         }
//     }

//     console.log(s2);
//     input_3.value = '';
// }

// const d1_const = [33,'best', 66, 'best'];
// const a1 = {
//     "one" : 15,
//     "two" : 16,
//     "five" : 20
// }
// const a2 = {
//     "one" : "hello",
//     "two" : "mahai",
//     "five" : "hi"
// }

//     for (let key in a1) {
//         if (key != 'two') continue 
//         else {
//             let outString = a1[key];
//             console.log(outString);
//             document.querySelector('.out-1').innerHTML = outString;
//             break
//         }
//         return a1[key];
//     }
// }

// button_2.onclick = function f2 () {
//     for (let key in a2) {
//         if (a2[key] != 'hi') continue 
//         else {
//             let outString = a2[key];
//             console.log(outString);
//             document.querySelector('.out-2').innerHTML = outString;
//             break
//         }
//         return a2[key];
//     }
// }

// button_3.onclick = function f3 () {
//     for (let key in a2) {
//         if (a2[key] != 'hi') continue 
//         else {
//             let outString = `"${key}" : ${a2[key]}`;
//             console.log(outString);
//             document.querySelector('.out-3').innerHTML = outString;
//             break
//         }
//         return outString;
//     }
// }

// let d1 = [...d1_const];

// function showArr () {
//     let outString = d1;
//     document.querySelector('.out-1').innerHTML = outString;
//     console.log(d1_const);
// }

// button_clear.onclick = () => { let outString = ""; 
//     document.querySelector('.out-1').innerHTML = outString;
//     d1 = [...d1_const];
//     return
// };

// const input_2 = document.querySelector('.i-2');
// const input_3 = document.querySelector('.i-3');
// let outString = "";

// button.onclick = function values () {
//     let num_1 = +input_1.value, num_2 = +input_2.value;
//     if (num_1 > num_2) {
//         let out = num_1;
//         console.log(`num_1 = ${num_1}, num_2 = ${num_2}`)       
//         console.log(`The lager number is ${num_1}`)
//         outString = String(num_1);
//         document.querySelector('.out-1').innerHTML = outString;
//     }
//     else {
//         let out = num_2;
//         console.log(`num_1 = ${num_1}, num_2 = ${num_2}`)       
//         console.log(`The lager number is ${num_2}`)
//         outString = String(num_2);
//         document.querySelector('.out-1').innerHTML = outString;
//     };
//     input_1.value = ''; input_2.value = '';
//     num_1 = 0; num_2 = 0;
//     console.log('Yay!');
//     console.log(-66 > -55);

//     return
// }

// button_1.onclick = function f1 () {
//     document.querySelector('.out-1').innerHTML = "";
//     let outString = "";
//     for (let i = 0; i < 3; i++) {
//         for (let k = 0; k < 3; k++) {
//             outString +=  "*";
//         }
//         outString +="_";
//     }
//     document.querySelector('.out-1').innerHTML = outString + "<br>";
//     console.log(document.querySelector('.out-1').innerHTML);
//     return
// }

// button_2.onclick = function f2 () {
//     document.querySelector('.out-1').innerHTML = "";
//     let outString = "";
//     for (let m = 1; m <= 3; m++) {
//         document.querySelector('.out-1').innerHTML += m + " ";
//         for (let i = 0; i < 3; i++) {
//             for (let k = 0; k < 3; k++) {
//                 outString +=  "*";
//             }
//             outString += "_";
//         }
//         outString += "\n";
//         document.querySelector('.out-1').innerHTML += outString;
//         document.querySelector('.out-1').innerHTML += "<br>";
//         outString = "";
//     }
//     console.log(document.querySelector('.out-1').innerHTML);
//     return
// }

// button_1.onclick = () => {
//     let newEl = document.querySelector('.i-1').value;
//     d1.push(newEl);
//     showArr();
// }

// button_2.onclick = () => {
//     let newEl = document.querySelector('.i-1').value;
//     d1.pop();
//     showArr();
// }

// button_3.onclick = () => {
//     let newEl = document.querySelector('.i-1').value;
//     d1.shift();
//     showArr();
// }

// button_2.onclick = () => {
//     out_1.classList.add('bg-orange');
// }

// button_3.onclick = () => {
//     out_1.classList.remove('bg-orange');
// } 

// let s1 = new Set();
// s1.add('h');
// s1.add('b');
// s1.add('o');
// s1.add('h');
// console.log(s1);