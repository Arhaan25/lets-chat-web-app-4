var firebaseConfig = {
    apiKey: "AIzaSyCWa0exfSQzH-7RcCrnXfoTMiQlQpsv3NQ",
    authDomain: "lets-chat-web-app-b8cc6.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-b8cc6-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-b8cc6",
    storageBucket: "lets-chat-web-app-b8cc6.appspot.com",
    messagingSenderId: "183638284916",
    appId: "1:183638284916:web:92e2b8ba8458b7e4170f21"
  };
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

function addRoom() {
     room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({ purpose : "adding room name"});
     localStorage.setItem("room_name", name);
     window.location = "chat_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
             document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class= 'room_name' id=" + Room_names + "onclick= 'redirectToRoomName(this.id)' >#" + Room_names;
                  document.getElementById("output").innerHTML += row;
             });
    });
}
getData();

function redirectToRoomName(name) {
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location = "chat_page.html";
}

function logout() {
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location = "index.html"
}