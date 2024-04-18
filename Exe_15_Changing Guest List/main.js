var guestList = ["Talha", "Raza", "Anas", "Shabbir"];
var dontCome = guestList[3];
console.log(dontCome, "Can not Come");
guestList.splice(3, 3, "Hamza");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would u like dinner to me?")); });
