// Making a Array of Countries and Print its Orginal Order
let countriesToVisit: string[] = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Orginal Order:", countriesToVisit);

// Print the Array in Alphabetical Order Without modifying the Actual Array List
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// Show that the Array is still in its Orginal order
console.log("Still in Orginal Order:", countriesToVisit);

// Print the Array in Reversed Order without modifying the Actual Array List
console.log("Reverse Order:", [...countriesToVisit].reverse());

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