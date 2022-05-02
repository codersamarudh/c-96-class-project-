//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyArrQmoiQcTRpRn7R0FRHpy_xrDUCYdLcY",
      authDomain: "kwitter-webapp-2-441a8.firebaseapp.com",
      projectId: "kwitter-webapp-2-441a8",
      storageBucket: "kwitter-webapp-2-441a8.appspot.com",
      messagingSenderId: "635407859763",
      appId: "1:635407859763:web:2044af4c607dd1359c2346",
      measurementId: "G-P2CR4DN4R0"
    };
    firebase.initializeApp(firebaseConfig);
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
}
