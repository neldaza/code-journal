/* eslint-disable no-unused-vars */
/* global data */
/* exported data */
var $photoUrl = document.querySelector('.photo-url');
var $img = document.querySelector('img');
var $entryForm = document.querySelector('.entry-form');
var $comments = document.querySelector('.comments');
var $photoTitle = document.querySelector('.photo-title');
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
  // eslint-disable-next-line no-undef
  submissionDataModel.push(submissionObject);
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();

}

$entryForm.addEventListener('submit', submitFunction);
