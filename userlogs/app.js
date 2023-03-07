// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDHdFElcgAOzdgIGK-zalcmjvUuZlDpmMg ",
    authDomain: "radioskool-a5e26.firebaseapp.com ",
    databaseURL: "https://radioskool-a5e26-default-rtdb.firebaseio.com/",
    projectId: "radioskool-a5e26",
    storageBucket: "gs://radioskool-a5e26.appspot.com",
    messagingSenderId: " 891878324112 ",
    appId: "891878324112"
    };
    
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const database = firebase.database();
    
    function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Create new user
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    const user = userCredential.user;
    // Save user data to database
    database.ref('users/' + user.uid).set({
    email: user.email
    });
    alert("Signup successful!");
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    });
    }