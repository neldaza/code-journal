/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousSubmissionDataModel = localStorage.getItem('javascript-local-storage');
if (previousSubmissionDataModel !== null) {
  data = (JSON.parse(previousSubmissionDataModel));
}

function beforeUnload(event) {
  var dataEntriesJSON = JSON.stringify(data.entries);
  localStorage.setItem('javascript-local-storage', dataEntriesJSON);
}

window.addEventListener('beforeunload', beforeUnload);
