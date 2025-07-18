const video1 = document.getElementById("projectVid1");
const video2 = document.getElementById("projectVid2");

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')

const hoversign = document.querySelector(".hover-sign");

const videoList = [video1 , video2];

videoList.forEach((video) => {
    video.addEventListener("mouseover" , ()=>{
        video.play();
        hoversign.classList.add("active");
    });
    video.addEventListener("mouseout",()=>{
        video.pause();
        hoversign.classList.remove("active");
    })
})

// Sidebar elements //
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar");
    sideBar.classList.add("open-sidebar");
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})