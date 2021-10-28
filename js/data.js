/* eslint-disable no-unused-vars */
/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1

};

var previousDataJSON = localStorage.getItem('javascript.local.storage');

if (previousDataJSON !== null) {
  var dataJSON = JSON.stringify(data);
  data = JSON.parse(previousDataJSON);
}

function beforeUnload(event) {
  var dataEntriesJSON = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', dataEntriesJSON);
}

window.addEventListener('beforeunload', beforeUnload);
