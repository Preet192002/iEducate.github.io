 burger=document.querySelector('.burger')
 navbar=document.querySelector('.navbar')
 navlist=document.querySelector('.nav-list')
 rightNav=document.querySelector('.rightNav')


burger.addEventListener('click', ()=>{
        rightNav.classList.toggle('vNav');
        navlist.classList.toggle('vNav');
        navbar.classList.toggle('h-nav');

})