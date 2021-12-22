const favCats = ['Luke', 'Megan', 'Voids'];

let myFavoriteCats = 'My cats are called ';

for (let i = 0; i < favCats.length; i++) {
  if (i === favCats.length - 1) {   // end of the array
    myFavoriteCats = `${myFavoriteCats}and ${favCats[i]}.`
  } else {
    myFavoriteCats = `${myFavoriteCats}${favCats[i]}, `
  }
}

console.log(myFavoriteCats);  