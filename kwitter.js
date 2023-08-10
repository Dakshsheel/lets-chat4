function addUser(){
    user1 = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user1);

    window.location = "kwitter_room.html";

}