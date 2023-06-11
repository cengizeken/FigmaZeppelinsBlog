const menuCollapseEl = document.querySelector(".menu__collapse");
const linksContainerElement = document.querySelector(".app__links-container");

if(menuCollapseEl && linksContainerElement){
    menuCollapseEl.addEventListener('click',() =>{
        linksContainerElement.classList.toggle("active");
        const purpleLogoEl = document.querySelector(".purple__logo");
        if(!linksContainerElement.classList.contains("active")){
            menuCollapseEl.src = "./assets/images/menu_open_icon.svg";
            purpleLogoEl.src ="./assets/images/HireMe.svg";
        }
        else
        {
            menuCollapseEl.src = "./assets/images/menu_close_icon.svg";
            purpleLogoEl.src ="./assets/images/close-door-logo.svg";
            
        }
});
}