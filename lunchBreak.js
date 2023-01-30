// 1.	Име на сериал – текст
// 2.	Продължителност на епизод  – цяло число в диапазона [10… 90]
// 3.	Продължителност на почивката  – цяло число в диапазона [10… 120]



function lunchBreak(input) {
    let seriesName = input[0];
    let seriesDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = breakDuration / 8;
    let relaxTime = breakDuration / 4;
    let timeLeft = breakDuration - lunchTime - relaxTime;

    if(timeLeft >= seriesDuration){
        let minutesLeft = Math.ceil(timeLeft - seriesDuration);
        console.log(`You have enough time to watch ${seriesName} and left with ${minutesLeft} minutes free time.`);
    } else if(timeLeft < seriesDuration){
        let neededTime = Math.ceil(seriesDuration - timeLeft);
        console.log(`You don't have enough time to watch ${seriesName}, you need ${neededTime} more minutes.`);
    }
   
    
}

lunchBreak(["Teen Wolf",
"48",
"60"])
