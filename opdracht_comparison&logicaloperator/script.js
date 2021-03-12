const myAge = 40; 
const isFemale = true;
const driverStatus = "soe"; 
const firstName = "bram";

if (myAge >= 18) {

    if (isFemale) {
        console.log("Welcome to our club!");
        console.log("welcome to our ladiesnight");

        if (driverStatus == "bob"){
            console.log("Your status is bob and you may drive");

            if (myAge >=18 && myAge <25) {
                console.log("you will receive 50% discount");
                
                if (firstName === "sarah" || firstName === "bram") {
                    console.log("you will get one free beer");
                
                }
                else {
                    console.log("you will not reveice a beer");
                }

            } 
            else {
                console.log("you don't a discount");
            }
        }
        else {
            console.log("Your are not the bob so you may not drive");
        }
    }
    else {
        console.log("Sorry it's Ladies night you are not allowed");
    }
}    
else {
    console.log("Sorry you are too young and not allowed to enter our club!");
} 

const totalAmount = 5;

if (totalAmount >25 && totalAmount <51) {
    console.log("you will get free (vega)bitterballen");

} else if (totalAmount >50 && totalAmount <101) {
        console.log("you will get a portion nachos for free");

} else if (totalAmount >100) {
            console.log("you will get a free bottle of chamgepagne");

} else {
    console.log("you will get nothing");
}