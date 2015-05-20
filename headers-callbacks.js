var getKey = new XMLHttpRequest();
getKey.open('GET','alohomora.txt');
getKey.send();

setTimeout(function(){
  var key = getKey.responseText;

  var safeSource = document.createElement('script');
  safeSource.setAttribute('src',"https://api.instagram.com/v1/tags/nofilter/media/recent?access_token="+key+"&callback=coolCallbackBach");
  document.body.appendChild(safeSource);
},50);

function coolCallbackBach(info){
  var picSources = [];
  var pics = [];
  var picElement;
  console.log('hey');
  for (var i = 0; i < info.data.length; i++){
      console.log(info.data);
    picSources.push(info.data[i].images.thumbnail.url);
    picElement = document.createElement("img");
    picElement.setAttribute('src',picSources[i]);
    var picCell = document.getElementById('pic' + i);
    picCell.appendChild(picElement);
  }
}
