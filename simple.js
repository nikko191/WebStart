const input_1 = document.querySelector('.i-1');
const input_3 = document.querySelector('.i-3');
// const button_1 = document.querySelector('.b-1');
const button_2 = document.querySelector('.b-2');
const button_3 = document.querySelector('.b-3');
// const button_clear = document.querySelector('.b-clear');
// const out_1 = document.querySelector('.out-1');
const out_2 = document.querySelector('.out-1');
// const out_3 = document.querySelector('.out-1');

let s2 = new Set();
let a = []; let i = 0;
let elem = '';

button_2.onclick = function f2() {
    a[i] = document.querySelector('.i-1').value;
    console.log(`a[${i}] = ${a[i]}`);
    s2.add(a[i]);
    console.log(s2);
    i++;
    input_1.value = '';
}

button_3.onclick = function f3() {
    elem = document.querySelector('.i-3').value;
    for (let item of s2) {
        if (elem == item) {
                s2.delete(item);
        }
    }

    console.log(s2);
    input_3.value = '';
}


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