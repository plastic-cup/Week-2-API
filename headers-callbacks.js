var selected;

var getKey = new XMLHttpRequest();
getKey.open('GET','alohomora.txt');
getKey.send();

setTimeout(function(){
  var key = getKey.responseText;

  var safeSource = document.createElement('script');
  safeSource.setAttribute('src',"https://api.instagram.com/v1/tags/nofilter/media/recent?access_token="+key+"&callback=coolCallbackBack");
  document.body.appendChild(safeSource);
},50);

function coolCallbackBack(info){
  var picSources = [];
  var pics = [];
  var picElement;
  console.log('hey');
  for (var i = 0; i < info.data.length; i++){
    console.log(info.data[i]);
    picSources.push(info.data[i].images.thumbnail.url);
    picElement = document.createElement("img");
    picElement.setAttribute('src',picSources[i]);
    var picCell = document.getElementById('pic' + i);
    picCell.appendChild(picElement);
  }
}

var pictures = document.getElementsByClassName('pics');

function select(){
    var thumbUrl = this.firstChild.src;
    var standardUrl = thumbUrl.split('/');
    standardUrl.splice(5,1);
    standardUrl = standardUrl.join('/');
    selected = standardUrl;
    console.log(selected);
    return true;
}

for (var i = 0; i < pictures.length; i++){
    pictures[i].addEventListener('click', select, false);
}
