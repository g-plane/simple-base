import encode from '../src/encode'
import decode from '../src/decode'

test('base36 encode', () => {
  expect(encode('', 36)).toBe('')
  expect(encode('hello', 36)).toBe('5pzcszu7')
})

test('base36 decode', () => {
  expect(decode('', 36)).toBe('')
  expect(decode('5pzcszu7', 36)).toBe('hello')
  expect(decode('1prq0yaudju1c78ts2o1oclj0ewktp', 36))
    .toBe('https://example.com')
})

test('base58 encode', () => {
  expect(encode('', 58)).toBe('')
  expect(encode('hello', 58)).toBe('Cn8eVZg')
})

test('base58 decode', () => {
  expect(decode('', 58)).toBe('')
  expect(decode('Cn8eVZg', 58)).toBe('hello')
  expect(decode('L87dwHRGadGiTf2VuVw6zHpPzt', 58))
    .toBe('https://example.com')
})
