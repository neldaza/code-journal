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
var $li = document.querySelector('li');
var $comments = document.querySelector('.comments');
var $photoTitle = document.querySelector('.photo-title');
var $entriesButton = document.querySelector('.header-category');
var $iSelectorAll = document.querySelectorAll('i');

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
  if (data.editing === null) {
    submissionObject.entryId = data.nextEntryId;
    data.nextEntryId++;
    data.entries.unshift(submissionObject);
    $ul.prepend(entryDOMTree(submissionObject));
    $form.reset();
    $noRecorded.className = 'view hidden';
    switchView('entries');
  } else {
    for (var i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === data.editing.entryId) {
        var $liSelectorAll = document.querySelectorAll('li');
        for (var a = 0; a < $liSelectorAll.length; a++) {
          if (data.entries[i].entryId === parseInt($liSelectorAll[a].getAttribute('data-entry-id'))) {
            data.entries[i].photoUrlValue = photoUrlValue;
            data.entries[i].photoTitleValue = photoTitleValue;
            data.entries[i].commentsValue = commentsValue;
            var dataEntry = data.entries[i];
            var newTree = entryDOMTree(dataEntry);
            var oldTree = $liSelectorAll[a];
            $ul.replaceChild(newTree, oldTree);
            $form.reset();
            $noRecorded.className = 'view hidden';
            switchView('entries');
          }
        }
      }
    }
    data.editing = null;
  }
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

$photoUrl.addEventListener('input', srcUpdate);
$entryForm.addEventListener('submit', submitFunction);

/// //////////////////////

/// // SWITCHING VIEWPORT BACK AND FORTH //////
var $deleteEntryButton = document.querySelector('.delete-entry');
var $deleteModal = document.querySelector('.cancel-background');

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
  $form.reset();
  var buttonDataView = event.target.getAttribute('data-view');
  $formImg.setAttribute('src', 'images/placeholder-image-square.jpg');
  $deleteEntryButton.className = 'delete-entry hidden';
  switchView(buttonDataView);
}

function edit(event) {
  event.preventDefault();
  if (event.target.className === 'fas fa-pen') {
    $deleteEntryButton.className = 'delete-entry view';
    for (var i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === parseInt(event.target.closest('li').getAttribute('data-entry-id'))) {
        data.editing = data.entries[i];
        $formImg.setAttribute('src', data.entries[i].photoUrlValue);
        $photoUrl.value = data.entries[i].photoUrlValue;
        $photoTitle.value = data.entries[i].photoTitleValue;
        $comments.value = data.entries[i].commentsValue;
        switchView(event.target.getAttribute('data-view'));

      }
    }

  }
}

function showDeleteModal(event) {
  $deleteModal.className = 'cancel-background flex justify-center position-fixed view';
}

$deleteEntryButton.addEventListener('click', showDeleteModal);
$ul.addEventListener('click', edit);
$entriesButton.addEventListener('click', handleViewNavigation);
$newButton.addEventListener('click', handleViewNavigation);
