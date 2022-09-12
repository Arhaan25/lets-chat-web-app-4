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
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name : user_name,
        message : msg,
        like: 0
    });
}
