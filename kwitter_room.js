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
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function addRoom()
{
    room = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room);

    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    
    


   });});}
getData();
function redirectToRoomName(name)
{
console.log("name");
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}