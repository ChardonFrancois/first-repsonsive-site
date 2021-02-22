let nav = document.getElementById('navigation');
let liens = document.getElementById('liensNav');
let icon = document.getElementById('icon');

window.onscroll = function (){

if(document.documentElement.scrollTop > 1800){
    nav.style.backgroundImage = 'linear-gradient(to left, #373737, #c0b283)';
    
}else{
    nav.style.backgroundImage = 'linear-gradient(to right, #373737, #c0b283)';
}
}

function toggleNav(){
    if(nav.className === " "){
        nav.className += "responsive"
    }else{
        nav.className = " ";
    }
}

$('html').click(function (){

    if(nav.className =+ 'responsive'){
        nav.className = " ";
    }

})
$('#icon').click(function (event){
    event.stopPropagation();
})

/*Smooth scroll*/

$('#arrow').click(function (){
    $('html,body').animate({
        scrollTop: $('#section-about').offset().top -50
    },
    'slow')
})

$('.liensNav:nth-child(1)').click(function (){
    $('html,body').animate({
        scrollTop: $('#accueil').offset().top +50
    },
    'slow')
})

$('.liensNav:nth-child(2)').click(function (){
    $('html,body').animate({
        scrollTop: $('#valeurs').offset().top -50
    },
    'slow')
})

$('.liensNav:nth-child(3)').click(function (){
    $('html,body').animate({
        scrollTop: $('#tarifs').offset().top -50
    },
    'slow')
})

$('.liensNav:nth-child(4)').click(function (){
    $('html,body').animate({
        scrollTop: $('#contact').offset().top -50
    },
    'slow')
})
