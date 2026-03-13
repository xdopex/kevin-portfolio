const student = document.getElementById("student")
const enthusiast = document.getElementById("enthusiast")
const aspiring = document.getElementById("aspiring")
const ABOUTME = document.getElementById("ABOUT-ME")

student.addEventListener("mouseover",()=>{
    ABOUTME.style.backgroundImage = "url('newyork.jpg')";
     ABOUTME.style.transitionDuration = "3s";
   
     
});

enthusiast.addEventListener("mouseover",()=>{
    ABOUTME.style.backgroundImage = "url('under.jpg')";
     ABOUTME.style.transitionDuration = "3s";

     
});

aspiring.addEventListener("mouseover",()=>{
    ABOUTME.style.backgroundImage = "url('green1.jpg')";
     ABOUTME.style.transitionDuration = "3s";
     
});


