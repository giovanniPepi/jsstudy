const day = new Date().getDay();

switch (day) {
    case 0:
        console.log("It's Sunday!");
        break;
    case 1: 
        console.log("I's Monday. Hold on tight.");
        break;
    case 2: 
        console.log("It's Tuesday. Dominos would like a word.");
        break;
    case 3: 
        console.log("It's Wednesday, my dudes!");
        break;
    case 4:
        console.log("It's Thursday. The weekend airs are starting to come through.");
        break;
    case 5:
        console.log("It's FRIDAY!");
        break;
    case 6: 
        console.log("It's Saturday! Time to enjoy.");
        break;
    default:
        console.log("WTF is this day? The developer os this software must be crazy. Contact him.");
}