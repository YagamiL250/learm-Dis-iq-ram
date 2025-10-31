const delayBeforeScrollDown = 500; //ตอนลง
const delayBeforeScrollUp = 1000;  //ตอนขึ้น

window.onload= function () {
    setTimeout(() => {
        document.getElementById("blockTREE").scrollIntoView({ behavior: "smooth"});        
    }, delayBeforeScrollDown);

    setTimeout(() => {
        document.getElementById("blockONE").scrollIntoView({ behavior: "smooth"});
    },delayBeforeScrollDown + delayBeforeScrollUp);
};

const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 70;

document.querySelectorAll('a.nav-link[href^="#"]').forEach(link=>{
    link.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(!target) return;
        const top = target.getBoundingClientRect().top + window.scrollY + navHeight + 6;
        window.scrollTo({ top, behavior: 'smooth' });
        document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
        this.classList.add('active')
    });
});