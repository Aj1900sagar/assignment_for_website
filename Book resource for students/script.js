document.addEventListener("DOMContentLoaded", function() {  
    const menuToggle = document.getElementById("menu-toggle");
    menuToggle.addEventListener("click", function() {
        const nav = document.querySelector("nav");
        nav.classList.toggle("hidden");
    }); 
});
