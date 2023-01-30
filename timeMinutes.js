function timeMinutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalTime = hours * 60 + minutes + 15;

    let time = Math.trunc(totalTime / 60);
    let seconds = totalTime % 60;

    if (time === 24) {
        time = 0;
    }

    if (seconds < 10) {
        console.log(`${time}:0${seconds}`);
    } else {
        console.log(`${time}:${seconds}`);
    }



}

timeMinutes(["23", "59"])