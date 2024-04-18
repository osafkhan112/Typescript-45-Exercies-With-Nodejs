// Array Of Current Users
var current_users = ["Talha", "shabbir", "Anas", "Esha", "Mehak"];
// Array Of New Users
var new_users = ["Hamza", "Raza", "Shabbir", "Mahad", "Anas"];
// Loop through new_users to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    // Making a Condition for Username Already Exist And Save In Our_Condition Variable 
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Different Messages Using If_Else Statments
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
