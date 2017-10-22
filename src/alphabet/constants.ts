const alphabet: { [x: string]: string } = {
  2: '01',
  8: '01234567',
  11: '0123456789a',
  16: '0123456789abcdef',
  32: '0123456789ABCDEFGHJKMNPQRSTVWXYZ',
  36: '0123456789abcdefghijklmnopqrstuvwxyz',
  58: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
  62: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  64: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  66: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.!~'
}

export default alphabet
