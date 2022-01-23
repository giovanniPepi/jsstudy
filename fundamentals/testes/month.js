const month = new Date().getMonth();

/* getMonth() outputs 0-11, with 0 being January and 11 being December */

switch (month) {
    case 0:
    case 1:
    case 2:
        console.log("Summer");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Fall");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Winter");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Spring");
        break;
    
    default: ("Possible bug found, contact developer.");
}