var request = new XMLHttpRequest();
var getKey = new XMLHttpRequest();
// getKey.open('GET','alohomora.txt');
// getKey.send();
// var key = getKey.responseText;
// console.log(key);
request.open('GET','https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=TOKEN');
request.setRequestHeader('accepts', 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript');
request.setRequestHeader('script',/(?:java|ecma)script/);
console.log(request);
request.send();


function coolCallbackBack(info){
  console.log(info);
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
