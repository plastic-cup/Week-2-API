var getKey = new XMLHttpRequest();
getKey.open('GET','alohomora.txt');
getKey.send();
var tag = "nofilter";

setTimeout(function(){
  var key = getKey.responseText;

  var safeSource = document.createElement('script');
  safeSource.setAttribute('src',"https://api.instagram.com/v1/tags/"+tag+"/media/recent?access_token="+key+"&callback=coolCallbackBack");
  document.body.appendChild(safeSource);
},50);

function coolCallbackBack(info){
  var picSources = [];
  var pics = [];
  var picElement;
  console.log('hey');
  for (var i = 0; i < info.data.length; i++){
    picSources.push(info.data[i].images.thumbnail.url);
    picElement = document.createElement("img");
    picElement.setAttribute('src',picSources[i]);
    document.body.appendChild(picElement);
  }
}
