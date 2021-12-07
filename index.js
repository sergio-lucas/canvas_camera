// This will copy the contents of video element to a canvas element

let canvasEl = document.getElementById('canvas');
let context = canvasEl.getContext('2d');
let videoEl = document.getElementById('video');

function updateCanvas() {
  context.drawImage(videoEl, 0, 0, canvasEl.width, canvasEl.height);
  
  window.requestAnimationFrame(updateCanvas);
}

navigator.getUserMedia(
	{ video: true }, // Ask for video
	(stream) => {
    videoEl.srcObject = stream;
	  videoEl.play();
    
    window.requestAnimationFrame(updateCanvas);
  },
	(error) => {
    console.error(error);
  }
);
