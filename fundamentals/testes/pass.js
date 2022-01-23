    let userName = prompt ("Who's there?", '');

    if (userName === "Admin") {
        
        let pass = prompt("Please enter your password: ", ''); 
        
        if (pass === "TheMaster") {
            alert ("Welcome, admin!");
        }
        else if (pass === null || pass === '') {
            alert("Canceled");
        }
        else {
            alert ("Wrong password!");
        }
    }
    else if (userName === '' || userName === null) {
        alert("Canceled");
    }
    else {
        alert("I have never seen this person in my life before!")
    }
