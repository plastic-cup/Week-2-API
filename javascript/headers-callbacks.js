var getKey = new XMLHttpRequest();
getKey.open('GET','../alohomora.txt');
getKey.send();
var tag = "kirahvi";
var data;
var maxId = '';
var minId = '';
var gallery = JSON.parse(localStorage.getItem('gallery')) || [];

if (gallery.length){
  gallery.forEach(function(element){
    galleryPopulater(element);
  });
}

function tagUpdate(){
	tag = document.getElementById("input").value.trim();
  tag = tag.split(' ').join('');
	document.getElementById('tag-title').innerHTML = '#' + tag;
  document.getElementById("input").value = '';
  newPictures.getPics();
}

var newPictures;

setTimeout(function(){
  var key = getKey.responseText;
  newPictures = (function(){

    var picSources = [];
    var firstPics = [];
    var oldNewCheck;
    var oldSafeSource;

    function getPics(){
      var newCheck = document.createElement('script');
      if (oldNewCheck) document.body.removeChild(oldNewCheck);
      oldNewCheck = newCheck;
      newCheck.setAttribute('src',"https://api.instagram.com/v1/tags/"+tag+"/media/recent?access_token="+key+"&callback=newPictures.smallCallbackHack"+minId);
      document.body.appendChild(newCheck);
      var safeSource = document.createElement('script');
      if (oldSafeSource) document.body.removeChild(oldSafeSource);
      oldSafeSource = safeSource;
      safeSource.setAttribute('src',"https://api.instagram.com/v1/tags/"+tag+"/media/recent?access_token="+key+"&callback=newPictures.coolCallbackBack"+maxId);
      document.body.appendChild(safeSource);
    }


    function smallCallbackHack(info){
      minId = '&min_tag_id='+info.pagination.min_tag_id;
      if (!picSources.length){
        return;
      }
      picSources = [];
      for (var j = 0; j < info.data.length; j++){
        picSources.push(info.data[j].images.thumbnail.url);
      }
    }

    function addToCell(cell,image,delaySize){
      setTimeout(function(){
        if (cell.firstChild) cell.removeChild(cell.firstChild);
        cell.appendChild(image);
      },250*delaySize);
    }

    function refresh(){
      for (var i = 0; i < 20; i++){
        picElement = document.createElement("img");
        picElement.setAttribute('class', 'picChild');
        picElement.setAttribute('src',picSources[i]);
        var picCell = document.getElementById('pic' + i);
        if (picElement.src.search('undefined') === -1){
          addToCell(picCell,picElement,i);
          document.getElementById('sad').className = 'hidden';
        }
        else document.getElementById('sad').className = '';
      }
    }

    function coolCallbackBack(info){
      maxId = '&max_tag_id='+info.pagination.next_max_id;
      for (var i = 0; i < info.data.length; i++){
        picSources.push(info.data[i].images.thumbnail.url);
      }
      refresh();
    }

    return {
      coolCallbackBack: coolCallbackBack,
      smallCallbackHack: smallCallbackHack,
      refresh: refresh,
      addToCell: addToCell,
      getPics: getPics
    };

  }());

  newPictures.getPics();

  setInterval(newPictures.getPics,5000);
},100);

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

function buttonHover(){
  document.getElementById('search-button').style.backgroundColor = '#52f2f2';
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

var homeHeader = document.getElementById('header');

homeHeader.addEventListener('click', function(){
    filterpage.className = 'hidden';
    frontpage.className = '';
});

for (var i = 0; i < selectedPhotos.length; i++){
    selectedPhotos[i].addEventListener('click', lightbox, false);
}

function lightbox(){
    var darkness = document.createElement('div');
    var lightbox = document.createElement('img');
    var close = document.createElement('div');
    close.setAttribute('id', 'close');
    var fullSize = this.src.split('/');
    fullSize.splice(5,1);
    fullSize = fullSize.join('/');
    lightbox.setAttribute('id', 'lightbox');
    lightbox.setAttribute('src', fullSize);
    filterpage.appendChild(darkness);
    darkness.appendChild(lightbox);
    darkness.appendChild(close);
    darkness.setAttribute('class', 'darkened');
    darkness.addEventListener('click', function(){
        darkness.parentNode.removeChild(darkness);
    }, false);
}



document.getElementById('clearButton').addEventListener('click', function(){
    window.localStorage.clear();
    gallery =[];
    document.getElementById('selectedphotoholder').innerHTML = '';
});
