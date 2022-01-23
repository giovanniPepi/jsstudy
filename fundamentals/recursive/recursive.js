let string = prompt("Please say something!");


downup(string);

function downup (string) {
    if ((string.length) == 1) {
        console.log(string);
    } else {
        console.log(string);
        downup (string.substring((string.length)-1, 0));
        console.log(string);
    }
}