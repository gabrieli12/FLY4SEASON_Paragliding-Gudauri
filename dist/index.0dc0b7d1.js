const burgerMenu = document.getElementById("burger-menu");
const sideBar = document.getElementById("side-menu");
const sideMenuExitBtn = document.getElementById("side-menu-exit-btn");
let isOpen = false;
burgerMenu.addEventListener("click", ()=>{
    isOpen = !isOpen;
    sideBar.style.transform = isOpen ? "translateX(0)" : "translateX(-120%)";
});
sideMenuExitBtn.addEventListener("click", ()=>{
    isOpen = false;
    sideBar.style.transform = "translateX(-120%)";
}) // burgerMenu.addEventListener('click', () => {
 //     isOpen = !isOpen
 //     if(isOpen == true){
 //         sideBar.style.transform = 'translateX(0)'
 //     }else{
 //         sideBar.style.transform = 'translateX(-120%)'
 //     }
 // })
;

//# sourceMappingURL=index.0dc0b7d1.js.map
