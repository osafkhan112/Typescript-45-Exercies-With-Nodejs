// Creating a Array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// Using For-Loop
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var oneNumber = numbers_1[_i];
    var ordianlEnding = void 0;
    if (oneNumber === 1) {
        ordianlEnding = "st";
    }
    else if (oneNumber === 2) {
        ordianlEnding = "nd";
    }
    else if (oneNumber === 3) {
        ordianlEnding = "rd";
    }
    else {
        ordianlEnding = "th";
    }
    console.log("".concat(oneNumber).concat(ordianlEnding));
}
