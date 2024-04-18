// Creating A Guest List Array
let GuestList = ["Talha","Razas","Anas","Shabbir"];

// Making A Variable For Those Who Cant Come
let DontCome = GuestList[0];

// Print The Name Of Guest Who Cant Come
console.log(DontCome, "Can not Come");

// Add Or Remove Value From Guest List Array
GuestList.splice(0, 1, "Hamza");

// Message Print For Bigger Table
console.log("Good News ! We Have Found a Bigger Table For a Dinner");

// Adding A New Guest At Starting Index Of Array 
GuestList.unshift("Ahsan");

// Adding A New Value At Ending Index Of Array
GuestList.push("Imran");

// Get A Middle Index Of Our Guest List Array
let MiddleIndex: number = Math.floor(GuestList.length / 2);

// Adding A New Guest To Middle Index Of Array
GuestList.splice(MiddleIndex, 0, "Osama");

// Print Message Of Updated List
console.log("Updated List Of Our Guests");

// Sending A Invitation Message To Our Guest One By One With Thier Names
GuestList.forEach(oneguest => console.log(`Salam ${oneguest}, Would You Like To Dinner With Me`));

// Inform That Only Two Guests Can Be Invited For Dinner
console.log("Unfortunately, The New Dinner Table Wont Arrive On Time, So I Can Only Invite Two Guest To Dinner With Me");

// Using While Loop To Remove Guests From The Array Until Only Two Name Remain
while(GuestList.length > 2) {
    let Removedguest = GuestList.pop();
    console.log(`Sorry, ${Removedguest} I Cant Invite You To Dinner`);
}
// Printing A Invitations To The Last Two Guest On The List 
console.log("Invitations To The Last 2Guests");
GuestList.forEach(lastTwo => console.log(`Luckly ${lastTwo}, You Are Still Invited To Dinner`));

// Removing Last Two Guest From The List
GuestList.pop();
GuestList.pop();

console.log("Empty List:",GuestList);