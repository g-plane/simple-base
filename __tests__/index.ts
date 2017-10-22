import encode from '../src/encode'
import decode from '../src/decode'

test('base36 encode', () => {
  expect(encode('hello', 36)).toBe('5pzcszu7')
})

test('base36 decode', () => {
  expect(decode('5pzcszu7', 36)).toBe('hello')
})

test('base58 encode', () => {
  expect(encode('hello', 58)).toBe('Cn8eVZg')
})

test('base58 decode', () => {
  expect(decode('Cn8eVZg', 58)).toBe('hello')
})
