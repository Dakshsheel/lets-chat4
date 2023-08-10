var firebaseConfig = {
    apiKey: "AIzaSyDlG7XETrz6zEMQsq7gsVZIVGLQo2nSWrg",
    authDomain: "kwitter-a295d.firebaseapp.com",
    databaseURL: "https://kwitter-a295d-default-rtdb.firebaseio.com",
    projectId: "kwitter-a295d",
    storageBucket: "kwitter-a295d.appspot.com",
    messagingSenderId: "448715756161",
    appId: "1:448715756161:web:7eeb8e88b425862d3c7380"
  };
  
 
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

       
       }



     });  }); }
getData();


function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}