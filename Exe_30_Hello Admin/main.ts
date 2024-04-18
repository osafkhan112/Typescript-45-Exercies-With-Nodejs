// Creating a Array
let userNames = ["Raza", "Admin", "Talha", "Shabbir", "Anas"];

// Using ForEach Loop on Array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, Would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, Thank you for logging in again.`)
    }
})