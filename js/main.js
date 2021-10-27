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

var submissionDataModel = [];

function submitFunction(event) {
  event.preventDefault();
  var photoTitleValue = $form.elements.photoTitle.value;
  var commentsValue = $form.elements.comments.value;
  var photoUrlValue = $form.elements.photoUrl.value;
  var submissionObject = { photoTitleValue, photoUrlValue, commentsValue };
  submissionDataModel.push(submissionObject);
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();

}

$entryForm.addEventListener('submit', submitFunction);

function beforeUnload(event) {
  var submissionDataModelJSON = JSON.stringify(submissionDataModel);
  localStorage.setItem('javascript-local-storage', submissionDataModelJSON);
}

window.addEventListener('beforeunload', beforeUnload);
