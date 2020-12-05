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

  // Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
  var message1 = getInputVal('message1');

  // Save message
  saveMessage(name, company, email, phone, message, message1);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message,message1){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    Name: name,
    CollegeId:company,
    Email:email,
    Phone:phone,
    Laptop:message,
    PPT: message1
  });
}