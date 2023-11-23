//onscroll
document.addEventListener('scroll', () =>{
    const nav = document.querySelector('.nav');
    
    if (window.scrollY > 0){
        nav.classList.add('scrolled');
    }else{
        nav.classList.remove('scrolled');
    }
});

//menu
const menu = document.querySelector("#menu");
const menuNav = document.querySelector("menu");
const list = document.querySelector("#li");
const list1 = document.querySelector("#li1");
const list2 = document.querySelector("#li2");
const list3 = document.querySelector("#li3");
const list4 = document.querySelector("#li4");
const list5 = document.querySelector("#li5")
const list6 = document.querySelector("#register");

menu.addEventListener("click", function(){
    menuNav.classList.add("menu-active");
});

const closeMenu = document.querySelector("#close-menu");
closeMenu.addEventListener("click", function(){
    menuNav.classList.remove("menu-active");
});

list.addEventListener("click", function(){
    menuNav.classList.remove("menu-active");
});
list1.addEventListener("click", function(){
    menuNav.classList.remove("menu-active");
});
list2.addEventListener("click", function(){
    menuNav.classList.remove("menu-active");
});
list3.addEventListener("click", function(){
    menuNav.classList.remove("menu-active");
});
list4.addEventListener("click", function(){
    menuNav.classList.remove("menu-active");
});
list5.addEventListener("click", function(){
    menuNav.classList.remove("menu-active");
});
list6.addEventListener("click", function(){
    menuNav.classList.remove("menu-active");
});

//sroll padding
const navigation = document.querySelector('.nav-link');
const navigationHeight = navigation.offsetHeight;
document.documentElement.style.setProperty(
    "--scroll-padding",
    navigationHeight + "px"
);

//testimonial
// var btn = document.getElementsByClassName("btnn");
// var slide = document.getElementById("slide");

// btn[0].onclick = function(){
//     slide.style.transform = "translateX(0px)";
//     for(i=0; i<4; i++){
//         btn[i].classList.remove("active");
//         this.classList.add("active")
//     }
// }
// btn[1].onclick = function(){
//     slide.style.transform = "translateX(-800px)";
//     for(i=0; i<4; i++){
//         btn[i].classList.remove("active");
//         this.classList.add("active")
//     }
// }
// btn[2].onclick = function(){
//     slide.style.transform = "translateX(-1600px)";
//     for(i=0; i<4; i++){
//         btn[i].classList.remove("active");
//         this.classList.add("active")
//     }
// }
// btn[3].onclick = function(){
//     slide.style.transform = "translateX(-2400px)";
//     for(i=0; i<4; i++){
//         btn[i].classList.remove("active");
//         this.classList.add("active")
//     }
// }

//question
const icon = document.querySelector('.dropdown-icon');
const icon1 = document.querySelector('.dropdown-icon1');
const icon2 = document.querySelector('.dropdown-icon2');
const icon3 = document.querySelector('.dropdown-icon3');

const spann = document.getElementById('dropdown');
const spann1 = document.getElementById('dropdown1');
const spann2 = document.getElementById('dropdown2');
const spann3 = document.getElementById('dropdown3');


icon.addEventListener('click', function(){
    spann.classList.toggle('active2');
    spann1.classList.remove('active2');
    spann2.classList.remove('active2');
    spann3.classList.remove('active2');
});
icon1.addEventListener('click', function(){
    spann1.classList.toggle('active2');
    spann.classList.remove('active2');
    spann2.classList.remove('active2');
    spann3.classList.remove('active2');
});
icon2.addEventListener('click', function(){
    spann2.classList.toggle('active2');
    spann.classList.remove('active2');
    spann1.classList.remove('active2');
    spann3.classList.remove('active2');
});
icon3.addEventListener('click', function(){
    spann3.classList.toggle('active2');
    spann.classList.remove('active2');
    spann1.classList.remove('active2');
    spann2.classList.remove('active2');
});

// update footer year
var x = new Date()
document.querySelector("#get-year").innerText = x.getFullYear();