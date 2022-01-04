const inptString = document.querySelector("#longString");
const resultLongString = document.querySelector("#longStringResult");
const inptStringBtn = document.querySelector("#longButton");

function longString () {
    let long = '';
    let args = [].slice.call(arguments); /*turns pseudotype arg to real array*/;
    for (let i = 0; i < args.length; i++) {
        if (args[i].length > long.length) {
            long = args[i];
        }
    }
    resultLongString.textContent += long;
};

inptStringBtn.addEventListener('click', function () {
    const inptTxt = inptString.value.split(",");
    longString(...inptTxt); /* spread operator pass argument as str, otherwise would pass an array */
});

