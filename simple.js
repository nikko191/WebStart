const input_1 = document.querySelector('.i-1');
const input_2 = document.querySelector('.i-2');
const input_3 = document.querySelector('.i-3');
const button_1 = document.querySelector('.b-1');
const button_2 = document.querySelector('.b-2');
const button_3 = document.querySelector('.b-3');
// const button_clear = document.querySelector('.b-clear');
const button_check = document.querySelector('.check');
const checkbox = document.querySelector('.ch-3');
const out_1 = document.querySelector('.out-1');
const out_2 = document.querySelector('.out-2');
const out_3 = document.querySelector('.out-3');

console.log(`-----js script is included------`); //cutting const's zone

console.log('--------Task 01 (default)---------')
console.log('Please, input the value in the form for the first task. b-1 to perform.')

console.log('--------Task 02 (default)---------')
console.log('Please, input the value in the form for the second task. b-2 to perform.')

console.log('--------Task 03 (default)---------')
console.log('Please, input the value in the form for the third task. b-3 to perform.')
console.log('++++++++++++++++++++++++++++++++++')

    let a1 = [34, 1, 23, -34, 65, -4, 3, -17, 18, 0];
    let a2 = ['hello', 'hi', '3333', '!@#$%^&*', 'Nothing else'];
    let a3 = [2, "hello", 3, "hi", 4, "Mazai"];
    let a4 = [1, 2, 3, 4];
    let a1_ = [13, 15, 22, 23, 26, 35, 72, 94, 95, 99, 101, 117, 128, 256, 321, 432];
    let str_1 = 'Hello, ';
    let str_2 = 'world!'

pageEvents();

function pageEvents() {

    console.log('Please, input the elemens \"_from\" and \"_to\" into the first and second forms.');
    console.log('________________Go________________')

    function sortNumbers(mass) {
        mass = mass.sort((a, b) => { return a - b});
        console.log('The array is sorted: ', mass);
    }

    button_1.onclick = () => {
        
        let a1_from = +input_1.value;
        let a1_to = +input_2.value;

        console.log('a1_from =', a1_from);
        console.log('a1_to =', a1_to);

        sortNumbers(a1);
        
        a_res = a1.concat(a1_);

        console.log('The arrays are concated: ', a_res);

        sortNumbers(a_res);

        console.log('a1_ =', a1_);
        console.log('a1_from =', a1_from);
        console.log('a1_to =', a1_to);
        for (let i = 0; i < a1_.length;) {
            if((a1_[i] > a1_from) && (a1_[i] < a1_to)) {
                return out_1.textContent = a1_[i];
            }
            else i++;
            if (a1_[i] >= a1_to) return out_1.textContent = 'undefined';
        }
    }

    button_2.onclick = () => {
        
        sortNumbers(a1);

        let a1_from = +input_1.value;
        let a1_to = +input_2.value;

        console.log('a1_from =', a1_from);
        console.log('a1_to =', a1_to);

        function interval(elem, index, arr) {
            if ((elem > a1_from) && (elem < a1_to)) return out_2.textContent = elem;
            else return out_2.textContent = false;
        }
        console.log(a1.find(interval))
    }

    button_3.onclick = () => {

        sortNumbers(a1);

        let a1_from = +input_1.value;
        let a1_to = +input_2.value;

        console.log('a1_from =', a1_from);
        console.log('a1_to =', a1_to);

        let a3_res = a1_;
        function clear(arr) {
            while (arr.length > 1) arr.pop();
            console.log('The array is cleared: ', arr)
        }

        clear(a3_res);

        a1_filtered = a1.filter(elem => ((elem > a1_from) && (a1_to)));
        a3_res = a1_filtered.concat(a3_res);

        console.log('resulted array: ', a3_res);
        out_3.textContent = a3_res[0];

    }
        

    

}

// function pageEvents__mass__08() {

//     button_1.onclick = () => {
//         console.log('a1 =', a1);
//         console.log('a2 =', a2);
//         let res_1 = a1.concat(a2);
//         console.log('res_1(a1, a2) =', res_1);
//     }

//     button_2.onclick = () => {
//         let res_2 = str_1.concat(str_2);
//         console.log(res_2)
//     }

//     button_3.onclick = () => {
//         let res_3 = str_1.concat(a3);
//         console.log(res_3)
//     }
// }

// function pageEvents__mass__07() {

//     let str = "\\__this is the string__/";
//     let mySet = new Set();
//     a2.forEach(item => mySet.add(item));

//     button_1.onclick = () => {
//         console.log(mySet);
//         console.log(
//             Array.isArray(str), Array.isArray(mySet),
//             Array.isArray(a1), Array.isArray(a2)
//         );
//         console.log(typeof(mySet), typeof(a1))

//     }

//     button_2.onclick = () => {

