/**
 * Generates random serial for [New York](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_New_York#1966_to_present)
 *
 * **Serial format**: `ABC-1234`
 *
 * **Serial range**: `FAA-1000` to `JJS-6999`
 *
 * ```
 * import { newYork } from 'license-plate-serial-generator'
 *
 * newYork() // 'GMS-7910'
 * ```
 */
export default function newYork(): string;
