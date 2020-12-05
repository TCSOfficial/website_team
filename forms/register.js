var firebaseConfig = {
    apiKey: "AIzaSyArPUCpE5mFsv2RE4yb-DQpZ50Y4kMKMbE",
    authDomain: "tcsproject-7ad86.firebaseapp.com",
    databaseURL: "https://tcsproject-7ad86.firebaseio.com",
    projectId: "tcsproject-7ad86",
    storageBucket: "tcsproject-7ad86.appspot.com",
    messagingSenderId: "1085382243022",
    appId: "1:1085382243022:web:1c3152da751c0fae08969f",
    measurementId: "G-94F725FZZC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var database = firebase.database();

  var messagesRef = database.ref('registerform');
  
  document.getElementById('registerform').addEventListener('submit',submitform);

  function submitform(e){
      e.preventDefault();

      var name = getInputVal('name');
      var collegeid = getInputVal('collegeid');
      var phone = getInputVal('phone');
      var email = getInputVal('email');
    //   var laptop= getInputval('laptop');
    //   var ppt= getInputVal('ppt');

      saveMessages(name, collegeid, phone, email);

      document.querySelector('.alert').style.display = 'block';
      setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';

      },3000);
      document.getElementById('registerform').reset();

  }

  function getInputVal(id){
      return document.getElementById(id).value;
  }

  function saveMessages(name, collegeid, phone, email){
      var newMessagesRef = messagesRef.push();

      newMessagesRef.set({
          name: name,
          collegeid: collegeid,
          phone: phone,
          email: email
      });
  }