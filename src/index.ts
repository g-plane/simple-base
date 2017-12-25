import encode from './encode'
import decode from './decode'
import alphabet from './alphabet/constants'

type Walker = (str: string, base: number) => string

function curry (fn: Walker, base: number) {
  return (param: string) => fn(param, base)
}

const lib: { [x: string]: Walker | { 'encode': Walker, 'decode': Walker } } = {
  encode,
  decode
}

Object.keys(alphabet).forEach(base => {
  lib[`base${base}`] = {
    encode: curry(encode, parseInt(base, 10)),
    decode: curry(decode, parseInt(base, 10))
  }
})

export default lib
