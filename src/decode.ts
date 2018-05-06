import alphabetMap from './alphabet/index'

export default function (encoded: string, base: number) {
  const bytes = [0]
  let c: string
  let carry: number
  let i = 0
  let j: number

  if (encoded.length === 0) {
    return ''
  }

  while (i < encoded.length) {
    c = encoded[i]

    if (!(c in alphabetMap[base])) {
      return ''
    }

    j = 0
    while (j < bytes.length) {
      bytes[j] *= base
      j++
    }

    bytes[0] += alphabetMap[base][c]
    carry = 0

    j = 0
    while (j < bytes.length) {
      bytes[j] += carry
      carry = bytes[j] >> 8
      bytes[j] &= 0xff
      ++j
    }

    while (carry) {
      bytes.push(carry & 0xff)
      carry >>= 8
    }

    i++
  }

  return String.fromCharCode(...(bytes.reverse()))
}
