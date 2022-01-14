/**
 * Generates random serial for [Kansas](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Kansas#1975_to_present) as of 2021-09-25
 *
 * **Serial format**: `123 ABC`
 *
 * **Serial range**: `000 LJX` to `302 PKZ`
 *
 * **Constraints**:
 *
 * - Letters `I`, `O`, and `Q` not used after `FFQ`
 * - Number `666` not used
 *
 * ```
 * import { kansas } from 'license-plate-serial-generator'
 *
 * kansas() // '245 SGG'
 * ```
 */
export default function kansas(): string;
