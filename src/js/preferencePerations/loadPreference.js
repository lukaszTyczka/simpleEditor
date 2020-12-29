export default function SetupLoadPreferenceAndLoad() {
    loadPreference();
}

function loadPreference() {
    console.log('load preference');
    document.documentElement.style.setProperty('--background-color', '#333');
    document.documentElement.style.setProperty('--font-color', '#ccc');
}
