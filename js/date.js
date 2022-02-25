'use strict'
let d = new Date();
console.log(d.toDateString());

let bd = new Date("2023-feb-03");
let dagen = Math.floor((bd - d) / (1000*60*60*24)+1);
console.log(`Nog ${dagen} dagen en dan is het feest!` );