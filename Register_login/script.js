//Object to store user details
let userDetailsDatabase = {};

//User details collection Function
function getUserDetails() {

    //User firstname collection
    let firstName = document.getElementById('firstname').value;

    userDetailsDatabase.firstname = firstName;

    //User lastname collection
    let lastName = document.getElementById('lastname').value;

    userDetailsDatabase.lastname = lastName;


    //Phone Number collection
    let phoneNumber = document.getElementById('phone').value;

    userDetailsDatabase.phone = phoneNumber;


    //Email Address collection
    let emailAddress = document.getElementById('email').value;

    userDetailsDatabase.email = emailAddress;


    //Gender collection
    let Gender = document.getElementById('gender').value;

    userDetailsDatabase.gender = Gender;


    //Date of Birth collection
    let dateOfBirth = document.getElementById('dob').value;

    userDetailsDatabase.dob = dateOfBirth;


    //Color collection
    let Color = document.getElementById('color').value;

    userDetailsDatabase.color = Color;

    for (let data in userDetailsDatabase) {
        if (userDetailsDatabase[data] != '') {
            if (userDetailsDatabase.firstname != '' && userDetailsDatabase.lastname != '' && userDetailsDatabase.phone != '' && userDetailsDatabase.email != '' && userDetailsDatabase.dob != '' && userDetailsDatabase.gender != '') {
                window.location.href = 'login.html';
            }
        }
    }
};


// Redirect to login page at successful signup
function handleClick() {
   let userData = getUserDetails();

    if (userData != null) {
        window.location.href='login.html' 
    } else {
        console.log('Error!');
    }
    // if (userDetailsDatabase == null) {
    //     return window.location.href = 'login.html'
    // }
}

const handleLogin = () => {
    const loginDetails = {};
    let email = document.getElementById('email').value;

    loginDetails.emailAddress = email;

    let pwd = document.getElementById('password').value;

    loginDetails.password = pwd;

    for (let element in loginDetails) {
        if (loginDetails[element] != '' && loginDetails[element] != null) {
            console.log("Worked!");
        }
    }
}