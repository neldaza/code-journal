/* eslint-disable no-unused-vars */
/* global data */
/* exported data */
var $photoUrl = document.querySelector('.photo-url');
var $formImg = document.querySelector('.placeholder-img');
var $entryForm = document.querySelector('.entry-form');
var $form = document.querySelector('form');
var $ul = document.querySelector('ul');
var $entryFormSelectorAll = document.querySelectorAll('.view');
var $newButton = document.querySelector('.new-button');
var $noRecorded = document.querySelector('.no-recorded');
var $liSelectorAll = document.querySelectorAll('li');
var $li = document.querySelector('li');

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
  $noRecorded.className = 'view hidden';
  switchView('entries');
  $ul.prepend(entryDOMTree(submissionObject));

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

  var i = document.createElement('i');
  li.setAttribute('class', 'row');
  divPictureColumnHalf.setAttribute('class', 'column-half');
  img.setAttribute('src', entry.photoUrlValue);
  img.setAttribute('class', 'list-img');
  divDescriptionColumnHalf.setAttribute('class', 'column-half');
  i.setAttribute('class', 'fas fa-pen');
  i.setAttribute('data-view', 'entry-form');
  h1.setAttribute('class', 'flex space-between');
  li.setAttribute('data-entry-id', entry.entryId);

  var entryTitle = document.createTextNode(entry.photoTitleValue);
  var photoDescription = document.createTextNode(entry.commentsValue);
  h1.append(entryTitle, i);
  p.appendChild(photoDescription);

  li.append(divPictureColumnHalf, divDescriptionColumnHalf);
  divPictureColumnHalf.append(img);
  divDescriptionColumnHalf.append(h1, p);
  return li;
}

for (var i = 0; i < data.entries.length; i++) {
  var entries = data.entries[i];
  $ul.append(entryDOMTree(entries));
}

// 1. define edit function
// 2. if the edit icon was clicked,
// 3. loop through the data model entries,
// 4. find the matching entry object and assign it to data.editing
function edit() {
  if (event.target === $pencil) {
    for (var i = 0; i < data.entries.length; i++) {
      data.editing = data.entries[i];
    }
  }
}

$ul.addEventListener('click', edit);
$photoUrl.addEventListener('input', srcUpdate);
$entryForm.addEventListener('submit', submitFunction);

/// //////////////////////

/// // SWITCHING VIEWPORT BACK AND FORTH //////

if (data.entries.length !== 0) {
  $noRecorded.className = 'view hidden';

}

function switchView(viewName) {
  for (var i = 0; i < $entryFormSelectorAll.length; i++) {
    if ($entryFormSelectorAll[i].getAttribute('data-view') === viewName) {
      $entryFormSelectorAll[i].className = 'view';
    } else {
      $entryFormSelectorAll[i].className = 'view hidden';
    }
  }
}

function handleViewNavigation(event) {
  var buttonDataView = event.target.getAttribute('data-view');
  switchView(buttonDataView);
}

var $entriesButton = document.querySelector('.header-category');
var $pencil = document.querySelector('i');

$entriesButton.addEventListener('click', handleViewNavigation);
$newButton.addEventListener('click', handleViewNavigation);
$pencil.addEventListener('click', handleViewNavigation);
