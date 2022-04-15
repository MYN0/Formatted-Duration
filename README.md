<div align="center">
<img src="./img/watch.gif" alt="stopwatch" width="200">

# Formatted Duration!

Format seconds/milliseconds to a date/duration without struggling a bit!

## Features 🎈

- Converts Milliseconds to seconds
- Converts seconds to a duration also includes some options.
- Converts Milliseconds to a human readable date.

# ❔Installation

</div>

```
 $ npm install @myno_21/formatted-duration
```

# Example 🎁

```js
//CommonJS
const { SecondsToDuration, MilliSecondsToDate, MilliSecondsToSeconds } = require("@myno_21/formatted-duration");

//ECMAScript/ESM
import { SecondsToDuration, MilliSecondsToDate, MilliSecondsToSeconds } from "@myno_21/formatted-duration"';

const data = MilliSecondsToDate(3600000)
const data2 = SecondsToDuration(8280, { Lengthy: true })
const data3 = MilliSecondsToSeconds(3600000);

console.log(data) // 15/4/2022, 7:53:12 pm
console.log(data2) // 2 hours, 18 minutes, 02:18:00
console.log(data3) // 3600

```

## Similar packages

- [@myno_21/time](https://www.npmjs.com/package/@myno_21/time) _(Get a unix timestamps, timezone, humanreadable-time without struggling a bit!)_
