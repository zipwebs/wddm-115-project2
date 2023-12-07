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
function toggleSectionHeadingDecoration() {
    const element = document.getElementById('styled-header');

    if (element.classList.contains('normal')) {
        element.classList.remove('normal');
        element.classList.add('styled-header');
    } else {
        element.classList.remove('styled-header');
        element.classList.add('normal');
    }
}
function duplicateMe() {
    const buttonToDuplicate = document.getElementById('duplicateMe');

    if (buttonToDuplicate) {
        // Create a copy of the button
        const clonedButton = buttonToDuplicate.cloneNode(true);

        // Optional: Give the cloned button a new ID or remove the ID to avoid duplicate IDs
        clonedButton.removeAttribute('id');

        // Append the cloned button after the original button
        buttonToDuplicate.parentNode.insertBefore(clonedButton, buttonToDuplicate.nextSibling);
    }
}
function printToConsoleSimple(){
	console.log("Javascript is a very powerful scripting language that has solidify itself as one of the top three of the internet!");
}
function showAlert() {
    alert("This is a simple alert box for WDDM - 113, which doesn't give the user a great experience. But it get the job done when needed!");
}
