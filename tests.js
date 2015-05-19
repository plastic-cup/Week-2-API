test('the http request "request" is finished and a success!',function(assert){
    var done = assert.async();
    var request = new XMLHttpRequest();
    request.open('GET','https://api.instagram.com/v1/tags/nofilter/media/recent?client_id=CLIENT-ID');
    request.send();
    setTimeout(function(){
        var statusCode = request.status;
        var ready = request.readyState;
        equal(ready,4, 'request finished, yeeeeeeeeeeeah!');
        equal(Math.floor(statusCode/100),2, 'status in the successes WHOOOOOOOOOOP');
        done();
    },200);
})
