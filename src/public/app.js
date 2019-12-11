//Responsive menu
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const  logo = document.querySelector('.logo');

logo.addEventListener('click', function(){
    window.scroll(0, 0);
})

toggle.addEventListener('click', function(){
    menu.classList.toggle('active');
    //cambiar icono con el toggle
    if(menu.classList.contains('active')) {
        toggle.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        toggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
});


/*Map setup
const map = L.map('map').setView([-34.711864, -58.281308], 14);
const marker = L.marker([-34.711864, -58.281308]).addTo(map);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: '',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibmFjaG9zYW5jaGV6IiwiYSI6ImNrMmVhZ3QxODA3aHUzbWw2c2dveHJ2bDYifQ.yYqjflGNcT7r0tMOlNZ_rg'
}).addTo(map);

/*
window.onscroll = function(){
    const nav = document.querySelector("nav");
    
    if(window.pageYOffset > 3390.111083984375){
       nav.classList.add('contact-nav')
    } else {
        nav.classList.remove('contact-nav')
    }
}*/