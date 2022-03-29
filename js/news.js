const newsBoxList = document.querySelector(".news-box-list");

function paintNewsList(json) {
    const newses = json.articles;
    
    for(let i = 0; i < 5; i++) {
        const title = newses[i].title;
        const url = newses[i].link;
        const urlImage = newses[i].media;
        makeNewsHtml(title, url, urlImage);
    // news 개수 제한 (for반복문)
    }
} 

function makeNewsHtml(title, url, urlImage) {
    // make html

    const newsLink = document.createElement("a");
    newsLink.href = url;
    newsLink.style.color = "#000000";
    newsLink.style.width = "300px";
    newsLink.style.marginBottom = "50px";
    newsLink.style.marginTop = "50px";
    newsLink.style.marginLeft = "50px";
    newsLink.style.marginRight = "50px";
    newsLink.target = "_blank";
    //뉴스 링크 밑줄

    const newsDiv = document.createElement("div");
    newsDiv.style.width ="300px";
    newsDiv.style.display = "flex";
    newsDiv.style.margin = "0px 0px";
    //뉴스 내용 box
    

    const newsImgDiv = document.createElement("div");
    
    const newsImg = document.createElement("img");
    newsImg.src = urlImage;
    newsImg.style.width = "100px";
    newsImg.style.height = "100px";
    newsImg.style.borderRadius = "10px";
    newsImg.style.padding = "5px 5px 5px 5px";
    // 뉴스 사진

    const newsTitleDiv = document.createElement("div");
    newsTitleDiv.style.height = "70px";
    newsTitleDiv.style.marginLeft = "10px";
    newsTitleDiv.style.color = "white";
    newsTitleDiv.style.display = "flex";
    newsTitleDiv.style.alignItems = "flex-start";
    const newsTitle = document.createElement("span");
    newsTitle.innerText = title;
    //뉴스 내용

    newsImgDiv.append(newsImg);
    newsTitleDiv.append(newsTitle);
    newsDiv.append(newsImgDiv, newsTitleDiv);
    newsLink.append(newsDiv);

    newsBoxList.append(newsLink);
    //append newsImg,titlem,link
}


function init() {
// news api 연동
    const query = `floyd Mayweather`;
    const encodeQuery = encodeURI(query);

    fetch(`https://free-news.p.rapidapi.com/v1/search?q=${encodeQuery}&lang=en`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "78703eb276msh50c7d5d50042338p17b171jsn674f786a647e",
            "x-rapidapi-host": "free-news.p.rapidapi.com"
        }
    })
    .then(response => {
        return response.json();
    }).then(json => {
        paintNewsList(json);
    })
    .catch(err => {
        console.error(err);
    });
}

init();

