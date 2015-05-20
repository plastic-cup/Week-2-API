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

test("Testthere an image on the page", function(){
var iframe = document.getElementById('iframe-index');
var target = iframe.contentDocument || iframe.contentWindow.document;
var image = target.getElementsByTagName("img")[0].src;

notEqual(image, "", "Woop Well done dyyyd");

})  

test("Test if there is a place to input a seerch term", function(){

var iframe =document.getElementById('iframe-index');
var target = iframe.contentDocument || iframe.contentWindow.document;
var inputt = target.getElementsByTagName('input')[0].type;

notEqual(inputt,'',"Woop there is a input element!! Way to go!");

})


test("Can you update the pictures with new tag", function(){
var iframe =document.getElementById("iframe-index");
var target = iframe.contentDocument || iframe.contentWindow.document;

// we will create a function that will be called updateTag

var newTag = tag==="nofilter" ? "love": "nofilter"; //checks if current tag is no filter -> if is changes to love  -> if isn't changes to nofilter

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

})


test("Test does the var tag change when hit find", function(){

var iframe =document.getElementById('iframe-index');
var target = iframe.contentDocument || iframe.contentWindow.document;

})