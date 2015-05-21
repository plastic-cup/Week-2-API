test('the photos on the page change',function(assert){
  var iframe = document.getElementById('iframe');
  var target = iframe.contentDocument || iframe.contentWindow.document;
  var photosAtFirst = target.getElementById('photo-grid');
  var done = assert.async();
  setTimeout(function(){
    var photosNow = target.getElementById('photo-grid');
    notEqual(photosAtFirst,photosNow);
    done();
  },1000);
});

test("Testthere an image on the page", function(){
var iframe = document.getElementById('iframe');
var target = iframe.contentDocument || iframe.contentWindow.document;
var image = target.getElementsByTagName("img")[0].src;

notEqual(image, "", "Woop Well done dyyyd");

});

test("Test if there is a place to input a seerch term", function(){

var iframe =document.getElementById('iframe');
var target = iframe.contentDocument || iframe.contentWindow.document;
var inputt = target.getElementsByTagName('input')[0].type;

notEqual(inputt,'',"Woop there is a input element!! Way to go!");

});


test("Can you update the pictures with new tag", function(){
var iframe =document.getElementById("iframe");
var target = iframe.contentDocument || iframe.contentWindow.document;

var newTag = tag==="nofilter" ? "love": "nofilter";
updateTag(newTag);
  var done = assert.async();
  setTimeout(function(){
    var success = true;
    	for(var i = 0; i<data.data.length; i++){
    		if(data.data[i].text.search("#"+newTag) === -1){
    		success = false;
    		break;
    		}
    	}
    ok(success);
    done();
  },200);
});


test("Test does the var tag change when hit find", function(){

var iframe =document.getElementById('iframe');
var target = iframe.contentDocument || iframe.contentWindow.document;

});


test("old pics get deleted",function(assert){
  var done = assert.async();
  var iframe = document.getElementById('iframe');
  var target = iframe.contentDocument || iframe.contentWindow.document;
  setTimeout(function(){
    var photosAtFirst = target.getElementById('photo-grid');
    setTimeout(function(){
      var photosNow = target.getElementById('photo-grid');
      notEqual(photosAtFirst,photosNow);
      for (var i = 0; i < 20; i ++){
        equal(target.getElementById('pic'+i).children, 1);
      }
      done();
    },1000);
  },100);
});

// test("input has a hover class", function(assert){
//   var done = assert.async();
//   var iframe = document.getElementById('iframe');
//   var target = iframe.contentDocument || iframe.contentWindow.document;
//   setTimeout(function(){
//     equal(target.getElementById('input').className, "hover", "input has the classname 'hover'");
//     done();
//   },1000)
// });

test("button has an id of 'button'", function(assert){
  var done = assert.async();
  var iframe = document.getElementById('iframe');
  var target = iframe.contentDocument || iframe.contentWindow.document;
  setTimeout(function(){
    equal(target.getElementsByTagName('button')[0].id, "hover", "button has an id of 'button'");
    done();
  },1000)
});
