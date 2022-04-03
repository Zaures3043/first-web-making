
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

const LEFTSCREEN_ELEMENT = document.querySelector(".hidden_leftscreen");
const menuNews = document.querySelector("#menuNews");

const YOUTUBEBAR_ELEMENT = document.querySelector(".hidden_youtubeBar");
const menuYoutube = document.querySelector("#menuYoutube");

const TODOBOX_ELEMENT = document.querySelector(".hidden_todo-box");
const menuTodo = document.querySelector("#menuTodo"); 


function clickNews() {
  YOUTUBEBAR_ELEMENT.className = "hidden_youtubeBar";
  TODOBOX_ELEMENT.className = "hidden_todo-box";
  if(LEFTSCREEN_ELEMENT.className === "hidden_leftscreen"){
    LEFTSCREEN_ELEMENT.className = "left-screen";
  }else{
    LEFTSCREEN_ELEMENT.className = "hidden_leftscreen";
  }
}

menuNews.addEventListener("click", clickNews);
//add,remove news code



function clickYoutube() {
  LEFTSCREEN_ELEMENT.className = "hidden_leftscreen";
  TODOBOX_ELEMENT.className = "hidden_todo-box";
  if(YOUTUBEBAR_ELEMENT.className === "hidden_youtubeBar"){
    YOUTUBEBAR_ELEMENT.className = "youtubeBar";
  }else{
    YOUTUBEBAR_ELEMENT.className = "hidden_youtubeBar";
  }
}
menuYoutube.addEventListener("click", clickYoutube);
//add,remove youtube code


function clickTodo() {
  YOUTUBEBAR_ELEMENT.className = "hidden_youtubeBar";
  LEFTSCREEN_ELEMENT.className = "hidden_leftscreen";
  if(TODOBOX_ELEMENT.className === "hidden_todo-box"){
    TODOBOX_ELEMENT.className = "todo-box";
  }else{
    TODOBOX_ELEMENT.className = "hidden_todo-box"
  }
}
menuTodo.addEventListener("click", clickTodo);