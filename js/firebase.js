/*
Made by Lucas Silva
License: none (public domain)
*/

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAJHl-kDBPO1WmCzyDG1Qi5mDyxSSS-8Hs",
    authDomain: "site-69fda.firebaseapp.com",
    databaseURL: "https://site-69fda.firebaseio.com",
    projectId: "site-69fda",
    storageBucket: "",
    messagingSenderId: "120605157625"
  };
  firebase.initializeApp(config);

//Número de inscritos
const tagInscritos = document.getElementById('inscritos');
const tagInscritosMb = document.getElementById('inscritosmb');

var ref = firebase.database().ref();
ref.once("value").then(function(snapshot){
  var numeroInscritos = snapshot.child("participante").numChildren();

  tagInscritosMb.innerText = numeroInscritos;
  tagInscritos.innerText = numeroInscritos;
});

//Número de Vagas
var query = ref.child("participante").orderByKey();
var vagasCorel6 = 0;
var vagasWeb6 = 0;
var vagasGit = 0;
var vagasAngular = 0;
var vagasCorel7 = 0;
var vagasWeb8 = 0;
var vagasLaravel = 0;
var vagasApi = 0;
var vagasEntrevista = 0;

query.once("value").then(function(snapshot){
  snapshot.forEach(function(childSnapshot){
    if(childSnapshot.child("corel6").val()==true){
      vagasCorel6 = vagasCorel6 + 1;
    }
    if(childSnapshot.child("web6").val()==true){
      vagasWeb6 = vagasWeb6 + 1;
    }
    if(childSnapshot.child("git").val()==true){
      vagasGit = vagasGit + 1;
    }
    if(childSnapshot.child("angular").val()==true){
      vagasAngular = vagasAngular + 1;
    }
    if(childSnapshot.child("corel7").val()==true){
      vagasCorel7 = vagasCorel7 + 1;
    }
    if(childSnapshot.child("web8").val()==true){
      vagasWeb8 = vagasWeb8 + 1;
    }
    if(childSnapshot.child("laravel").val()==true){
      vagasLaravel = vagasLaravel + 1;
    }
    if(childSnapshot.child("api").val()==true){
      vagasApi = vagasApi + 1;
    }
    if(childSnapshot.child("entrevista").val()==true){
      vagasEntrevista = vagasEntrevista + 1;
    }
  });

  if(vagasCorel6 <= 25){
    vagas = 25 - vagasCorel6;
    document.getElementById("desc-corel6").innerHTML = " (" + vagas +" Vagas)";
  }else{
    document.getElementById("corel6").disabled = true;
    document.getElementById("desc-corel6").innerHTML = " (ESGOTADO)";
  }
  if(vagasWeb6 <= 25){
    vagas = 25 - vagasWeb6;
    document.getElementById("desc-web6").innerHTML = " (" + vagas +" Vagas)";
  }else{
    document.getElementById("web6").disabled = true;
    document.getElementById("desc-web6").innerHTML = " (ESGOTADO)";
  }

  if(vagasGit <= 25){
    vagas = 25 - vagasGit;
    document.getElementById("desc-git").innerHTML = " (" + vagas +" Vagas)";
  }else{
    document.getElementById("git").disabled = true;
    document.getElementById("desc-git").innerHTML = " (ESGOTADO)";
  }
  if(vagasAngular <= 30){
    vagas = 30 - vagasAngular;
    document.getElementById("desc-angular").innerHTML = " (" + vagas +" Vagas)";
  }else{
    document.getElementById("angular").disabled = true;
    document.getElementById("desc-angular").innerHTML = " (ESGOTADO)";
  }
  if(vagasCorel7 <= 25){
    vagas = 25 - vagasCorel7;
    document.getElementById("desc-corel7").innerHTML = " (" + vagas +" Vagas)";
  }else{
    document.getElementById("corel7").disabled = true;
    document.getElementById("desc-corel7").innerHTML = " (ESGOTADO)";
  }
  if(vagasWeb8 <= 25){
    vagas = 25 - vagasWeb8;
    document.getElementById("desc-web8").innerHTML = " (" + vagas +" Vagas)";
  }else{
    document.getElementById("web8").disabled = true;
    document.getElementById("desc-web8").innerHTML = " (ESGOTADO)";
  }
  if(vagasLaravel <= 25){
    vagas = 25 - vagasLaravel;
    document.getElementById("desc-laravel").innerHTML = " (" + vagas +" Vagas)";
  }else{
    document.getElementById("laravel").disabled = true;
    document.getElementById("desc-laravel").innerHTML = " (ESGOTADO)";
  }
  if(vagasApi <= 25){
    vagas = 25 - vagasApi;
    document.getElementById("desc-api").innerHTML = " (" + vagas +" Vagas)";
  }else{
    document.getElementById("api").disabled = true;
    document.getElementById("desc-api").innerHTML = " (ESGOTADO)";
  }
  if(vagasEntrevista <= 40){
    vagas = 40 - vagasEntrevista;
    document.getElementById("desc-entrevista").innerHTML = " (" + vagas +" Vagas)";
  }else{
    document.getElementById("entrevista").disabled = true;
    document.getElementById("desc-entrevista").innerHTML = " (ESGOTADO)";
  }
});
