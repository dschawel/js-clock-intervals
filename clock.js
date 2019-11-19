let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let second = document.getElementById('second')
let degreesSec = 6
let degreesMin = 6
let degreesHour = 30
var now = Date('November 18, 19 22:29:00 GMT-08:00')

const secondRotation = () => {
    var el = document.getElementById('second');
        el.style.transform = "rotate(" + degreesSec + "deg)";
        degreesSec += 6;
    }
setInterval(secondRotation, 1000)

const minuteRotation = () => {
    var el = document.getElementById('minute');
        el.style.transform = "rotate(" + degreesMin + "deg)";
        degreesMin += 6;
}
setInterval(minuteRotation, 60000)

const hourRotation =  () => {
    var el = document.getElementById('hour');
        el.style.transform = "rotate(" + degreesHour + "deg)";
        degreesHour += 30;
}
setInterval(hourRotation, 3600000)

const setTime = () => {
    var el = new Date
}
console.log(now.getTime())
dateObj.setTime(timeValue)
