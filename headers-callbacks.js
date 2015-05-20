var request = new XMLHttpRequest();
var getKey = new XMLHttpRequest();
// getKey.open('GET','alohomora.txt');
// getKey.send();
// var key = getKey.responseText;
// console.log(key);
request.open('GET','https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=256725292.5c78bd6.917ec96983b74a2588e70ac87db92baa');
request.setRequestHeader('accepts', 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript');
request.setRequestHeader('script',/(?:java|ecma)script/);
console.log(request);
request.send();


function coolCallbackBack(info){
  var picSource = info.data[0].images.standard_resolution.url;
  var picture = document.createElement("img")//.setAttribute('src',picSource);
  document.body.appendChild(picture);
  document.getElementsByTagName('img')[0].setAttribute('src',picSource);
}

// accepts script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
//
// contents: {
// script: /(?:java|ecma)script/
// },
// converters: {
// "text script": function( text ) {
// jQuery.globalEval( text );
// return text;
// }
// }
// });
