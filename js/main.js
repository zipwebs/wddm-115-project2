//    let isUpdated = false; // flag to track the content state

function toggleContent() {
    const paragraph = document.getElementById('update-info');

    if (!isUpdated) {
        paragraph.innerHTML = 'This HTML is updated by the fucntion called <span class=\"blue-text\">toggleContent()<span>. If you click it again it will remove this html';
    } else {
        paragraph.innerHTML = '';
    }

    isUpdated = !isUpdated; // toggle the flag
}

function toggleSectionColor() {
    const element = document.getElementById('change-bg');

    if (element.classList.contains('white-background')) {
        element.classList.remove('white-background');
        element.classList.add('blue-background');
    } else {
        element.classList.remove('blue-background');
        element.classList.add('white-background');
    }
}