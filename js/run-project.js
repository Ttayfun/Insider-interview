const iFrame = document.getElementById('iFrame');
let iFrameContent = iFrame.contentWindow.document
let minimizeClick = false;


function runProject() {
    if (!htmlInputContent.getValue() || !jsInputContent.getValue() || !cssInputContent.getValue()) {
        alert('No code to compile');
        return;
    }
    // open =>  write =>  close,  don't loop compile
    iFrameContent.open();
    iFrameContent.writeln(htmlInputContent.getValue() + '<style>' + cssInputContent.getValue() + '</style>' + '<script>' + jsInputContent.getValue() + '</script>');
    iFrameContent.close();
}

runProject();
