$(document).on('click', '.limited', function(){
   var limit = 3;
   var counter = $('.limited:checked').length;
   if(counter > limit) {
      this.checked = false;
      alert('Você deve escolher no máximo três opções de minicursos');
   }
});
