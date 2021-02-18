let nav = document.getElementById('navigation');
let liens = document.getElementById('liensNav');
let icon = document.getElementById('icon');

window.onscroll = function (){

if(document.documentElement.scrollTop > 980){
    nav.style.background = "#373737";
    liens[0] = "white";
    liens[1] = "white";
    liens[2] = "white";
    liens[3] = "white";
}else{
    nav.style.backgroundImage = 'linear-gradient(to right, #373737, #c0b283)'
}


}
