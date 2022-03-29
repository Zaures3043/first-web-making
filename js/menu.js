
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




const HIDDEN_LEFTSCREEN = document.getElementById("left-screen");
const menuNews = document.getElementById("menuNews");

const HIDDEN_NEWSCLASS = "hidden_leftscreen"


menuNews.addEventListener("click",()=>{
    clickNew()
});

function clickNewsGood(event) {
    HIDDEN_LEFTSCREEN.classList.add(HIDDEN_NEWSCLASS);
}

function clickNewsBad(event) {
    HIDDEN_LEFTSCREEN.classList.remove(HIDDEN_NEWSCLASS);
}


function clickNews() {
    if(HIDDEN_LEFTSCREEN.classList.contains(HIDDEN_NEWSCLASS)) {
    clickNewsBad();
  }else{
    clickNewsGood();
  }
}


//document.getElementById('ex').classList.add('bar');
//document.getElementById('ex').classList.remove('bar', 'baz');

//when you click menu add news 



