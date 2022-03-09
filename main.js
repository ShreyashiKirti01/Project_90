function addUser(){
player_name=document.getElementById("name_input").value;
player_password=document.getElementById("password_input").value;

localStorage.setItem("player_name", player_name);
localStorage.setItem("player_password", player_password);

window.location="game.html";
}