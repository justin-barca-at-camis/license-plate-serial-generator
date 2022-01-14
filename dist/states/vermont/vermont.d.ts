/**
 * Generates random serial for [Vermont](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Vermont#1967_to_present)
 *
 * **Serial format**: `ABC 123`
 *
 * **Serial range**: `AAB 100` to `HNP 223`
 *
 * ```
 * import { vermont } from 'license-plate-serial-generator'
 *
 * vermont() // 'AVW 014'
 * ```
 */
export default function vermont(): string;
