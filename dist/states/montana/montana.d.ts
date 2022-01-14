/**
 * Generates random serial for [Montana](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Montana#1976_to_present)
 *
 * **Serial format**: `1-12345A` or `10-1234A`, where left half is county code
 *
 * ```
 * import { montana } from 'license-plate-serial-generator'
 *
 * montana() // '5-95754R'
 * ```
 */
export default function montana(): string;
