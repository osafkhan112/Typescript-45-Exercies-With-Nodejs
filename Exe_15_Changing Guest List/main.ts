let guestList = ["Talha","Raza","Anas","Shabbir"];

let dontCome = guestList[3];

console.log(dontCome, "Can not Come");

guestList.splice(3, 3, "Hamza");

guestList.forEach(guest => console.log(`Salam ${guest}, would u like dinner to me?`));