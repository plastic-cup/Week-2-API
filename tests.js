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
