
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

const ring = new Audio("ring.wav");
const playSound = () => {
    ring.play()
}
const timer = (mins) => {
   let seconds = mins*60 || 0;     
   let interval = setInterval(function() {
 
        seconds--;
        updateClock(seconds)
        console.log(seconds);
        if(!seconds){
             clearInterval(interval);             
        }
        if (seconds === 0){
            playSound();
        }

   },1000)

   
};

const updateClock = (seconds) => {
    const hour = 3600;
    const mins = 60;
    let hoursLeft = seconds / hour;
    if (hoursLeft < 1){
        hoursLeft = 0;
    }else{
        hoursLeft = Math.floor(hoursLeft)
    }
    seconds -= hoursLeft * hour;
    let minsLeft = seconds / mins;
    if (minsLeft < 1){
        minsLeft = 0;
    }else{
        minsLeft = Math.floor(minsLeft)
    }
    seconds -= minsLeft * mins;

    hoursLeft = hoursLeft.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })
      minsLeft = minsLeft.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })
      seconds = seconds.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })
        
    console.log(hoursLeft, ':', minsLeft, ':', seconds)
    const updated_hours = document.querySelector("#hours");
    const updated_mins = document.querySelector("#mins");
    const updated_seconds = document.querySelector("#seconds");
    updated_hours.textContent = hoursLeft;
    updated_mins.textContent = minsLeft;
    updated_seconds.textContent = seconds;
};

const start = () => {
    const study1 = document.querySelector("#study1").value;
    if (study1 >= 1 && study1 <= 60){
        timer(study1);
        startBtn.classList.toggle("invisible");
        stopBtn.classList.toggle("invisible");
    }else{
        alert("Minimun 1min, Max 60mins, PLEEEEEZZZZ!");
    } 
} 

startBtn.addEventListener("click", start);