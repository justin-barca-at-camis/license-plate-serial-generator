// Spec, as of 2019-01:
// - Format: `ABC 1234`, where `AB` is county code

import counties from './mississippi-counties'
import mississippi from './mississippi'
import testSerial from '../../modules/test-serial'
import testSerialFormat from '../../modules/test-serial-format'
import toUpperCase from '../../modules/to-upper-case'

describe('Mississippi', () => {
  testSerialFormat(mississippi(), /[A-Z]{3} \d{4}/)

  testSerial(
    'Should start with a two-letter county code followed by a single character',
    mississippi(),
    serial => {
      const validCountyCodes = counties
        .reduce((codes, county) => codes.concat(county.codes), [] as string[])
        .map(toUpperCase)

      expect(validCountyCodes).toContain(serial.slice(0, 2))
      expect(serial[2]).toMatch(/[A-Z]/)
    },
  )
})
