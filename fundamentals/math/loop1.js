const myArray1 = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
let list1 = '<ul>';

for (item1 of myArray1) {
    list1 += '<li>' + item1 + '</li>';
}

list1 +='</ul>';
document.getElementById('slideContainer').innerHTML = list1;

