var uiList = document.querySelector(".ui-list");
var lists = uiList.querySelectorAll("li");
var uiTop = document.querySelector(".ui-top");
var imgTop = document.querySelector(".user-top-img-container img")
var imgTopTitle = uiTop.querySelector(".title");

for(var i = 0; i < lists.length; i++){

    lists[i].addEventListener('click',getElement);

    function getElement(e){
        e.preventDefault();
        var bottomImg = this.querySelector(".user-bottom-img-container img").src;
        var bottomImgName = this.querySelector(".name").innerText;
        imgTop.src = bottomImg;
        imgTopTitle.innerText = bottomImgName;
    }
}



