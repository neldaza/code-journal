/* eslint-disable no-unused-vars */
/* global data */
/* exported data */
var $photoUrl = document.querySelector('.photo-url');
var $img = document.querySelector('img');
var $entryForm = document.querySelector('.entry-form');
var $form = document.querySelector('form');

function srcUpdate(event) {
  $img.setAttribute('src', $photoUrl.value);

}

$img.addEventListener('input', srcUpdate);

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

function entryDOMTree(entry) {
  var li = document.createElement('li');
  var divPictureColumnHalf = document.createElement('div');
  var img = document.createElement('img');
  var divDescriptionColumnHalf = document.createElement('div');
  var h1 = document.createElement('h1');
  var p = document.createElement('p');

  li.setAttribute('class', 'row');
  divPictureColumnHalf.setAttribute('class', 'column-half');
  img.setAttribute('src', entry.photoUrlValue);
  divDescriptionColumnHalf.setAttribute('class', 'column-half');

  var entryTitle = document.createTextNode(entry.photoTitleValue);
  var photoDescription = document.createTextNode(entry.commentsValue);
  h1.appendChild(entryTitle);
  p.appendChild(photoDescription);

  li.append(divPictureColumnHalf, divDescriptionColumnHalf);
  divPictureColumnHalf.append(img);
  divDescriptionColumnHalf.append(h1, p);

}

function loadedDOM(event) {
  for (var i = 0; i < data.entries.length; i++) {
    window.append(entryDOMTree(data.entries[i]));
  }
}

window.addEventListener('DOMContentLoaded', loadedDOM);
