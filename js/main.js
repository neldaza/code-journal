/* global data */
/* exported data */
var $photoUrl = document.querySelector('.photo-url');
var $img = document.querySelector('img');
var $entryForm = document.querySelector('.entry-form');
var $form = document.querySelector('form');

function srcUpdate(event) {
  $img.setAttribute('src', $photoUrl.value);

}

$photoUrl.addEventListener('input', srcUpdate);

function submitFunction(event) {
  event.preventDefault();

  var photoTitleValue = $form.elements.photoTitle.value;
  var commentsValue = $form.elements.comments.value;
  var photoUrlValue = $form.elements.photoUrl.value;
  var submissionObject = { photoTitleValue, photoUrlValue, commentsValue };
  submissionObject.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(submissionObject);
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();

}

$entryForm.addEventListener('submit', submitFunction);
