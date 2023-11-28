const time=document.getElementById("time");
const buttonStart=document.getElementById("button_start");
const buttonStop=document.getElementById("button_stop");
const buttonReset=document.getElementById("button_reset");

//開始時間
let startTime;
//停止時間
let stopTime=0;
//タイムアウトID
let timeoutID;

//時間を表示する関数
function displayTime() {
    const currentTime=new Date(Date.now()-startTime+stopTime);
    const h=String(currentTime.getHours()-9).padStart(1,"0");
    const m=String(currentTime.getMinutes()).padStart(1,"0");
    const s=String(currentTime.getSeconds()).padStart(1,"0");
    const ms=String(currentTime.getMilliseconds()).padStart(3,"0").slice(0,1);

    time.textContent=`${h}:${m}:${s}:${ms}`;
    timeoutID=setTimeout(displayTime,10);
}

//スタートボタンがクリックされたら時間を進める
buttonStart.addEventListener("click",()=>{
    buttonStart.disabled=true;
    buttonStop.disabled=false;
    buttonReset.disabled=true;
    startTime=Date.now();
    displayTime();
});

//ストップボタンがクリックされたら時間を止める
buttonStop.addEventListener("click",function(){
    buttonStart.disabled=false;
    buttonStop.disabled=true;
    buttonReset.disabled=false;
    clearTimeout(timeoutID);
    stopTime+=(Date.now()-startTime);
});

//リセットボタンがクリックされたら時間を0に戻す
buttonReset.addEventListener("click",function(){
    buttonStart.disabled=false;
    buttonStop.disabled=true;
    buttonReset.disabled=true;
    time.textContent="0:0:0:0";
    stopTime=0;
});