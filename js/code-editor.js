const htmlInputContent = CodeMirror.fromTextArea(document.getElementById("htmlInputContent"), {
    htmlMode: true,
    autoCloseTags: true,
    matchBrackets: true,
    styleActiveLine: true,
    lineNumbers: true,
    autoCloseBrackets: true,
});

const jsInputContent = CodeMirror.fromTextArea(document.getElementById("jsInputContent"), {
    mode: "javascript",
    autoCloseTags: true,
    matchBrackets: true,
    styleActiveLine: true,
    lineNumbers: true,
    autoCloseBrackets: true,
});


const cssInputContent = CodeMirror.fromTextArea(document.getElementById("cssInputContent"), {
    mode: "css",
    autoCloseTags: true,
    matchBrackets: true,
    styleActiveLine: true,
    lineNumbers: true,
    autoCloseBrackets: true,
});


htmlInputContent.on("focus", () => areaSizeChange('htmlArea'));
jsInputContent.on("focus", () => areaSizeChange('jsArea'));
cssInputContent.on("focus", () => areaSizeChange('cssArea'));

function areaSizeChange(editorName) {
    const codeEditorClasses = ['htmlArea', 'jsArea', 'cssArea'];
    codeEditorClasses.forEach(editor => {
        if (editor === editorName) {
            document.getElementById(editor).classList.add('col-8');
            document.getElementById(editor).classList.remove('col');
            return
        }
        document.getElementById(editor).classList.add('col');
        document.getElementById(editor).classList.remove('col-8');
    })
}


htmlInputContent.on("blur", () => inputAreaSizeReset('htmlArea'));
jsInputContent.on("blur", () => inputAreaSizeReset('jsArea'));
cssInputContent.on("blur", () => inputAreaSizeReset('cssArea'));

function inputAreaSizeReset(inputArea) {
    document.getElementById(inputArea).classList.remove('col-8');
    document.getElementById(inputArea).classList.add('col');
}

htmlInputContent.on("change", () => saveAllCode('htmlInputContent', htmlInputContent.getValue()));
jsInputContent.on("change", () => saveAllCode('jsInputContent', jsInputContent.getValue()));
cssInputContent.on("change", () => saveAllCode('cssInputContent', cssInputContent.getValue()));

function saveAllCode(editor, draft) {
    localStorage.setItem(editor, JSON.stringify(draft))
}


function continueDraftCodes() {
    htmlInputContent.setValue(JSON.parse(localStorage.getItem('htmlInputContent')) || '');
    jsInputContent.setValue(JSON.parse(localStorage.getItem('jsInputContent')) || '');
    cssInputContent.setValue(JSON.parse(localStorage.getItem('cssInputContent')) || '');
}
continueDraftCodes()


function minimizeScreen() {
    minimizeClick = !minimizeClick;
    if (minimizeClick) {
        document.getElementById('iFrame').classList.add('col-12');
        document.getElementById('iFrame').classList.remove('col-6');
    } else {
        document.getElementById('iFrame').classList.add('col-6');
        document.getElementById('iFrame').classList.remove('col-12');
    }
}
