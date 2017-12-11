
var inpImg = null;

var origImg = null;

function uploadImg()
{
	

	var canvas = document.getElementById("canvas1");
	
	var Img = document.getElementById("finput");
	
	inpImg = new SimpleImage(Img);
	
	origImg = new SimpleImage(Img);
	
	inpImg.drawTo(canvas);



}

function clearCanvas()

{
	
	var canvas = document.getElementById("canvas1");
	
	var ctxt = canvas.getContext("2d");
	
	ctxt.clearRect(0,0,canvas.width,canvas.height);

}


function filterGray()

{
	
	if (checkImage() !=true)
		{
		
		makeGray();
		
		}

	 var c2 = document.getElementById("canvas1");
	 inpImg.drawTo(c2);
}


function makeGray()
{
	

	for(var pixel of inpImg.values())
	 {
	 
	 var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
	 
	 pixel.setRed(avg);
	 pixel.setGreen(avg);
	 pixel.setBlue(avg);
	 	 
	 }


}


function filterRed()

{
	
	if (checkImage() !=true)
	{
	
	makeRed();
	
	}



}

function makeRed()
{
	

	var InpRedImg = new SimpleImage(origImg);
	
		
	for(var pixel of InpRedImg.values())
	 {
	 
	 var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
	 
	 if(avg < 128)
		 {
		 
		 pixel.setRed(2*avg);
		 pixel.setGreen(0);
		 pixel.setBlue(0);
		 
		 }
	 else
		 {
		 
		 pixel.setRed(255);
		 pixel.setGreen(2*avg-255);
		 pixel.setBlue(2*avg-255);
		 
		 }
	
	 	 
	 }

	 var c2 = document.getElementById("canvas1");
	 InpRedImg.drawTo(c2);

}

function filterRainbow()

{
	
	if (checkImage() !=true)
	{
	
	makeRainbow();
	
	}



}

function makeRainbow()
{
	

	var InpRedImg = new SimpleImage(origImg);
	
	var height = InpRedImg.getHeight();
	
	var div = height/7;
	
		
	for(var pixel of InpRedImg.values())
	 {
	 
	 var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
	 
	 var y = pixel.getY();
	 
	 if(y <= div)  // Red
		 {
		 	 
		 if(avg < 128)
		 {
		 
		 pixel.setRed(2*avg);
		 pixel.setGreen(0);
		 pixel.setBlue(0);
		 
		 }
		 else
		 {
		 
		 pixel.setRed(255);
		 pixel.setGreen(2*avg-255);
		 pixel.setBlue(2*avg-255);
		 
		 }
	
		 }
	 
	 else if (y > div && y<= 2*div )  // Orange
		 
	 {
	 	 
		 if(avg < 128)
		 {
		 
		 pixel.setRed(2*avg);
		 pixel.setGreen(0.8*avg);
		 pixel.setBlue(0);
		 
		 }
		 else
		 {
		 
		 pixel.setRed(255);
		 pixel.setGreen(1.2*avg-51);
		 pixel.setBlue(2*avg-255);
		 
		 }
	
		 }
	 
else if (y > 2*div && y<= 3*div )  // Yellow
		 
	 {
	 	 
		 if(avg < 128)
		 {
		 
		 pixel.setRed(2*avg);
		 pixel.setGreen(2*avg);
		 pixel.setBlue(0);
		 
		 }
		 else
		 {
		 
		 pixel.setRed(255);
		 pixel.setGreen(255);
		 pixel.setBlue(2*avg-255);
		 
		 }
	
		 }
	 
else if (y > 3*div && y<= 4*div )  // Green
	 
{
	 
	 if(avg < 128)
	 {
	 
	 pixel.setRed(0);
	 pixel.setGreen(2*avg);
	 pixel.setBlue(0);
	 
	 }
	 else
	 {
	 
	 pixel.setRed(2*avg-255);
	 pixel.setGreen(255);
	 pixel.setBlue(2*avg-255);
	 
	 }

	 }
	 
else if (y > 4*div && y<= 5*div )  // Blue
	 
{
	 
	 if(avg < 128)
	 {
	 
	 pixel.setRed(0);
	 pixel.setGreen(0);
	 pixel.setBlue(2*avg);
	 
	 }
	 else
	 {
	 
	 pixel.setRed(2*avg-255);
	 pixel.setGreen(2*avg-255);
	 pixel.setBlue(255);
	 
	 }

	 }

else if (y > 5*div && y<= 6*div )  // Indigo
	 
{
	 
	 if(avg < 128)
	 {
	 
	 pixel.setRed(0.8*avg);
	 pixel.setGreen(0);
	 pixel.setBlue(2*avg);
	 
	 }
	 else
	 {
	 
	 pixel.setRed(1.2*avg-51);
	 pixel.setGreen(2*avg-255);
	 pixel.setBlue(255);
	 
	 }

	 }
	 
else   // Violet
	 
{
	 
	 if(avg < 128)
	 {
	 
	 pixel.setRed(1.6*avg);
	 pixel.setGreen(0);
	 pixel.setBlue(1.6*avg);
	 
	 }
	 else
	 {
	 
	 pixel.setRed(0.4*avg+153);
	 pixel.setGreen(2*avg-255);
	 pixel.setBlue(0.4*avg+153);
	 
	 }

	 }


	 
	 }

	 var c2 = document.getElementById("canvas1");
	 InpRedImg.drawTo(c2);

}




function resetImage()

{
	

	var c1 = document.getElementById("canvas1");
	
	origImg.drawTo(c1);
}

function checkImage()
{
	
	if(inpImg== null || !inpImg.complete())
	{
		
		alert("No image uploaded");
		
		return true;
	}
	
		
}
