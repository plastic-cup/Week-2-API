test('the http request "request" is finished and a success!',function(assert){
    var done = assert.async();
    var request = new XMLHttpRequest();
    var getKey = new XMLHttpRequest();
    getKey.open('GET','alohomora.txt')
    getKey.send();
    setTimeout(function(){
        var key = getKey.responseText;
        request.open('GET','https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=' + key);
        console.log(getKey);
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
    }, 1000);
})
