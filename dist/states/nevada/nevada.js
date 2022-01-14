"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const lib_1 = require("../../lib");
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
function nevada() {
    const left = (0, lib_1.randomNumericString)(1, 191);
    const letter = (0, bb26_1.random)(left === '191' ? 'T' : 'Z');
    const right = (0, lib_1.randomNumericString)(`${left}${lib_1.interpunct}${letter}` === `191${lib_1.interpunct}T` ? 71 : 99);
    return left + lib_1.interpunct + letter + right;
}
exports.default = nevada;
