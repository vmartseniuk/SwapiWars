
import { hexToRgb } from './util';

describe('config/util', () => {

  it('length = 3', () => {
    expect(hexToRgb('#012')).toBe('0, 17, 34')
  })
  it('length < 3', () => {
    expect(hexToRgb).toThrow('input is not a valid hex color.')
  })

})
