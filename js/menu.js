
const underline = document.querySelector("#underline");
const item = document.querySelectorAll("nav a");

function select(event) {
    underline.style.left = event.offsetLeft+"px";
    underline.style.width = event.offsetWidth+"px";
}
item.forEach(link =>{
    link.addEventListener("click", (event)=>{
        select(event.target);
    })
})
// menu bar 효과




const LEFTSCREEN_ELEMENT = document.querySelector(".left-screen");
const menuNews = document.querySelector("#menuNews");
const menuToDo = document.querySelector("#menuToDo");

const HIDDEN_NEWSCLASS = "hidden_leftscreen"


function clickNewsBad(event) {
    LEFTSCREEN_ELEMENT.classList.remove(HIDDEN_NEWSCLASS);
}

function clickNewsGood(event) {
    LEFTSCREEN_ELEMENT.classList.add(HIDDEN_NEWSCLASS);
}



// function clickNews() {
//     if(LEFTSCREEN_ELEMENT.classList.contains(HIDDEN_NEWSCLASS)) {
//     clickNewsBad;
//   }else{
//     clickNewsGood;
//   }
// }

menuNews.addEventListener("click", clickNewsGood);
menuToDo.addEventListener("click", clickNewsBad);


