var canvas = new fabric.Canvas('myCanvas');
 var x = document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function (img)
    {
        imageObj = img
        imageObj.scaleToWidth(1000);
        imageObj.scaleToHeight(500);
        imageObj.set(
            {
                top:0,
                left:0
            }
        )
        

        canvas.add(imageObj)
    })	
}

function playSound()
{
	x.play()
}
