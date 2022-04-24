const Navbt = document.querySelector('.nav-btn');
const NavItems = document.querySelector('.na-items');
const naItems = document.querySelectorAll('.n-items');


naItems.forEach(item => {
    item.addEventListener('click',()=>{
        NavItems.classList.remove('open')
    })
});

Navbt.addEventListener('click',()=>{
    NavItems.classList.toggle('open')

} )





// owl carousel for products

$(".bx.owl-carousel").owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    animateIn: 'flipInX',
    autoplay:true,
     responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            },
           
            1500:{
                items:5
            }
        }

})

// owl carousel for testimony

$("#testimony .owl-carousel").owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    animateIn: 'flipInX',
    autoplay:false,
     responsive:{
            0:{
                items:1
            }
            
        }

})