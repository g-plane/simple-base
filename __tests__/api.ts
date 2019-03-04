import * as simpleBase from '../src'

test('API test', () => {
  expect(simpleBase.base36.decode).toBeDefined()
  expect(simpleBase.base36.encode).toBeDefined()
  expect(simpleBase.base58.decode).toBeDefined()
  expect(simpleBase.base58.encode).toBeDefined()
  expect(simpleBase.decode).toBeDefined()
  expect(simpleBase.encode).toBeDefined()
})
