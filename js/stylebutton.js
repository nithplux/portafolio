 //funcion para boton CV COLOR
 document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.cv');
  
    button.addEventListener('click', function() {
      button.classList.add('clicked');
    });
  
    button.addEventListener('blur', function() {
      button.classList.remove('clicked');
    });
  });
   //FUNCION PARA BOTON CV
  document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('buttona');
    var imageContainer = document.getElementById('cont');
    var imageAdded = false;
  
    button.addEventListener('click', function() {
      if(!imageAdded){
        var imageElement = document.createElement('img');
      imageElement.src = 'https://readme-typing-svg.demolab.com/?font=Roboto+Mono&duration=6000&pause=5000&color=32CD32&width=500&lines=!Gracias+por+descargar+mi+CV!';
      imageContainer.appendChild(imageElement);
      imageAdded = true; 
      }
      
  });
  });