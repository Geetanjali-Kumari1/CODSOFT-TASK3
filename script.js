setInterval(clock,1000);

function clock(){
    let date = new Date();
    let time= date.toLocaleTimeString();
    document.getElementById("time").innerHTML=time;
}