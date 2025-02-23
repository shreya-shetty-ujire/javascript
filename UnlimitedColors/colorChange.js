var colorGenerator=function(){
    const hex="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){ //#FFFFFF
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color
}

let intervalId;
var startAction=function(){
    if(!intervalId){
        intervalId=setInterval(changeBgColor,1000)
    }
    
    function changeBgColor(){
        document.body.style.backgroundColor=colorGenerator();
    }
    
}
var stopAction=function(){
    clearInterval(intervalId)
    intervalId=null
}

document.querySelector("#start").addEventListener('click',startAction)
document.querySelector("#stop").addEventListener('click',stopAction)



