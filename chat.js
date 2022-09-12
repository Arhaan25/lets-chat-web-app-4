// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCWa0exfSQzH-7RcCrnXfoTMiQlQpsv3NQ",
    authDomain: "lets-chat-web-app-b8cc6.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-b8cc6-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-b8cc6",
    storageBucket: "lets-chat-web-app-b8cc6.appspot.com",
    messagingSenderId: "183638284916",
    appId: "1:183638284916:web:92e2b8ba8458b7e4170f21"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);
    
    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html"
}



