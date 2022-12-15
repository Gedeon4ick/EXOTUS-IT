"use strict";

const arr = [1, 2, 'a', 'b'];

function filterList(item) {
    let arr2 = [];
    item.forEach(element => {
      if (typeof element == 'number') {
        arr2.push(element);
      } 
    });
    return arr2;
}
console.log(filterList(arr));

function hyi(arr) {
    return arr.filter(element  => Number.isInteger(element));
}

console.log(hyi(arr));