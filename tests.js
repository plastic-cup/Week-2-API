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
