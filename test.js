const { SecondsToDuration, MilliSecondsToDate, MilliSecondsToSeconds } = require("./lib/index.js");
const ms = require("ms")

const data = MilliSecondsToDate(3600000)
const data2 = SecondsToDuration(8280, { Lengthy: false })
const data3 = MilliSecondsToSeconds(3600000);

console.log(data) // 15/4/2022, 7:53:12 pm
console.log(data2) // 2 hours, 18 minutes
console.log(data3) // 3600