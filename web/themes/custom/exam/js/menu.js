const burgerMenuBtn = document.querySelector(".burger-menu-btn");
const menuList = document.querySelector(".menu");
const navBlock = document.querySelector("#block-exam-main-menu")

burgerMenuBtn.addEventListener("click", ()=>{
  menuList.classList.toggle("active")
  navBlock.classList.toggle("active")
});
