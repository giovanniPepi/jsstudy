const inptString = document.querySelector("#longString");
const resultlongString = document.querySelector("#longStringResult");
const inptStringBtn = document.querySelector("#longButton");

function longString () {
    let long = '';
    let args = [].slice.call(arguments);
    for (let i = 0; i < args.length; i++) {
        if (args[i].length > long.length) {
            long = args[i];
        }
    }
    resultlongString.textContent += long;
};

inptStringBtn.addEventListener('click', function () {
    const inptTxt = inptString.value.split(",");
    longString(...inptTxt);
});

