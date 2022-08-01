let bars=document.querySelector(".header .bars");
let links=document.querySelector(".links");
let allLinks=document.querySelectorAll(".links a");
console.log(allLinks)
bars.addEventListener("click",()=>{
    links.classList.toggle("open");
})
document.addEventListener("click",(e)=>{
    if(e.target !== (bars || links)){
        links.classList.remove("open");        
    }
})

allLinks.forEach(link => {
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:"smooth"
        })
    })
})