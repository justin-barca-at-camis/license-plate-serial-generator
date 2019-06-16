// Spec, as of 2010-01-01:
// - Format: `ABC 123`
// - Ranges:
//   - `FUZ 100` to `FUZ 999`, or
//   - `GAA 100` to `GZZ 999`, or
//   - `KAA 100` to `KDY 999` (as of 2019-04-10)

import alaska from './alaska'
import { Bb26, testSerial, testSerialFormat, toUpperCase } from '../../modules'

describe('Alaska', () => {
  testSerialFormat(alaska(), /^[A-Z]{3} \d{3}$/)

  testSerial('Should contain valid letters', alaska(), serial => {
    const letters = serial.slice(0, 3)

    expect(['F', 'G', 'K']).toContain(letters[0])

    let validLetters: string[]

    switch (letters[0]) {
      case 'F':
        validLetters = ['fuz']
        break
      case 'G':
        validLetters = Bb26.range({ start: 'gaa', end: 'haa' })
        break
      case 'K':
        validLetters = Bb26.range({ start: 'kaa', end: 'kdz' })
        break
      default:
        throw new Error(`Unexpected letter sequence: '${letters}'`)
    }

    validLetters = validLetters.map(toUpperCase)

    expect(validLetters).toContain(letters)
  })

  testSerial('Should contain valid digits', alaska(), serial => {
    const letters = serial.slice(0, 3)
    const digits = serial.slice(4)

    expect(digits.length).toBe(3)

    switch (letters[0]) {
      case 'F':
        expect(+digits).toBeGreaterThanOrEqual(letters === 'FUZ' ? 100 : 1)
        expect(+digits).toBeLessThanOrEqual(999)
        break
      case 'G':
        expect(+digits).toBeGreaterThanOrEqual(letters === 'GAA' ? 100 : 1)
        expect(+digits).toBeLessThanOrEqual(999)
        break
      case 'K':
        expect(+digits).toBeGreaterThanOrEqual(letters === 'KAA' ? 100 : 1)
        expect(+digits).toBeLessThanOrEqual(letters === 'KDY' ? 641 : 999)
        break
      default:
        throw new Error(`Unexpected letter sequence: '${letters}'`)
    }
  })
})
