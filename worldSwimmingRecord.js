// 1.	Рекордът в секунди – реално число в интервала [0.00 … 100000.00]
// 2.	Разстоянието в метри – реално число в интервала [0.00 … 100000.00]
// 3.	Времето в секунди, за което плува разстояние от 1 м. - реално число в интервала [0.00 … 1000.00]



function worldSwimmingRecord(input) {
    let recordsSeconds = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let secondsPerMeter = Number(input[2]);

    let time = distanceMeters * secondsPerMeter; //15 175,51
    let delay = Math.floor(distanceMeters / 15) * 12.5;
    let totalTime = time + delay;

    if(totalTime < recordsSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    } else if(totalTime >= recordsSeconds){
        let neededTime = totalTime - recordsSeconds;
        console.log(`No, he failed! He was ${neededTime.toFixed(2)} seconds slower.`);
    }

  
}

worldSwimmingRecord([55555.67, 3017, 5.03])

