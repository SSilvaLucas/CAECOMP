/*
Made by Lucas Silva
License: none (public domain)
*/

const botao = document.querySelector("#adiciona-participante");

const database = firebase.database().ref();
const nodoParticipante = database.child('participante');

botao.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#formId");

  var participante = obtemParticipanteFormulario(form);
  var keyParticipante = form.cpf.value;

  if(validaParticipante(participante)){
    nodoParticipante.child(keyParticipante).set(participante);
    resetForm(form);
    alert("Inscrição realizada com sucesso! Nos vemos no evento!")
  }else{
    alert("Não foi possível realizar a inscrição!")
  }
});

function obtemParticipanteFormulario(form){
  var participante = {
    nome: form.nome.value,
    email: form.email.value,
    cpf: form.cpf.value,
    endereco: form.endereco.value,
    ddd: form.ddd.value,
    telefone: form.telefone.value,
    nascimento: form.nascimento.value,
    rg: form.rg.value,
    ra: form.ra.value,
    curso: form.curso.value,
    turno: form.turno.value,
    serie: form.serie.value,
    corel6: form.corel6.checked,
    web6: form.web6.checked,
    git: form.git.checked,
    angular: form.angular.checked,
    corel7: form.corel7.checked,
    web8: form.web8.checked,
    laravel: form.laravel.checked,
    api: form.api.checked,
    entrevista: form.entrevista.checked,
    frequencia: 0
  }
  return participante;
}

function validaParticipante(participante){
  if(participante.nome.length == 0){
      alert("Nome está em branco!");
      return false;
  }

  if(participante.email.length == 0){
      alert("O campo email está em branco!");
      return false;
  }

  if(participante.cpf.length == 0){
      alert("O campo CPF está em branco!");
      return false;
  }

  if(!validaCpf(participante.cpf)){
      alert("Número de CPF inválido!");
      return false;
  }

  return true;
}

function validaCpf(cpf) {
    var soma;
    var resto;
    soma = 0;

    if (cpf == "00000000000"){
        return false;
    }
    for (i=1; i<=9; i++){
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
        resto = (soma * 10) % 11;
    }
    if ((resto == 10) || (resto == 11)){
        resto = 0;
    }
    if (resto != parseInt(cpf.substring(9, 10))){
        return false;
    }
	  soma = 0;
    for (i = 1; i <= 10; i++){
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
        resto = (soma * 10) % 11;
    }
    if ((resto == 10) || (resto == 11)){
        resto = 0;
    }
    if (resto != parseInt(cpf.substring(10, 11))){
        return false;
    }
    return true;
}

function resetForm(form) {
    var inputs = form.getElementsByTagName('input');
    for (var i = 0; i<inputs.length; i++) {
        switch (inputs[i].type) {
            case 'text':
                inputs[i].value = '';
                break;
            case 'email':
                inputs[i].value = '';
                break;
            case 'number':
                inputs[i].value = '';
                break;
            case 'tel':
                inputs[i].value = '';
                break;
            case 'date':
                inputs[i].value = '';
                break;
            case 'radio':
            case 'checkbox':
                inputs[i].checked = false;
                break;
        }
    }

    var selects = form.getElementsByTagName('select');
    for (var i = 0; i<selects.length; i++)
        selects[i].selectedIndex = 0;

    var text= form.getElementsByTagName('textarea');
    for (var i = 0; i<text.length; i++)
        text[i].innerHTML= '';

    return false;
}
