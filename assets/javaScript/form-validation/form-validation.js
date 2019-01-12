var config = {
  apiKey: 'AIzaSyDDO32RIhsljwPbk3zu5WSBN2WEmEkKNF8',
  authDomain: 'recipeciprocity.firebaseapp.com',
  databaseURL: 'https://recipeciprocity.firebaseio.com',
  projectId: 'recipeciprocity',
  storageBucket: 'recipeciprocity.appspot.com',
  messagingSenderId: '816681104299'
};
firebase.initializeApp(config);

var database = firebase.database();

// when a child is added to firebase, retrieve the info
database.ref().on('child_added', function(childSnap) {
  // Convenience variables
  var recTitle = childSnap.val().Title;
  var recIngred = childSnap.val().Ingredients;
  var recDirec = childSnap.val().Directions;
  var recNotes = childSnap.val().Notes;
  var rec_date = childSnap.val().SubDate;
  var recUser = childSnap.val().User;
  var recEmail = childSnap.val().Email;
  // var newRec
  // // Create the new Recipe card
  // // newRec = $("<tr>").append(
  // //     $("<td>").text(recTitle),
  // //     $("<td>").text(recIngred),
  // //     $("<td>").text(recDirec),
  // //     $("<td>").text(recNotes),
  // // );

  // $("#newRecipe").append(newRec);
});

$('#newRecipeBtn').on('click', function(event) {
  event.preventDefault();

  var rTitle = $('#title-input')
    .val()
    .trim();
  var ingred = $('#ingredients-input')
    .val()
    .trim();
  // var img = $("#newImage").val().trim();
  var dir = $('#directions-input')
    .val()
    .trim();
  var notes = $('#notes-input')
    .val()
    .trim();
  var recDate = moment().format('LLL');

  var user = $('#username-input')
    .val()
    .trim();

  var email = $('#email-input')
    .val()
    .trim();

  // Create local temp object
  var newRecipe = {
    Title: rTitle,
    Ingredients: ingred,
    Directions: dir,
    Notes: notes,
    SubDate: recDate,
    User: user,
    Email: email
  };

  // Uploads recipe data to firebase
  database.ref().push(newRecipe);

  // Clear all text-boxes
  $('#title-input').val('');
  $('#ingredients-input').val('');
  // $("#newImage").val("");
  $('#directions-input').val('');
  $('#notes-input').val('');
  $('#username-input').val('');
  $('#email-input').val('');
});

// Form Validation Activator
$.validate({
  lang: 'en'
});
