var selected;

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
  setInterval(addingPics,1000);
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
    var selectedPhoto = document.createElement("img");
    selectedPhoto.setAttribute('src', standardUrl);
    var holder = document.getElementById('selectedPhotoHolder');
    holder.appendChild(selectedPhoto);
    return true;
}

for (var i = 0; i < pictures.length; i++){
    pictures[i].addEventListener('click', select, false);
}

var greybutton = document.getElementById("Grey");
var frontpage = document.getElementById("frontpage");
console.log(frontpage);

greybutton.addEventListener('click', function(){
    frontpage.className = 'hidden';
    greypage.className = '';
    console.log('click');
}, false);
