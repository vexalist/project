var pageList = ["index.html", "01.html", "02.html", "about.html"];
var url = window.location.pathname;

document.getElementById('next').onclick = function(){

	var page = url.substring(url.lastIndexOf('/')+1);
	var currentPosition = pageList.indexOf(page);

    if(currentPosition==-1) return;

    if(currentPosition<pageList.length-1) {
    	window.location = pageList[++currentPosition];
    } else {
    	window.location = pageList[0];
    }
};

document.getElementById('previous').onclick = function(){

	var page = url.substring(url.lastIndexOf('/')+1);
	var currentPosition = pageList.indexOf(page);

    if(currentPosition==-1) return;

    window.location = pageList[--currentPosition]; 
};

