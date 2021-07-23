
//SELECTING ELEMENTS THAT I WILL USE TO MANIPULATE
let digitalElement = document.querySelector('.digital')
let sElement = document.querySelector('.p_s')
let mElement = document.querySelector('.p_s')
let hElement = document.querySelector('.p_s')

function updateClock(){
    let now = new Date()
    let hour = now.getHours
    let minute = now.getMinutes
    let second = now.getSeconds

    digitalElement.innerHTML = `${hour}:${minute}:${second}:`
}

setInterval(updateClock, 1000)