const goodCats = ['luke', 'luke2', 'luke3'];

let myFavCats = 'My favorite cats are: ';

let i = 0;

while (i < goodCats.length) {
    if (i === goodCats.length -1) {    
        myFavCats += `and ${goodCats[i]}. `;
    } else {
        myFavCats += `${goodCats[i]}, `;
    } 
    i++;
}

console.log(myFavCats);

// using a do ... while

const goodCats2 = ['luke', 'luke2', 'luke3'];
let myFavCats2 = 'My favorite cats are: ';
let i2 = 0;

do {
    if (i2 === goodCats2.length - 1) {
        myFavCats2 += `and ${goodCats2[i2]}.`;
    } else {
        myFavCats2 += `${goodCats2[i2]}, `;
    }
    i2++;
} while (i2 < goodCats2.length);

console.log(myFavCats2);