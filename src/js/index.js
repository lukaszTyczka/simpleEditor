import '../scss/main.scss';
import SetupLoadPreferenceAndLoad from './preferenceOperations/loadPreference';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

var textArea = document.querySelector('.editor__textarea--js');
textArea.value = localStorage.getItem('savedText');

var clearButton = document.querySelector('.editor__button--clear--js');
clearButton.addEventListener('click', () => {
    localStorage.removeItem('savedText');
    textArea.value = '';
});
var saveButton = document.querySelector('.editor__button--save--js');
saveButton.addEventListener('click', () => {
    localStorage.setItem('savedText', textArea.value);
});
var loadButton = document.querySelector('.editor__button--load--js');
loadButton.addEventListener('click', () => {
    var text = localStorage.getItem('savedText');
    console.log(text);
    console.log('textArea: ', textArea.innerHTML);
    textArea.value = localStorage.getItem('savedText');
});
