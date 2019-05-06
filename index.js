/*Created By Omkar Kandale*/

window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#641E16",
        "#512E5F",
        "#154360",
        "#0E6251",
        "#145A32",
        "#186A3B",
        "#7D6608"
    ];

    //For the sound
    pads.forEach((pad, index) => {
        pad.addEventListener("mouseover", function () {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    //For visualization
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1.5s ease";
        bubble.addEventListener("animationend", function () {
            visual.removeChild(this);
        });
    };
});
