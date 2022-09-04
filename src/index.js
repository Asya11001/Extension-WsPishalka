HTMLAudioElement.prototype.stop = function () {
    this.pause();
    this.currentTime = 0.;
}
var audio = new Audio("https://cdn.jsdelivr.net/gh/Asya11001/EducationEGE@master/audio_file_testN2.mp3");
// const ws = new WebSocket("ws://localhost:5000");
const ws = new WebSocket("ws://54.245.195.129:5000");



document.addEventListener("keydown", (event) => {
    if (event.keyCode == 17) {

        // audio.play();
        document.querySelector("body > div > div").style.backgroundColor = "gray"
        a = setInterval(() => {
            ws.send("1")

        }, 1)
    }
})

document.addEventListener("keyup", (event) => {
    if (event.keyCode == 17) {
        // audio.stop();
        document.querySelector("body > div > div").style.backgroundColor = "white"
        clearInterval(a)
        ws.send("0")
    }
})


ws.onopen = (event) => {
    console.log("Подключено!")
}

ws.onclose = (event) => {
    console.log("Отключено!")
}

ws.onmessage = (event) => {
    console.log(event)
    // console.log(typeof event.data)
    if (event.data == "1") {

        audio.play()
        document.body.style.backgroundColor = "gray";
    }
    if (event.data == "0") {
        audio.stop();
        document.body.style.backgroundColor = "white";
    }

}



