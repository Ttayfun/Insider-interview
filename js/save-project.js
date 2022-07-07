const projectNameInput = document.getElementById("projectNameInput");
const saveModalButton = document.getElementById('saveModalButton');

document.addEventListener('keydown', e => {
    if ((e.ctrlKey && e.key === 's') || (e.metaKey && e.key === 's')) {
        e.preventDefault();
        runProject();
    }
});

function openSaveModal() {
    if (htmlInputContent.getValue() || jsInputContent.getValue() || cssInputContent.getValue()) {
        $('#saveModal').modal('show');
    } else {
        alert('No data to save');
    }
}

function closeModal() {
    $('#saveModal').modal('hide');
}

function saveProject() {
    let projectData = JSON.parse(localStorage.getItem('projectHistories')) || [];
    if (projectNameInput.value) {
        projectData.push({
            id: Math.floor(Math.random() * 100000),
            title: projectNameInput.value,
            html: htmlInputContent.getValue(),
            js: jsInputContent.getValue(),
            css: cssInputContent.getValue()
        });
        localStorage.setItem('projectHistories', JSON.stringify(projectData))
        document.getElementById('projectNameInput').value = '';
        closeModal();
        getAllProjects();
    }
}

function onChangeNameInput() {
    saveModalButton.disabled = projectNameInput.value.length <= 0;
}

onChangeNameInput();

