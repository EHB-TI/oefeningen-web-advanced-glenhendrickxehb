'use strict'

//Capitalization
let str = 'glen';
console.log(str.toUpperCase());

// Capitalization++
let str2 = '    glen hendrickx    ';
str2 = str2.trim(str2);

let arr = str2.split(' ');
if (arr.length > 1){
    for (let i = 0; i < arr.length; i++){
        let eersteTeken = arr[i].charAt(0);
        eersteTeken = eersteTeken.toUpperCase();
        let restWoord = arr[i].substring(1, arr[i].length);
        arr[i] = eersteTeken + restWoord;
    }
    console.log(arr);
} else {
    console.log('ongeldige input');
}

// Change it up

let zin = 'JS is the main focus of Web Essentials'
zin.replace('Essentials', 'Advanced');
console.log(zin);

// Travel much?

let landen ='Rusland, Oekraine, België, Verenigde staten van Amerika, Frankrijk, Duitsland';
let arrLanden = landen.split(', ');
let lengte = 0;
let langste = 0;
let langsteLand = "";
for (let i = 0; i < arrLanden.length; i++){
    let lengte = arrLanden[i].length;
    if (lengte > langste) {
        langste = lengte;
        langsteLand = arrLanden[i];
    }
}
console.log(`Het langste land in de lijst is: ${langsteLand}`);