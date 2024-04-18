"use strict";
// Making a Function
function make_shirt(size = "Large", printMessage = "I Love Typescript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} print on shirt`);
}
// Calling function with by-defualt values 
make_shirt();
// Calling function now with medium size and defualt message
make_shirt("Medium");
// Calling a function now with small size and also different print message
make_shirt("Small", "I Love Javascript");