//         function iArray(param) {
//             console.log(param);
//             console.log(`Is the param an array?`)
//             try {
//                 param.push('new elem');
//                 console.log(`Param is array`)
//              }
//              catch (param) {
//                console.log(`Error. Param is not an array`);
//              }
//         }
        
//         iArray(a1);
//         iArray(mySet);
//         iArray(str);
//         iArray([]);
//         iArray({})

//     }

//     button_3.onclick = () => {
//         let param = a4;
//         console.log(param);
//         square = (a) => a**2;
//         param.reduce((accum, item,) => console.log(accum, item), 'str');   
//     }

// }

// function pageEvents__mass__06() {

//     button_1.onclick = () => {

//         console.log(a1);
//         a1_even = a1.filter(element => (element%2 == 0));
//         console.log(a1_even)
//     }

//     button_2.onclick = () => {

//         console.log(a1);
//         a1_evenIndex = a1.filter(element => (a1.indexOf(element)%2 == 0));
//         console.log(a1_evenIndex)
//     }

//     button_3.onclick = () => {
        
//         console.log(a1);
//         let a1_indexes = [];
//         let a1_moreThan = a1.filter(element => (element > 4));
//         console.log(a1_moreThan);
//         for (let i = 0; i < a1_moreThan.length; i++) {

//             a1_indexes.push(a1.indexOf(a1_moreThan[i]));
//         }
        
//         // console.log(a1.indexOf(a1_moreThan[1]));
//         console.log(a1_indexes)
//     }

// }

    // function pageEvents__mass__04() {

    //     button_1.onclick = () => {
    //         console.log(a1);
    //         a1.unshift(input_1.value);
    //         console.log(a1);
    //         return a1
    //     }

    //     button_2.onclick = () => {
    //         console.log(a2);
    //         a2.unshift(+input_2.value, (+input_2.value)**3);
    //         console.log(a2);
    //     }

    //     button_3.onclick = () => {
    //         console.log(a2);
    //         console.log(a2.unshift(+input_3.value));
    //         console.log(a2)
    //     }
    // }

// function pageEvents__mass__03() {

//     let a1 = ['hello', 'hi', '3333', '!@#$%^&*', 'Nothing else'];
//     let a2 = [34, 23, -34, 65, 3, -17];

//     button_1.onclick = () => {
//         console.log(a1);
//         a1.push(String(input_1.value));
//         console.log(a1)
//     }

//     button_2.onclick = () => {
//         console.log(a2);
//         a2.push(+(input_2.value), +((input_2.value**3)));
//         console.log(a2);
//     }

//     button_3.onclick = () => {
//         console.log(a2);
//         let value = input_3.value;
//         console.log(a2.push(value));
//     }
// }

// function pageEvents__mass__02() {

//     let a1 = [34, 23, -34, 65, 3, -17];
//     let a2 = [34, -5, 10, 1, -91, 54, 8];
//     let a3 = [[10, 20, 30], [11, 12, 13], [-3, 0, 7], a1, [], a2]

//     console.log('a1 =', a1)
//     console.log('a2 =', a2)
//     console.log('a3 =', a3)

//     button_1.onclick = () => {

//         let val = +input_1.value;

//         if (
//             (input_1.value.trim() == '')
//             || (typeof(val) != 'number')
//             || (Number.isNaN(val))
//             )
            
//             return out_1.textContent = 'There\'s wrong value in the input\'s form';

//         console.log(val);
//         console.log(a1)
//         return out_1.textContent = (a1.includes(val) == true);
//     }

//     button_2.onclick = () => {

//         let val = +input_2.value;

//         if (
//             (input_2.value.trim() == '')
//             || (typeof(val) != 'number')
//             || (Number.isNaN(val))
//             )

//             return out_2.textContent = 'There\'s wrong value in the input\'s form';

//         let i = 0;
//         if (a2.includes(val)) {
//             a2.forEach((elem, index) => {
//                 if(a2[i] == val) return out_2.textContent = (`a2[${i}] = ${val}`);
//                 else i++; 
//             })
//         }
//         else return out_2.textContent = a2.includes(val)

//     }

//     button_3.onclick = () => {

//         let val = +input_3.value;

//         if (
//             (input_3.value.trim() == '')
//             || (typeof(val) != 'number')
//             || (Number.isNaN(val))
//             )
            
//             return out_3.textContent = 'There\'s wrong value in the input\'s form';

//         let i = 0;
//         a3.forEach((elem, index) => {
//         if (a3[i].includes(val)) {
//             let k = 0;
//             a3[i].forEach((elem, index) => {
//                 if(a3[i][k] == val) return out_3.textContent = (`a3[${i}][${k}] = ${val}`);
//                 else k++
//             })
//         }
//         else out_3.textContent = a3[i].includes(val), i++;

//         });

//     }

// }

