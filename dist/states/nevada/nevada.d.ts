/**
 * Generates random serial for [Nevada](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Nevada#1960_to_present) as of 2021-12-11
 *
 * **Serial format**: `123·A45`
 *
 * **Serial range**: `001·A00` to `191·T71`
 *
 * ```
 * import { nevada } from 'license-plate-serial-generator'
 *
 * nevada() // '016·S63'
 * ```
 */
export default function nevada(): string;
