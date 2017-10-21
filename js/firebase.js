

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

  const preObject = document.getElementById('inscritos');
  const preObjectMb = document.getElementById('inscritosmb');

  const dbRefObject = firebase.database().ref().child('inscritos');

  dbRefObject.on('value', snap => {
    preObject.innerText = JSON.stringify(snap.val(), null, 1);
    preObjectMb.innerText = JSON.stringify(snap.val(), null, 1);
  });
