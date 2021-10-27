/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var submissionDataModel = [];
var previousSubmissionDataModel = localStorage.getItem('javascript-local-storage');
if (previousSubmissionDataModel !== null) {
  submissionDataModel = JSON.parse(previousSubmissionDataModel);
}

function beforeUnload(event) {
  var submissionDataModelJSON = JSON.stringify(submissionDataModel);
  localStorage.setItem('javascript-local-storage', submissionDataModelJSON);
}

window.addEventListener('beforeunload', beforeUnload);