// function pageEvents__mass__01() {
//     let a1 = [34, 23, -34, 65, 3, -17];
//     let a2 = [34, -5, 10, 1, -91, 54, 8];

//     button_1.onclick = () => {
//         let val = +input_1.value;
//         console.log(a1);
//         console.log(val);
//         out_1.textContent = a1.indexOf(val);
//     }

//     button_2.onclick = () => {
//         let val = +input_2.value;
//         console.log(a2);
//         console.log(val);
//         if (a2.indexOf(val) != -1) out_2.textContent = a2.indexOf(val);
//         else out_2.textContent = false;
//     }

//     button_3.onclick = () => {
//         let val = +input_3.value;
//         console.log(a1);
//         console.log(val);
//         if (a1.indexOf(val) != -1) out_3.textContent = true;
//         else out_3.textContent = false;
//     }
// }

// function pageEvents__funcs__12() {

//     window.addEventListener('load',
//         function (event) {
//             let widthSize = 75;
//             let heightSize = 40;
//             let hideFirst = hide();
            
//             function hide(){
//                 let count = 0;
//                 console.log('The first hide-function is running...');
//                 return function() {
//                     console.log('The second hide-function is running...')
//                     count += 1;
//                     return out_3.textContent = count;
//                 }
//             }

//             button_1.onclick = () => {
//                 widthSize += 5;
//                 out_1.style.width = widthSize + 'px';
//             }

//             button_2.onclick = () => {
//                 heightSize += 5;
//                 out_1.style.height = heightSize + 'px';
//             }

//             button_3.onclick = () => hideFirst();
//         });

// }

// function pageEvents__funcs__10() {

//     function getRandomInt(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max) + 1;
//         return Math.floor(Math.random() * (max - min) + min); // Максимум не включается, минимум включается
//     }

//     button_1.onclick = () => {

//     let n = Math.round(+input_1.value);
//     let val = '';

//     function r1() {

//         val += n + ' ';
//         console.log('n =', n);
//         console.log('val =', val);
//         if (n > 0 ) {
//             n--;
//             r1();
//         }
//         else if (n < 0) {
//             n++;
//             r1();
//         }
//         else return;
//         out_1.textContent = val;
//         }

//     r1();

//     }

//     button_2.onclick = () => {

//         let n = Math.round(+input_2.value);
//         let val = '';
    
//         function r1() {
    
//             val += n + ' ';
//             console.log('n =', n);
//             console.log('val =', val);
//             if (n > 2 ) {
//                 n = n - 2;
//                 r1();
//             }
//             else if (n < -2) {
//                 n = n + 2;
//                 r1();
//             }
//             else n = 0;
//             out_2.textContent = val + ' ' + 0;
//             return;
//             }
    
//         r1();
    
//     }

//     button_3.onclick = () => {

//         let arg = input_3.value;
//         let req; 
//         if (arg == 'even') req = true;
//         else if (arg == 'odd') req = false;
//         else {return out_3.textContent = 'There is wrong argument entered. Enter the argument again'};
//         let parity;
    
//         function r3() {
    
//             let num = getRandomInt(0, 100);
//             if (num%2 == 0) parity = true; else parity = false;
//             if (req == parity) out_3.textContent = num; else out_3.textContent = num + 1;  
//             let obj = 
//             {'запрос' : req,
//             'случайное число' : num,
//             'чётность' : parity
//             }
//             console.table(obj);
//         }

//         function req3() {
//             let num = getRandomInt(0, 100);
//             if (num%2 == 0) parity = true; else parity = false;
//             let corr = (req == parity);
//             if (corr == true) descr = 'The cycle completed.'; else descr = 'The cycle continues...'
//             let obj = 
//             {'запрос' : req,
//             'случайное число' : num,
//             'чётность' : parity,
//             'соотвестствие' : corr,
//             'описание' : descr
//             }
//             console.table(obj);
//             if (req == parity) {return out_3.textContent = num} else req3();
//         }

//         req3();

//     }

// }

// function pageEvents__funcs__08() {

//     button_1.onclick = () => {
//         let a = +input_1.value;
//         let b = +input_2.value;
//         if (a < b) true; else [a, b] = [b, a];
//         let variable = a, sum = variable;
//         console.log('The first number is', variable)
//         while (variable < b) {
//             variable++;
//             console.log('variable =', variable);
//             sum = sum + variable;
//             console.log('sum =', sum);
//         }
//         out_1.textContent = sum;
//     }

//     console.log('--------Task 02---------')
//     console.log('Please, input two parameters of function in the forms for the first and the secoond tasks. b-2 to perform.')

//     button_2.onclick = () => {
//         let a = +input_1.value;
//         let b = +input_2.value;
//         max = Math.max(a,b);
//         out_2.textContent = max;

//     }

