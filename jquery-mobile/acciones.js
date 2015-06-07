// JavaScript Document
$(document).ready(function(e){
	$('#principal').height($('#page').height());//calcular el alto de la pantalla del dispositivo
	document.addEventListener("deviceready",function(){
		//precarga el sonido
		audio=window.plugins.LowLatencyAudio;
		audio.preloadFX('ELEFANTE','audio/ELEFANTE.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('LEON','audio/LEON.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('SERPIENTE','audio/SERPIENTE.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('MONO','audio/MONO.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('PANDA','audio/PANDA.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('CAMALEON','audio/CAMALEON.mp3',function(){},function(e){alert('Error '+e);});
		
		audio.preloadFX('GUAJOLOTE','audio/GUAJOLOTE.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('BURRO','audio/BURRO.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('OBEJA','audio/OBEJA.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('GATO','audio/GATO.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('PERRO','audio/PERRO.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('GALLINA','audio/GALLINA.mp3',function(){},function(e){alert('Error '+e);});
	
		//REPRODUCIR LAS NOTAS
		
		$('.nota').bind('touchstart', function(){$(this).addClass('tocada');
		audio.play($(this).attr('id'));});
		$('.nota').bind('touchend', function(){$(this).removeClass('tocada');});
	},false);//deviceready
});//ready