window.onload = function() {
	var ctx = document.getElementById('canvas').getContext('2d');

	var image = new Image();
	image.src = "mina.jpg";

	// dimensions
	var h = 300; //maybe make settable by user
	var w = 300;

	// draw img on canvas
	ctx.drawImage(image,10,10,w,h);

	// get pixels
	var imgData = ctx.getImageData(10,10,w,h); 

	var pixels = imgData.data;

	var numPixels = imgData.width * imgData.height;
	

	//invert();
	greyscale();

	function greyscale(){
		//console.log(pixels);
		//console.log(imgData.width);
		//console.log("pixel: " + pixels[i]);
	    for (var y = 0; y < imgData.height; y++){
	    	//console.log(pixels);
	    	for(var x = 0; x < imgData.width; x++){

	    		var i = (y * 4) * imgData.width + x * 4; // (y*4) = row, (x*4) = moving along each pixel, imgPixels.width compensates for size of colour blob
		        
		        var avg = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
		        pixels[i] = avg;
		        pixels[i + 1] = avg;
		        pixels[i + 2] = avg;
	    	}
	    }
	    redraw();
	}
	
	function invert(){
	    for (var i = 0; i < numPixels; i++){
	        pixels[i*4] = 255 - pixels[i*4]; // Red
	        pixels[i*4+1] = 255 - pixels[i*4+1]; // Green
	        pixels[i*4+2] = 255 - pixels[i*4+2]; // Blue
	    }
	    redraw();
	}

	function redraw(){
	    ctx.clearRect(10,10,w,h);
	    ctx.putImageData(imgData, 10, 10);
	}


};