window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#686868",
        "#60d3c4"
    ];

    console.log(sounds[0])
    // sounds
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            // before play the sound, needs to clean and make playing smooth.
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    // create a function that makes bubles
    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    }

});