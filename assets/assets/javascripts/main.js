var sidebarBtn        = document.querySelector("#sidebar__btn");
var navTrigger        = document.querySelector(".nav-trigger");
var selectCustomField = document.querySelector("#sc-field1");
var flipBtn           = document.querySelector("#tgl-btn");
var flipBtn2          = document.querySelector("#tgl-btn2");
var playBtn           = document.querySelector("#play-btn");
var pauseBtn          = document.querySelector("#pause-btn");
var menuBtn           = document.querySelector(".nav-trigger");

sidebarBtn.addEventListener("click",  () => {
    document.querySelector(".sidebar").classList.toggle("sidebar__collapse");    
})

navTrigger.addEventListener("click",  () => {
    document.querySelector(".sidebar").classList.toggle("sidebar__active");
})

if(selectCustomField) {
    selectCustomField.addEventListener("click",  () => {
        document.querySelector("#sc-options1").classList.toggle("hide");    
    })
}

if(flipBtn) {
    flipBtn.addEventListener("click",  () => {
        document.querySelector(".pokemon__main").classList.add("pokemon-details-grid__left--active");    
    })
}

if(flipBtn2) {
    flipBtn2.addEventListener("click",  () => {
        document.querySelector(".pokemon__main").classList.remove("pokemon-details-grid__left--active");    
    })
}

if(playBtn) {
    playBtn.addEventListener("click",  () => {
        document.querySelector(".icon--play").classList.toggle("hide");    
        document.querySelector(".icon--pause").classList.toggle("hide");    
    })
}

if(pauseBtn) {
    pauseBtn.addEventListener("click",  () => {
        document.querySelector(".icon--play").classList.toggle("hide");    
        document.querySelector(".icon--pause").classList.toggle("hide");    
    })
}

menuBtn.addEventListener("click",  () => {
    document.querySelector("#app").classList.toggle("nav-menu-active");
})



