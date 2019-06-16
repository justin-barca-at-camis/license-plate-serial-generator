// Spec:
// - Formats:
//   - `1A1 234`
//   - `1AB 123`
//   - `10A 123`
//   - First `1/10` is county code of issuance (1-67, excluding 66)

import { getBeginningDigits, testSerial, testSerialFormat } from '../../modules'
import southDakota from './south-dakota'

describe('South Dakota', () => {
  testSerialFormat(southDakota(), /^\d([A-Z]\d|[A-Z]{2}|\d[A-Z]) \d{3}$/)

  testSerial('Should start with county code', southDakota(), serial => {
    const countyCode = getBeginningDigits(serial)

    expect(+countyCode).toBeGreaterThanOrEqual(1)
    expect(+countyCode).toBeLessThanOrEqual(67)
    expect(+countyCode).not.toBe(66)
  })

  testSerial('Should contain valid letters', southDakota(), serial => {
    const matches = serial.match(/^\d+([A-Z]+)/)
    const letters = matches ? matches[1] : ''

    expect(letters.length).toBeGreaterThanOrEqual(1)
    expect(letters.length).toBeLessThanOrEqual(2)
    expect(letters).toMatch(/^[A-Z]+$/)
  })

  testSerial('Should contain valid digits', southDakota(), serial => {
    expect(serial).toMatch(/(\d )?\d{3}$/)
  })
})
