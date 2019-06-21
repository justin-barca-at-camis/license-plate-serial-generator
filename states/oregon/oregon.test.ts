// Spec, as of 2019-05-20:
// - Format: `123 ABC`
// - Range: `001 BAA` to `006 LPV`

import oregon from './oregon'
import {
  Bb26,
  getBeginningDigits,
  getEndingLetters,
  testSerial,
  testSerialFormat,
  toUpperCase,
} from '../../lib'

describe('Oregon', () => {
  testSerialFormat(oregon(), /^\d{3} [A-Z]{3}$/)

  testSerial('Should contain valid digits', oregon(), serial => {
    const digits = getBeginningDigits(serial)
    const letters = getEndingLetters(serial)

    expect(digits.length).toBe(3)

    expect(+digits).toBeGreaterThanOrEqual(0)
    expect(+digits).toBeLessThanOrEqual(letters === 'LPV' ? 6 : 999)
  })

  testSerial('Should contain valid letters', oregon(), serial => {
    const letters = getEndingLetters(serial)

    expect(letters.length).toBe(3)

    const validLetters = Bb26.range({ start: 'baa', end: 'lpw' })
      .map(toUpperCase)

    expect(validLetters).toContain(letters)
  })
})
