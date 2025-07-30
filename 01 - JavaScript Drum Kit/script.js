const keys = Array.from(document.getElementsByClassName('key'));
const keyMap = new Map();

const playSound = (e) => {
    if(!keyMap.has(`${e.keyCode}`)) return;

    const {key, audio} = keyMap.get(`${e.keyCode}`);
    key.classList.toggle('playing'); //Fixes bug where key is stuck on transition
    audio.currentTime = 0;
    audio.play();
}

keys.forEach((key) => {
    key.addEventListener('transitionend', e => e.propertyName === 'transform' ? e.target.classList.remove('playing') : null);
    
    const keyID = key.dataset.key;
    const audio = document.querySelector(`audio[data-key="${keyID}"]`);
    keyMap.set(keyID, {key, audio});
})

window.addEventListener('keydown', playSound);