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




const sections = document.querySelectorAll('.sect')


 function scrollActive(){
     const scrollY = window.pageYOffset
  
     sections.forEach(current =>{
         const sectionHeight = current.offsetHeight 
         const sectionTop = current.offsetTop - 100;
         sectionId = current.getAttribute('id')
         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.cont a[href*=' + sectionId + ']').classList.add('active')
         }else{
           document.querySelector('.cont a[href*=' + sectionId + ']').classList.remove('active')
       }
     })
 }
 window.addEventListener('scroll', scrollActive)