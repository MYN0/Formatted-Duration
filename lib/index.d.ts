declare namespace Options{
    interface DataString{
        /**
         * @Displays the duration in hours, minutes, seconds
         * @This can be useful when you want to show the duration in hours, minutes, seconds instead of the normal duration.
         * @By setting the "Lengthy" option to "true" you're disallowing the option "false"
         * 
         * @default false
         */

        Lengthy? : boolean
    }
}
/**
 * @Converts seconds into duration  `1302` ➟ `21:7`
 * @param value ★The specified value
 * @param {options} Choose the duration long/short form of the duration
 * @throws {Error} If the specified value isn't valid
 * 
 * @SampleExample
 ```
     CommonJS
    const { SecondsToDuration } = require("@myno_21/formatted-duration");
    ECMAScript
    import { SecondsToDuration } from "@myno_21/formatted-duration";

    const data  = SecondsToDuration(130.2)
    console.log(data); //➟ 2:17
    ```
 */

export function SecondsToDuration(value?: Number, options?: Options.DataString);

declare namespace newOptions{
    interface DataString{
        /**
         * @Displays the date in long format rather than ``14/04/22``
         * @By setting the option "ShowFullDate" to "true" you're disallowing the option "false"
            @default false 
        */

            ShowFullDate?: boolean

            /**
             * @Displays the time only rather than the date ```3:04:11 pm```
             *  @By setting the option "ShowTimeOnly" to "true" you're disallowing the option "false"
            * @default false 
             */

             ShowTimeOnly?: boolean

    }
}

/**
 * @Converts Milliseconds to a Date! 
 * @param value ★The milliseconds specified value
 * @param {options} Choose the date long/short format of the date
 * @param {ShowTimeOnly} Show only the time.
 * @throws {Error} Throws an error if the specified value isn't valid.
 * 
 * @SampleExample
 * ```

     CommonJS
    const { MilliSecondsToDate } = require("@myno_21/formatted-duration");
    ECMAScript
    import { MilliSecondsToDate } from "@myno_21/formatted-duration";

// Show full date ◢◤ ↧
const ShowFullDate = MilliSecondsToDate(130200, { ShowFullDate: true });
console.log(data); //➟ Fri Apr 15 2022, 2:56:32 pm

// Show time only ◢◤ ↧
const ShowTimeOnly = MilliSecondsToDate(130200, { ShowTimeOnly: true });
console.log(ShowTimeOnly); //➟ 3:04:11 pm

// Default ◢◤ ↧
const normal = MilliSecondsToDate(130200);
console.log(normal); //➟ 15/4/2022, 3:06:23 pm
```
 */

export function MilliSecondsToDate(value?: number, options?: newOptions.DataString): Number;


/**
 *@Converts MilliSeconds to seconds!
 * @param value ★ The specified MIlliSeconds value
* @throws {Error} Throws an error if the specified value isn't valid.
*
    @SampleExample
    ```    
    CommonJS
    const { MilliSecondsToSeconds } = require("@myno_21/formatted-duration");
    ECMAScript
    import { MilliSecondsToSeconds } from "@myno_21/formatted-duration";

    const ShowFullDate = MilliSecondsToSeconds(9000000)
    console.log(data); //➟ 9000
    ```

*/

export function MilliSecondsToSeconds(value? :number): Number