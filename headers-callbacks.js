var getKey = new XMLHttpRequest();
getKey.open('GET','alohomora.txt');
getKey.send();
var tag = "nofilter";
var data;
var maxId = '';
var pictures = document.getElementById('pictures');
console.log(pictures);

setTimeout(function(){
  var key = getKey.responseText;
  addingPics();
  function addingPics(){
    var safeSource = document.createElement('script');
    safeSource.setAttribute('src',"https://api.instagram.com/v1/tags/"+tag+"/media/recent?access_token="+key+"&callback=coolCallbackBack"+maxId);
    pictures.appendChild(safeSource);
  }
  setInterval(addingPics,500);
},100);


function coolCallbackBack(info){
  data = info;
  maxId = '&max_tag_id='+data.pagination.next_max_id;
  var picSources = [];
  var pics = [];
  var picElement;
  for (var i = 0; i < info.data.length; i++){
    picSources.push(info.data[i].images.thumbnail.url);
    picElement = document.createElement("img");
    picElement.setAttribute('src',picSources[i]);
    pictures.children.length >= 20 ? pictures.insertBefore(picElement,pictures.firstChild) : pictures.appendChild(picElement);
    if (pictures.children.length >= 20) pictures.removeChild(pictures.lastChild);
  }
}
