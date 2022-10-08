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

   var messagesRef = database.ref('contactform');
  
  document.getElementById('contactform').addEventListener('submit',submitform);

  function submitform(e){
      e.preventDefault();

      var name = getInputVal('name');
      var email = getInputVal('email');
      var category = getInputVal('category');
      var message = getInputVal('message');

      saveMessages(name, email, category,  message);

      document.querySelector('.alert').style.display = 'block';
      setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';

      },3000);

      document.getElementById('contactform').reset();
  }

  function getInputVal(id){
      return document.getElementById(id).value;
  }

  function saveMessages(name,email,category,message){
      var newMessagesRef = messagesRef.push();

      newMessagesRef.set({
          name: name,
          email: email,
          category: category,
          message: message

      });
  }


  