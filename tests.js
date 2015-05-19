test('the http request "request" is finished and a success!',function(assert){
    var done = assert.async();
    var request = new XMLHttpRequest();
    request.open('GET','https://api.instagram.com/v1/tags/nofilter/media/recent?client_id=b39dd08a617e403a88a19c7b870a240e');
    request.send();
    setTimeout(function(){
        var statusCode = request.status;
        var ready = request.readyState;
        console.log(ready);
        equal(ready,4, 'request finished, yeeeeeeeeeeeah!');
        console.log(statusCode);
        equal(Math.floor(statusCode/100),2, 'status in the successes WHOOOOOOOOOOP');
        done();
    },2000);
})
