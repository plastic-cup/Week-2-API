var getKey = new XMLHttpRequest();
getKey.open('GET','../alohomora.txt');
getKey.send();
var tag = "kirahvi";
var data;
var maxId = '';
var gallery = JSON.parse(localStorage.getItem('gallery')) || [];

if (gallery.length){
  gallery.forEach(function(element){
    galleryPopulater(element);
  });
}

function tagUpdate(){
	tag = document.getElementById("input").value;
	document.getElementById('tag-title').innerHTML = '#' + tag;
}

setTimeout(function(){
  var key = getKey.responseText;
  addingPics();
  function addingPics(){
    var safeSource = document.createElement('script');
    safeSource.setAttribute('src',"https://api.instagram.com/v1/tags/"+tag+"/media/recent?access_token="+key+"&callback=coolCallbackBack"+maxId);
    document.body.appendChild(safeSource);
  }
  setInterval(addingPics,3000);
},100);

function coolCallbackBack(info){
  data = info;
  maxId = '&max_tag_id='+data.pagination.next_max_id;
  var picSources = [];
  var pics = [];
  var picElement;
  function addToCell(cell,image,delaySize){
    setTimeout(function(){
      if (cell.firstChild) cell.removeChild(cell.firstChild);
      cell.appendChild(image);
    },150*delaySize);
  }
  for (var i = 0; i < info.data.length; i++){
    picSources.push(info.data[i].images.thumbnail.url);
    picElement = document.createElement("img");
    picElement.setAttribute('src',picSources[i]);
    var picCell = document.getElementById('pic' + i);
    addToCell(picCell,picElement,i);
  }
}

var pictures = document.getElementsByClassName('pics');

function select(){
    var thumbUrl = this.firstChild.src;
    standardUrl = thumbUrl.split('/');
    standardUrl.splice(5,1,'s320x320');
    standardUrl = standardUrl.join('/');
    gallery.push(standardUrl);
    localStorage.setItem('gallery',JSON.stringify(gallery));
    galleryPopulater(standardUrl);
    for (var i = 0; i < selectedPhotos.length; i++){
        selectedPhotos[i].addEventListener('click', lightbox, false);
    }
    return true;
}

function galleryPopulater(standardUrl){
  var selectedPhoto = document.createElement("img");
  selectedPhoto.setAttribute('src', standardUrl);
  selectedPhoto.setAttribute('class', 'selectedPhoto');
  var holder = document.getElementById('selectedphotoholder');
  holder.appendChild(selectedPhoto);
}

for (var i = 0; i < pictures.length; i++){
    pictures[i].addEventListener('click', select, false);
}

var frontpage = document.getElementById("frontpage");
var filterpage = document.getElementById('filterpage');
var homeButton = document.getElementById("homeButton");
var selectedPhotos = document.getElementsByClassName("selectedPhoto");
var container = document.getElementById('container');
console.log(selectedPhotos);
var buttons = ['savedButton', 'greyButton', 'sepiaButton', 'invertButton', 'blurButton', 'saturateButton'];

buttons.map(function(element){
    button = document.getElementById(element);
    button.addEventListener('click', function(){
        frontpage.className = 'hidden';
        filterpage.className = element.slice(0,-6);
    });
});

homeButton.addEventListener('click', function(){
    filterpage.className = 'hidden';
    frontpage.className = '';
});


for (var i = 0; i < selectedPhotos.length; i++){
    selectedPhotos[i].addEventListener('click', lightbox, false);
}

function lightbox(){
    var darkness = document.createElement('div');
    var lightbox = document.createElement('img');
    var fullSize = this.src.split('/');
    fullSize.splice(5,1);
    fullSize = fullSize.join('/');
    lightbox.setAttribute('id', 'lightbox');
    lightbox.setAttribute('src', fullSize);
    filterpage.appendChild(darkness);
    darkness.appendChild(lightbox);
    darkness.setAttribute('class', 'darkened');
    darkness.addEventListener('click', function(){
        darkness.parentNode.removeChild(darkness);
    }, false)
}



document.getElementById('clearButton').addEventListener('click', function(){

console.log(gallery.length);

gallery =[];
console.log("clearattu");
console.log(gallery.length);


});

