var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array of Countries and Print its Orginal Order
var countriesToVisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Orginal Order:", countriesToVisit);
// Print the Array in Alphabetical Order Without modifying the Actual Array List
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// Show that the Array is still in its Orginal order
console.log("Still in Orginal Order:", countriesToVisit);
// Print the Array in Reversed Order without modifying the Actual Array List
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
// Show that the Array is still in its Orginal order
console.log("Still in Orginal Order:", countriesToVisit);
// We have Changed the Orginal Array Order Now
console.log("Orginal Array Reversed:", countriesToVisit.reverse());
// Print the array to show that it's back to orginal order
console.log("Back to Orginal Order:", countriesToVisit.reverse());
// Print the array to show that it's order has been changed in alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
// We have Changed again the Orginal Array Order Now in reversed order again
console.log("Orginal Array Reversed again:", countriesToVisit.reverse());
