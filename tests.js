test("old pics get deleted",function(assert){
  var done = assert.async();
  var iframe = document.getElementById('iframe');
  var target = iframe.contentDocument || iframe.contentWindow.document;
  setTimeout(function(){
    var photosAtFirst = target.getElementById('photos');
    setTimeout(function(){
      var photosNow = target.getElementById('photos');
      notEqual(photosAtFirst,photosNow);
      equal(photosNow.children.length, 20);
      done();
    },1000);
  },100);
});
