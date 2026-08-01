/* ==========================
   ORVEXA STUDIO
   JavaScript
========================== */


/* ==========================
   NAVBAR SCROLL EFFECT
========================== */


const header = document.querySelector("header");


window.addEventListener("scroll", () => {


    if(window.scrollY > 50){

        header.style.background =
        "rgba(5,8,22,0.92)";

        header.style.padding =
        "12px 0";


    } else {


        header.style.background =
        "rgba(5,8,22,0.55)";

        header.style.padding =
        "20px 0";


    }


});





/* ==========================
   ANIMAZIONI SCROLL
========================== */


const observer = new IntersectionObserver(

(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.style.opacity="1";

            entry.target.style.transform=
            "translateY(0)";


        }


    });


},

{

    threshold:0.15

}

);





const animatedElements = document.querySelectorAll(

".card, .portfolio-item, section h2"

);



animatedElements.forEach(element=>{


    element.style.opacity="0";

    element.style.transform=
    "translateY(40px)";


    element.style.transition=
    "all .7s ease";


    observer.observe(element);


});







/* ==========================
   MENU MOBILE
========================== */


const nav = document.querySelector("nav");


const buttonMenu = document.createElement("button");


buttonMenu.innerHTML = "☰";


buttonMenu.classList.add("mobile-menu");



document.querySelector("header .container")

.appendChild(buttonMenu);





buttonMenu.addEventListener("click",()=>{


    nav.classList.toggle("open");


});






/* ==========================
   CHIUSURA MENU MOBILE
========================== */


document.querySelectorAll("nav a")

.forEach(link=>{


    link.addEventListener("click",()=>{


        nav.classList.remove("open");


    });


});
