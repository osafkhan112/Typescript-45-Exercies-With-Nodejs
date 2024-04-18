// Define a function to print each magician name from an array
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// Function to make magicians great through .map() it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Define an array containing magicians name 
let magician_names = ["Harry Potar", "Talha", "Shabbir"]

// Call make_great function to modify magicians name
let great_magicians = make_great(magician_names);

// Call show_magicians that show modified list of magicians
show_magicians(great_magicians);