/**
 * Generates random serial for [Minnesota](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Minnesota#1955_to_present)
 *
 * **Serial format**: `ABC-123`
 *
 * **Serial range**: `AAA-001` to `DBY-020`
 *
 * ```
 * import { minnesota } from 'license-plate-serial-generator'
 *
 * minnesota() // 'ADZ-278'
 * ```
 */
export default function minnesota(): string;
