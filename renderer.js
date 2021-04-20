// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
let timeout = null;

function search() { 
    clearTimeout(timeout);
    timeout = setTimeout(filterQuestions, 250);
  }

function filterQuestions() {
    const searchValue = document.getElementById('search').value || null;

    const filteredQuestions = searchValue ? quiz.filter((questionObj) => {
        return questionObj.question.includes(searchValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""));
    }) : quiz;

    const filteredField = document.getElementById('filteredQuestions');

    filteredField.innerHTML = '';

    filteredQuestions.slice(0, 3).forEach((q) => {
        filteredField.innerHTML = filteredField.innerHTML + `<div style="clear: both;">
        <div style="float:left; margin-right: 5px; width: 30px; height: 30px; background-color: ${q.answer};"></div>
        <span style="font-size: 20px; font-weight: 700;">${q.question}</span>
      </div>
      <br />`;
    });
}
