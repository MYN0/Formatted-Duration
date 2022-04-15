/**
 *
 * @param {Number} time
 * @param {Object} options
 * @returns
 */

function SecondsToDuration(time, options = {}) {

    if (!time) throw new Error(`No value specified!`);

    if (options?.Lengthy) {

        if (typeof options.Lengthy !== "boolean") throw new Error(`This option is a "Boolean" You need to wether choose "true" or "false" `)


        if (time.toString()?.includes(".")) {

            const formatted = time / 60;

            const data = formatted.toString().replace(".", " minutes, ")
            return `${data} seconds`
        } else {

            const formatted = time * 1000

            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;

            // let hours = Math.floor(formatted / hour % 24);
            //  let minutes = Math.floor(formatted / minute % 60);
            //  let seconds = Math.floor(formatted / second % 60);
            let display = Number(time)
            let h = Math.floor(display / 3600);
            let m = Math.floor(display % 3600 / 60);
            let s = Math.floor(display % 3600 % 60);

            let hDisplay = h <= 9 ? '0' + h + 'hours' : h + "hours";
            let mDisplay = m <= 9 ? '0' + m + 'minutes' : m + "minutes";
            let sDisplay = s <= 9 ? '0' + s : s; + "seconds"

            if (h === 0) {

                if (s.toString()?.endsWith("0")) {
                    return `${m} minutes`;
                } else {
                    const data = time / 60;
                    const formatted = data.toString().replace(".", " minutes, ");
                    return `${formatted} seconds`
                }
            } else {
                if (s.toString().toLowerCase()?.endsWith("0")) {
                    return `${h} hours, ${m} minutes`
                } else {
                    return `${h} hours, ${m} minutes, ${s}seconds`
                }

            }
        }

    } else {

        if (time.toString()?.includes(".")) {

            const formatted = time / 60;

            const data = formatted.toString().replace(".", ":")
            return data
        } else {

            const formatted = time * 1000

            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;

            // let hours = Math.floor(formatted / hour % 24);
            // let minutes = Math.floor(formatted / minute % 60);
            // let seconds = Math.floor(formatted / second % 60);
            // const sec = parseInt(time, 60)
            // let hours = Math.floor(sec / 3600); // get hours
            // let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
            // let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
            let display = Number(time)
            let h = Math.floor(display / 3600);
            let m = Math.floor(display % 3600 / 60);
            let s = Math.floor(display % 3600 % 60);

            let hDisplay = h <= 9 ? '0' + h + ':' : h + ":";
            let mDisplay = m <= 9 ? '0' + m + ':' : m + ":";
            let sDisplay = s <= 9 ? '0' + s : s;

            if (h === 0) {

                if (s.toString()?.endsWith("0")) {
                    return `${m}:00`;
                } else {
                    const data = time / 60;
                    const formatted = data.toString().replace(".", ":");
                    return formatted
                }
            } else {
                return hDisplay + mDisplay + sDisplay;
            }
        }
    }
};


/**
 * @param {Object} options
 * @param {Number} time 
 */

function MilliSecondsToDate(time, options = {}) {
    if (!time) throw new Error(`No value specified!`);

    if (options?.ShowFullDate) {

        if (typeof options.ShowFullDate !== "boolean") throw new Error(`This option is a "Boolean" You need to wether choose "true" or "false" `)

        const date = new Date().setMilliseconds(time);
        const ForMatted = new Date(date);
        return `${ForMatted.toDateString()}, ${ForMatted.toLocaleTimeString()}`

    } else if (options.ShowTimeOnly) {
        if (typeof options.ShowTimeOnly !== "boolean") throw new Error(`This option is a "Boolean" You need to wether choose "true" or "false" `)

        const date = new Date().setMilliseconds(time);
        const ForMatted = new Date(date);
        return `${ForMatted.toLocaleTimeString()}`
    }
    else {
        const date = new Date().setMilliseconds(time);
        const ForMatted = new Date(date);
        return `${ForMatted.toLocaleDateString()}, ${ForMatted.toLocaleTimeString()}`
    }

}


/**
 * 
 * @param {Number} time 
 * @param {Object} options
 * @returns 
 */

function MilliSecondsToSeconds(time) {

    if (!time) throw new Error(`Empty value, You need to specify a value!`);
    if (time.toString().length < 5) {
        const dividation = time / 1000;
        return `${dividation} seconds`
    } else {
        const dividation = time / 1000;
        return dividation;
    };
}

module.exports = { SecondsToDuration, MilliSecondsToDate, MilliSecondsToSeconds };