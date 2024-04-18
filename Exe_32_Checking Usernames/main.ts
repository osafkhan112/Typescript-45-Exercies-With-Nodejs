// Array Of Current Users
let current_users = ["Talha", "shabbir", "Anas", "Esha", "Mehak"]

// Array Of New Users
let new_users = ["Hamza", "Raza", "Shabbir", "Mahad", "Anas"]

// Loop through new_users to check for usernames avaibility

new_users.forEach(new_one_user => {

    // Making a Condition for Username Already Exist And Save In Our_Condition Variable 
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    // Print Different Messages Using If_Else Statments
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This Username ${new_one_user} is available`)
    }
})