"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const random_item_1 = __importDefault(require("random-item"));
const lib_1 = require("../../lib");
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
function kansas() {
    const numbers = (0, lib_1.randomNumericString)(302);
    const lettersRange = (0, bb26_1.range)(numbers === '000' ? 'LJX' : 'AAA', numbers === '302' ? 'PLA' : 'AAAA').filter((letters) => !/[IOQ]/.test(letters));
    const letters = (0, random_item_1.default)(lettersRange);
    return `${numbers} ${letters}`;
}
exports.default = kansas;
