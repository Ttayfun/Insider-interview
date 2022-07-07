const iFrame = document.getElementById('iFrame');
let iFrameContent = iFrame.contentWindow.document

function runProject() {
    // open =>  write =>  close,  don't loop compile
    iFrameContent.open();
    iFrameContent.writeln(htmlInputContent.getValue() + '<style>' + cssInputContent.getValue() + '</style>' + '<script>' + jsInputContent.getValue() + '</script>');
    iFrameContent.close();
}
