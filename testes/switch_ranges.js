/* Grade of 90 and above is an A
Grade of 80 to 89 is a B
Grade of 70 to 79 is a C
Grade of 60 to 69 is a D
Grade of 59 or below is an F */ 

const grade = 54; 

switch (true) {

    case grade >=90:
        console.log("Grade A");
        break;
    case grade >=80:
        console.log("Grade B"); 
        break;
    case grade >=70:
        console.log("Grade C"); 
        break;
    case grade >=60:
        console.log("Grade D"); 
        break;

    default:
        console.log ("Grade press F to pay respects");
}