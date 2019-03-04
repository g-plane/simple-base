import alphabet from './constants'

const alphabetMap: { [x: string]: { [x: string]: number } } = {}

Object.keys(alphabet).forEach(base => {
  alphabetMap[base] = {}
  alphabet[base as '36' | '58'].split('').forEach((char, index) => {
    alphabetMap[base][char] = index
  })
})

export default alphabetMap
