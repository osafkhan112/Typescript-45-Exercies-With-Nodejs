let userNames = ["Raza", "Admin", "Talha", "Shabbir", "Anas"];

userNames = [];

if (userNames.length === 0){
   console.log("Your Array in Empty we need to find some users!")
}else{
    // Using ForEach Loop on Array

    userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, Would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, Thank you for logging in again.`)
    }
})
}