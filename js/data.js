/* eslint-disable no-unused-vars */
/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
  entryId: 0
};

var previousDataJSON = localStorage.getItem('javascript.local.storage');

if (previousDataJSON !== null) {
  var dataJSON = JSON.stringify(data);
  dataJSON = JSON.parse(data.entries);
}

function beforeUnload(event) {
  var dataEntriesJSON = JSON.stringify(data.entries);
  localStorage.setItem('javascript-local-storage', dataEntriesJSON);
}

window.addEventListener('beforeunload', beforeUnload);
