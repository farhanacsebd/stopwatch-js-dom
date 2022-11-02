/* let tans = 0;
let secs = 0;
let mins = 0;
let getTan = document.querySelector('.tens');
let getSec = document.querySelector('.seconds');
let getMin = document.querySelector('.mins');
let interval;

function start(){
    interval = setInterval(startTimer, 10)
}

function stop(){
    clearInterval(interval);
}
function reset(){
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    mins = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    getMins.innerHTML = mins;
}

function startTimer(){
    tans++;
    if(tans <= 9){
        getTan.innerHTML = '0' + tans;
    }
    if(tans > 9){
        getTan.innerHTML = tans;
    }
    if(tans > 99){
        secs++;
        getSec.innerHTML = '0' + secs;
        tans = 0;
        getTan.innerHTML = '0' + 0;
    }
    if(secs <= 9){
        getSec.innerHTML = '0' + secs;
    }
    if(secs > 9){
        getSec.innerHTML = secs;
    }
    if(secs > 59){
        mins ++;
        getMin.innerHTML = '0' + mins;
        secs = 0;
        getSec.innerHTML = '0' + 0;
    }
    if(mins <= 9){
        getMin.innerHTML = '0' + mins;
    }
} */


let seconds = 00;
let tens = 00;
let mins = 00;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let getMins = document.querySelector('.mins');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let interval;

btnStart.addEventListener('click', () => {
    clearInterval(interval);
    inverval = setInterval(startTimer, 10);
})
btnStop.addEventListener('click', () => {
    clearInterval(inverval);
})
btnReset.addEventListener('click', () => {
    clearInterval(inverval);
    tens = '00';
    seconds = '00';
    mins = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    getMins.innerHTML = mins;
})

function startTimer(){
    tens++;
    if(tens <= 9){
        getTens.innerHTML = '0' + tens;
    }
    if(tens > 9){
        getTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        mins++;
        getMins.innerHTML = '0' + mins;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
    if(mins > 9){
        getSeconds.innerHTML = mins;
    }
}