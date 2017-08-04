var wavesurfer = WaveSurfer.create({
  container: '#wave-container',
  waveColor: 'darkorange',
  progressColor: 'purple',
  height: 120
});
var slider = $("#slider");
wavesurfer.load('./wonder-woman-theme.wav');
wavesurfer.toggleInteraction()
var duration = 1;
console.log(duration);
console.log(slider);

// loop play video
var interaction = false;
wavesurfer.on('finish', function(){
	if(!interaction){
		interaction = true;
		wavesurfer.toggleInteraction()
	}
	wavesurfer.play();
})

	
wavesurfer.on('seek', function(val){
	var processing = val * 100
	slider.val(processing);
})


wavesurfer.on('audioprocess', setSliderVal)

function setSliderVal(val){
	var duration = wavesurfer.getDuration();
	var processing = val/duration * 100
	console.log(processing);
	slider.val(processing);
}