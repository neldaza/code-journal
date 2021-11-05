/* eslint-disable no-unused-vars */
/* global data */
/* exported data */
var $photoUrl = document.querySelector('.photo-url');
var $formImg = document.querySelector('.placeholder-img');
var $entryForm = document.querySelector('.entry-form');
var $form = document.querySelector('form');
var $ul = document.querySelector('ul');

/// SUBMIT FORM ONLY ///

function srcUpdate(event) {
  $formImg.setAttribute('src', $photoUrl.value);

}

function submitFunction(event) {
  event.preventDefault();

  var photoTitleValue = $form.elements.photoTitle.value;
  var commentsValue = $form.elements.comments.value;
  var photoUrlValue = $form.elements.photoUrl.value;
  var submissionObject = { photoTitleValue, photoUrlValue, commentsValue };
  submissionObject.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(submissionObject);
  $formImg.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();

}

function entryDOMTree(entry) {
  var li = document.createElement('li');
  var divPictureColumnHalf = document.createElement('div');
  var img = document.createElement('img');
  var divDescriptionColumnHalf = document.createElement('div');
  var h1 = document.createElement('h1');
  var p = document.createElement('p');
  var photoTitleValue = $form.elements.photoTitle.value;
  var commentsValue = $form.elements.comments.value;
  var photoUrlValue = $form.elements.photoUrl.value;

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

  return li;
}
for (var i = 0; i < data.entries.length; i++) {
  var entries = data.entries[i];
  $ul.appendChild(entryDOMTree(entries));
}

$photoUrl.addEventListener('input', srcUpdate);
$entryForm.addEventListener('submit', submitFunction);

/// //////////////////////

/// // SWITCHING VIEWPORT BACK AND FORTH //////
var $entryFormSelectorAll = document.querySelectorAll('.entry-form');
var $newButton = document.querySelector('.new-button');

function switchToForm(event) {
  for (var i = 0; i < $entryFormSelectorAll.length; i++) {
    if ($entryFormSelectorAll[i].className !== 'entry-form active') {
      $entryFormSelectorAll[i].className = 'entry-form active';
    } else {
      $entryFormSelectorAll[i].className = 'entry-form inactive';
    }

  }
}

$newButton.addEventListener('click', switchToForm);
$entryForm.addEventListener('submit', switchToForm);
/// ////////////////////////
