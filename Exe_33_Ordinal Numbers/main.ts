// Creating a Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

// Using For-Loop
for (let oneNumber of numbers){
    let ordianlEnding: string;

    if (oneNumber === 1){
        ordianlEnding = "st"
    }else if (oneNumber === 2){
        ordianlEnding = "nd"
    }
    else if (oneNumber === 3){
        ordianlEnding = "rd"
    }
    else{
        ordianlEnding = "th"
    }

    console.log(`${oneNumber}${ordianlEnding}`);
}
