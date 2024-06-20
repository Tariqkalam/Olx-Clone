// setting up firebase with our website
const firebaseApp = firebase.initializeApp({ 
  apiKey: "AIzaSyCgYgGHe5q7jDO1HLdLlX-aFLw99SkCB1s",
  authDomain: "signup-form-tk.firebaseapp.com",
  projectId: "signup-form-tk",
  storageBucket: "signup-form-tk.appspot.com",
  messagingSenderId: "346603841778",
  appId: "1:346603841778:web:b13c7b8e0d9d074befc86b"

});
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();

  //  sign up function
const signUp  =() => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email,password);

  // firebase code
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed Up 
    document.write("You are Signed Up");
    console.log(result);
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
    // ..
  });
}

// Sign in function
const signin = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // firebase code 
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
    document.write("You are Signed in");
    console.log(result);
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
  });
}