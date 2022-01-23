let capitalize = function (string) {
    let stringStart= string.substr(0, 1); 

    let stringCapitalize = stringStart.toUpperCase();

    let stringEnd = string.substring (1);

    let lowerStringEnd = stringEnd.toLowerCase();

    let finalString = stringCapitalize.concat(lowerStringEnd);
    return finalString;
   
}
