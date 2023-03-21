let btn = document.getElementById("btn");
let i = 0;
let words = ["click me again", "and again", "again", "click me more", "more", " and more", "please more", "faster", "and faster", "as fast as you can", "YEAH, DON'T STOP", "YEAH YEAH", "YEAH YEAH YEAH"]
let w = 0;
let gachi = new Audio("rip-ears.mp3");
gachi.volume = 0.7;
let conf = new Audio("confetti.mp3")

btn.addEventListener("click", function clickme(event) {

    console.log(i)
    event.target.style.color = "gray";
    setTimeout(() => {
        event.target.style.color = "white";
    }, 70);

    if (i < 5) {
        btn.innerHTML = words[w];
        w++;
    }

    if (i == 9) {
        btn.innerHTML = words[w];
        w++;
    }

    if (i == 14) {
        btn.innerHTML = words[w];
        w++;
    }

    if (i == 18) {
        btn.innerHTML = words[w];
        w++;
    }

    if (i == 25) {
        btn.innerHTML = words[w];
        w++;
    }

    if (i == 32) {
        btn.innerHTML = words[w];
        w++;
    }

    if (i == 45) {
        btn.innerHTML = words[w];
        w++;
    }

    if (i == 48) {
        btn.innerHTML = words[w];
        w++;
    }

    if (i == 51) {
        btn.innerHTML = words[w];
        w++;

        // create AudioContext and GainNode
        const audioCtx = new AudioContext();
        const gainNode = audioCtx.createGain();

        // connect audio file to gainNode and gainNode to audioContext
        const source = audioCtx.createMediaElementSource(gachi);
        source.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        // set initial gain value and time constant
        const initialGain = 0.1;
        const timeConstant = 1;

        // set gain value exponentially increasing over time
        const now = audioCtx.currentTime;
        gainNode.gain.setValueAtTime(initialGain, now);
        gainNode.gain.exponentialRampToValueAtTime(1, now + timeConstant);

        gachi.play();

        gachi.onended = () => {
            conf.play();
            btn.style.display = "none";
            document.querySelector('body').style.backgroundImage = `url(hb.jpg)`;
        }
    }


    i++
});

