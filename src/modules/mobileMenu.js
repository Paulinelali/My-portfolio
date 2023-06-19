

const mobilMenu = document.querySelector(".mobile-nav");
const hamburger = document.querySelector(".hamburger");



// ========================================
const toggleClasses = () => {
    document.querySelector("body").classList.toggle("no-scroll-Y");
}


const mobileMenuFunc = () => {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("init-hide");
        mobilMenu.classList.toggle("init-hide");
        toggleClasses();
    });
    
    mobilMenu.addEventListener("click", () => {
        hamburger.classList.toggle("init-hide");
        mobilMenu.classList.toggle("init-hide");
        toggleClasses();
    });
}

export default mobileMenuFunc;