//     console.log('--------Task 03---------')
//     console.log('Please, input three parameters of function in the forms for the first, second and the third tasks. b-3 to perform.')
    
//     let x = +input_1.value;
//     let y = +input_2.value;
//     let z = +input_3.value;

//     button_3.onclick = (a, b, c) => {
//         // let x = +input_1.value;
//         // let y = +input_2.value;
//         // let z = +input_3.value;
//         // a = x, b = y, c = z;
//         a = 1, b = 0, c = 3;
//         if (b != 0 ) out_3.textContent = ('a/b = ' + a/b );
//         else out_3.textContent = c;
//     }


// }

// function pageEvents__funcs__06() {

//     let count = 0;

//     function f1() {
//         console.log(count);
//         console.log(this);
//         this.textContent = 'Hello';

//     }

//     // f1.call(out_1);
    
//     button_2.onclick = () => {
//         f1.call(out_2);
//     }

//     function max(a,b) {
//         if (a > b) this.textContent = a;
//         else this.textContent = b
//     }

//     max.call(out_3, 9, 8)
// }

// function pageEvents__funcs__05() {
//     console.log('--------Task 01---------')
//     console.log('Button 1 to perform, out-1 for out.');
//     let a = [-1, 'hello', 2, 'hi', -3, true, NaN, 4, -5];
//     function callMeOne () {
//         let b = a.map (function callBack1(x) {return x*x*x})
//         return b
//     }

//     button_1.onclick = () => {
//         out_1.textContent = callMeOne()
//     }

//     console.log('--------Task 02---------')
//     console.log('Button 2 to perform, out-2 for out.');
//     function callMeTwo () {
//         let b = a.map (x => x*x*x)
//         return b
//     }

//     button_2.onclick = () => {
//         out_2.textContent = callMeTwo()
//     }

//     console.log('--------Task 03---------')
//     console.log('Button 3 to perform, out-3 for out.');
//     function callMeThree () {
//         let b = a.filter (x => (typeof(x) == 'number'))
//         return b
//     }

//     button_check.onclick = () => console.log(callMeThree())

//     button_3.onclick = () => {
//         out_3.textContent = callMeThree()
//     }
    
// }

// function pageEvents__funcs__03() {
//     console.log('--------Task 01---------')
//     console.log('Please, enter arguments for the function into the two forms. Button 1 to perform.')
    
//     function sum(a,b) {
//         return a + b
//     }
//     button_1.onclick = (a,b) => {
//         let x = parseInt(input_1.value);
//         let y = parseInt(input_2.value);
//         out_1.textContent = sum(x,y)
//     }

//     console.log('--------Task 02---------')
//     console.log('Please, enter arguments for the function into the two forms. Button 2 to perform.')

//     function biggest(a,b) {
//         if (a >b ) return a
//         else return b
//     }
//     button_2.onclick = (a,b) => {
//         let x = parseInt(input_1.value);
//         let y = parseInt(input_2.value);
//         out_1.textContent = biggest(x,y)
//     }

//     console.log('--------Task 03---------')
//     console.log('Button 2 to perform, out-3 for out')

//     checkFun = () => { if (checkbox.checked == true) return checkbox.value; else return false}

//     button_check.onclick = () => console.log(checkFun())

//     button_3.onclick = () => { out_3.textContent = checkFun() }
// }

// function pageEvents__funcs__02() {

//     function getRandomInt(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max) + 1;
//         return Math.floor(Math.random() * (max - min) + min); // Максимум не включается, минимум включается
//     }

//     button_1.onclick = (x, y) =>  {
//         x = input_1.value;
//         y = input_2.value;
//         out_1.textContent = getRandomInt(x,y);
//     }

//     button_2.onclick = (x, y, z) =>  {
//         x = input_1.value;
//         y = input_2.value;
//         z = input_3.value;
//         document.querySelector(`.` + `${z}`).textContent = getRandomInt(x,y);
//     }

//     button_3.onclick = (x, y) =>  {
//         if ((input_1.value != '') && (input_2.value != '')) {
//             out_3.textContent = getRandomInt(input_1.value, input_2.value);
//         } else out_3.textContent = getRandomInt(0, 100);
//     }

//     button_check.onclick = () => {
//         out_1.textContent = checkbox.checked;
//     }


// }

// function pageEvents__funcs__01() {
//     function getRandomInt(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min) + min); // Максимум не включается, минимум включается
//     }

//     button_1.onclick = () =>  {
//         out_1.textContent = getRandomInt(117, 132);
//     }

//     console.log ('Please input min-max numbers in HTML-forms for the first and the second tasks')
//     button_2.onclick = () =>  {
//         let minim = parseInt(input_1.value);
//         let maxim = parseInt(input_2.value);
//         out_2.textContent = getRandomInt(minim, maxim);
//     }

//     function hello() {}; function e2021() {};

// }

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