
var firebaseConfig = {
      apiKey: "AIzaSyAmA5FFbuXtVz3Lwv4w_4mEoMivx5NOVqY",
      authDomain: "let-s-chat-81f2d.firebaseapp.com",
      databaseURL: "https://let-s-chat-81f2d-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-81f2d",
      storageBucket: "let-s-chat-81f2d.appspot.com",
      messagingSenderId: "262535368727",
      appId: "1:262535368727:web:15eff4623395ac197d4c52",
      measurementId: "G-GYM75TFDQ3"
    };
    
 firebase.initializeApp(firebaseConfig);

 function getName(){
      heading=localStorage.getItem("user_name");
      document.getElementById("update").innerHTML="<h1>Hi  " + heading +" !!</h1>";
  }

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
      
getData();

