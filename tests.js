test('the photos on the page change',function(assert){
  var iframe = document.getElementById('iframe');
  var target = iframe.contentDocument || iframe.contentWindow.document;
  var photosAtFirst = target.getElementById('photos');
  var done = assert.async();
  setTimeout(function(){
    var photosNow = target.getElementById('photos');
    notEqual(photosAtFirst,photosNow);
    done();
  },1000);
});
