var firebaseConfig = {
  apiKey: "AIzaSyBLGHmqOQ9bJzPqO08Lf1mBjDFes30uYh8",
  authDomain: "lets-chat-web-app-6fadf.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-6fadf-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-6fadf",
  storageBucket: "lets-chat-web-app-6fadf.appspot.com",
  messagingSenderId: "423106441765",
  appId: "1:423106441765:web:b40d39d10df66cc2d805cc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome" + " " + user_name + "!";

function addRoom(){
  room_name = document.getElementById("room_name").value;
  console.log(room_name);

  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });

  localStorage.setItem("room_name" , room_name);

  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;

row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += row;

});});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
