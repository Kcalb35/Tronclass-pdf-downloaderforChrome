let btn = document.getElementById("btn")

const Http = new XMLHttpRequest();

function download(){
    var j = this.responseText;
    obj = JSON.parse(j);
    console.log(obj.url);
    chrome.downloads.download({url:obj.url});
}

btn.onclick = function(element){
    chrome.storage.sync.get('url',function(data){
        Http.addEventListener("load",download);
        Http.open("GET",data.url);
        Http.send();
        })

};


