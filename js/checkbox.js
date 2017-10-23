/*
Made by Lucas Silva
License: none (public domain)
*/

$(document).on('click', '.limited', function(){
   var limit = 3;
   var counter = $('.limited:checked').length;
   if(counter > limit) {
      this.checked = false;
      alert('Você deve escolher no máximo três opções de minicursos');
   }
});

$(document).on('click', '.dia6', function(){
   var limit = 1;
   var counter = $('.dia6:checked').length;
   if(counter > limit) {
      this.checked = false;
      alert('Só é possivel participar de um minicurso por dia');
   }
});

$(document).on('click', '.dia7', function(){
   var limit = 1;
   var counter = $('.dia7:checked').length;
   if(counter > limit) {
      this.checked = false;
      alert('Só é possivel participar de um minicurso por dia');
   }
});

$(document).on('click', '.dia8', function(){
   var limit = 1;
   var counter = $('.dia8:checked').length;
   if(counter > limit) {
      this.checked = false;
      alert('Só é possivel participar de um minicurso por dia');
   }
});

$(document).on('click', '.dia10', function(){
   var limit = 1;
   var counter = $('.dia10:checked').length;
   if(counter > limit) {
      this.checked = false;
      alert('Só é possivel participar de um minicurso por dia');
   }
});
