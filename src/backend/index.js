const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');

function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function(){
    const linksId = document.querySelector('li a');
    
    linksId.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if(targetElement) {
                window.scrollTo({
                    top:targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

});

window.addEventListener('scroll', function(){
    const scrollPosition = this.window.scrollY;

    if(scrollPosition > 300 && this.window.innerWidth > 1020) {
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    }
});


btnMenu.addEventListener('click',()=>{
    menu.classList.add('open-menu');
});

menu.addEventListener('click', ()=>{
    menu.classList.remove('open-menu')
});

overlay.addEventListener('click', ()=>{
    menu.classList.remove('open-menu')
});