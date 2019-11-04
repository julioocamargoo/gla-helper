// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
function filterQuestions() {
    const searchValue = document.querySelector('#search').value || '';

    const filteredQuestions = quiz.filter((questionObj) => {
        return questionObj.question.toLowerCase().includes(searchValue.toLowerCase());
    });

    const filteredField = document.querySelector('#filteredQuestions');

    filteredField.innerHTML = '';

    filteredQuestions.forEach((q) => {
        console.log(q);
        filteredField.innerHTML = filteredField.innerHTML + `<div style="clear: both;">
        <div style="float:left; margin-right: 5px; width: 30px; height: 30px; background-color: ${q.answer};"></div>
        <span style="font-size: 20px; font-weight: 700;">${q.question}</span>
      </div>
      <br />`;
    });
}
