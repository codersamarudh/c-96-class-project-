
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyArrQmoiQcTRpRn7R0FRHpy_xrDUCYdLcY",
      authDomain: "kwitter-webapp-2-441a8.firebaseapp.com",
      projectId: "kwitter-webapp-2-441a8",
      storageBucket: "kwitter-webapp-2-441a8.appspot.com",
      messagingSenderId: "635407859763",
      appId: "1:635407859763:web:2044af4c607dd1359c2346",
      measurementId: "G-P2CR4DN4R0"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
// Your web app's Firebase configuration

    // Initialize Firebase
   


      //Start code

      //End code
      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
 console.log("Room Name - " + Room_names);
 row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+= row;
       //End code
       });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}


