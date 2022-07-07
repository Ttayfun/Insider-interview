function getAllProjects() {
    const select = document.getElementById('selectBox');
    const codeHistories = JSON.parse(localStorage.getItem('projectHistories'));
    if (codeHistories.length > 0) {
        select.innerHTML = '';
        select.appendChild(new Option('Select Project'));
        codeHistories.forEach((item) => {
            let opt = document.createElement('option');
            opt.innerHTML = item.title;
            opt.value = item.id;
            select.appendChild(opt);
        })
    }
}

getAllProjects();

const select = document.getElementById('selectBox');
select.addEventListener('change', () => {
    const codeHistories = JSON.parse(localStorage.getItem('projectHistories'))
    const selectedProject = codeHistories.find(item => item.id == select.value);
    htmlInputContent.setValue(selectedProject.html);
    jsInputContent.setValue(selectedProject.js);
    cssInputContent.setValue(selectedProject.css);
    runProject();
});
