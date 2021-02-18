const toTop = document.querySelector(".to-top");
const toggle = document.querySelector('.toggle');
const navMobile = document.getElementById("navtoggle");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

toggle.addEventListener("click", () => {
    if(navMobile.classList.contains('active')){
      navMobile.classList.remove('active');
    }
    else if(navMobile.classList.contains('nav-mobile')){
      navMobile.classList.add('active');
    }
  })