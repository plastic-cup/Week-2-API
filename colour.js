// http://www.html5rocks.com/en/tutorials/canvas/imagefilters/
// http://code.tutsplus.com/tutorials/canvas-from-scratch-pixel-manipulation--net-20573

// obj will contain img stuff and associated filter functions
var ctx = document.getElementById('canvas').getContext('2d');
var ImgObj = function(imgName){

    
    console.log(ctx);
    // gets image, draws canvas
    setImage = function(){
        this.image = new Image();
        this.image.src = imgName;
        
        //this.ctx = document.getElementById('canvas').getContext('2d');
        this.h = 300; //maybe make settable by user
        this.w = 300;
        this.imgData = ctx.getImageData(10,10,this.w,this.h); 
        this.pixels = this.imgData.data;
        this.numPixels = this.imgData.width * this.imgData.height;

        // draw
        ctx.drawImage(this.image,10,10,this.w,this.h);
        return this;

    }();
     

    this.invert = function(){
        for (var i = 0; i < this.numPixels; i++){
            this.pixels[i*4] = 255 - this.pixels[i*4]; // Red
            this.pixels[i*4+1] = 255 - this.pixels[i*4+1]; // Green
            this.pixels[i*4+2] = 255 - this.pixels[i*4+2]; // Blue
        }
        this.redraw();
    };

    this.redraw = function(){
        //this.ctx = document.getElementById('canvas').getContext('2d');
        ctx.clearRect(10,10,this.w,this.h);
        ctx.putImageData(this.imgData, 10, 10);
    };

    return this;
};

// getPixels : function(){
    //     var imgData = ctx.getImageData(10,10,w,h); // --> CanvasPixelArray [r,g,b,a,r,g,b,a...]
    //     //console.log(imgData);
    //     var pixels = imgData.data;
    //     var numPixels = imgData.width * imgData.height;
    // }


window.onload = function() {
    var me = new ImgObj("mina.jpg");
    console.log(me);
    me.invert();
    
    
    // get canvas, set dimensions

    // var c = document.getElementById('canvas');
    // var ctx = c.getContext("2d");
    // var h = 300;
    // var w = 300;

    // get image and put on canvas

    // var image = new Image();
    // image.src="mina.jpg";
    // ctx.drawImage(image,10,10,w,h); 


    // gets pixels from image

    
    

    // clear canvas, replace with new image data

    


};
    


