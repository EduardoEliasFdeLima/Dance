var colors = [];//Array com as cores, pode adicionar quantas quiser

$("video").prop('muted', true);


var tes = true

function videoMarija(){
   //alert('oi')
   colors = ["#0E0826","#590253","#2D1973","#18082E","#7378E9"];

   if(tes == true){
     
      var i = 0;
      setInterval(function(){
               
         $('#bd').css('background', colors[i]);
         $('#bd').css('transition', 'ease-in .5s');
         i = (i == (colors.length -1)) ? 0 : i+1;
      },1000);//5 Segundos em Milisegundos*/
      tes = false
   }else{
      $('#bd').css('background', '#670d57');
      tes = true

   }

}


var test = true

function videoBuroZombie(){
   colors = ["#c72d90","#ffd460","#42246e","#ff5a80","#fccf7d"];
   if(test == true){
      
      var i = 0;
      setInterval(function(){
            
         $('#bd').css('background', colors[i]);
         $('#bd').css('transition', 'ease-in .5s');
         i = (i == (colors.length -1)) ? 0 : i+1;
      },1000);//5 Segundos em Milisegundos
      test = false
   }else{
      //colors2 = ["#670d57"];
      $('#bd').css('background', '#670d57');
      test = true
   }

   
}     

$("#vd").click(function() {
   if ($("video").prop('muted')) {
      $("video").prop('muted', false);

      $('#ch').css('animation', 'bounc 2s infinite');
      $('#ch').text('Clique no vídeo para desativar o áudio')
             

   } else {
      $("video").prop('muted', true);
      colors = ["#670d57"];
      colors2 = ["#670d57"];
      $('#bd').css('background', colors[0]);
      $('#bd').css('background', colors2[0]);
      $('#ch').text('Clique no vídeo para ativar o áudio')
      $('#ch').css('animation', '');
         
   }

});

var teste = true
var vid = document.getElementById('vd')
var videoFullScreen = document.getElementById('vdd')
var nb = document.getElementById('NumberChange')
var testeFullScreen = true;
var testeNormalScreen = true;

function changeVideo(){
   $("video").prop('muted', true);
  
   $('#ch').text('Clique no vídeo para ativar o áudio')
   $('#ch').css('animation', '');
   colors = [""];
   $('#bd').css('background', '#670d57');

   $('#PlayInFullScreen').text('Play Audio');

   if(teste == true){
    
      vid.src = "https://files.catbox.moe/li0u91.mp4"
      vid.title = "BuroZombie"
      vid.setAttribute('onclick', 'videoBuroZombie()')     
      nb.innerText = "2";

      videoFullScreen.src = "https://files.catbox.moe/li0u91.mp4"
      videoFullScreen.title = "BuroZombie"
     
      teste = false
      testeFullScreen = false
      testeNormalScreen = false

   }else{
      vid.src = "https://files.catbox.moe/n16vf8.mp4"
      vid.title = "Marija"
      vid.setAttribute('onclick', 'videoMarija()') 
      nb.innerText = "1";

      videoFullScreen.src = "https://files.catbox.moe/n16vf8.mp4";
      videoFullScreen.title = "Marija";

   
      teste = true
      testeFullScreen = true
      testeNormalScreen = true
   }

}

var FLLSCREEN = document.getElementById('FullScreen');

function FullScreen(){
   $("video").prop('muted', true);
  
   $('#ch').text('Clique no vídeo para ativar o áudio')
   $('#ch').css('animation', '');
   colors = [""];
   $('#bd').css('background', '#670d57');

   $('#NormalScreenDIV').css('display', 'none');
   $('#FullScreenDIV').css('display', 'block');

   FLLSCREEN.setAttribute('onclick', 'NormalScreen()');

   $('#TrocaIcon').removeClass('fa-expand');
   $('#TrocaIcon').addClass('fa-compress');


   if(testeFullScreen == false){
    
      vid.src = "https://files.catbox.moe/li0u91.mp4"
      vid.title = "BuroZombie"
      vid.setAttribute('onclick', 'videoBuroZombie()')     
      nb.innerText = "2";

      videoFullScreen.src = "https://files.catbox.moe/li0u91.mp4"
      videoFullScreen.title = "BuroZombie"
     
      testeNormalScreen = false

   }else{
      vid.src = "https://files.catbox.moe/n16vf8.mp4"
   
      vid.setAttribute('onclick', 'videoMarija()') 
     

      videoFullScreen.src = "https://files.catbox.moe/n16vf8.mp4";
      videoFullScreen.title = "Marija";

   
      testeNormalScreen = true
   }

}

function NormalScreen(){
   $("video").prop('muted', true);
  
   $('#ch').text('Clique no vídeo para ativar o áudio')
   $('#ch').css('animation', '');
   colors = [""];
   $('#bd').css('background', '#670d57');

   $('#NormalScreenDIV').css('display', 'block');
   $('#FullScreenDIV').css('display', 'none');
   $('#PlayInFullScreen').text('Play Audio');

   FLLSCREEN.setAttribute('onclick', 'FullScreen()');

   $('#TrocaIcon').removeClass('fa-compress');
   $('#TrocaIcon').addClass('fa-expand');

   if(testeNormalScreen == false){
    
      vid.src = "https://files.catbox.moe/li0u91.mp4"
      vid.setAttribute('onclick', 'videoBuroZombie()')     

      videoFullScreen.src = "https://files.catbox.moe/li0u91.mp4"
      videoFullScreen.title = "BuroZombie"
     
      testeFullScreen = false

   }else{
      vid.src = "https://files.catbox.moe/n16vf8.mp4"
      vid.setAttribute('onclick', 'videoMarija()') 

      videoFullScreen.src = "https://files.catbox.moe/n16vf8.mp4";
      videoFullScreen.title = "Marija";

   
      testeFullScreen = true
   }

}

$("#PlayInFullScreen").click(function() {
   if ($("video").prop('muted')) {
     $("video").prop('muted', false);
     $('#PlayInFullScreen').text('Mute Audio');
   } else {
     $("video").prop('muted', true);
     $('#PlayInFullScreen').text('Play Audio');
   }

});