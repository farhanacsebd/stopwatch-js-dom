let tans = 0;
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
    clearInterval(inverval);
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
}