declare module 'simple-base' {
  function encode (source: string, base: number): string
  function decode (encoded: string, base: number): string

  namespace base36 {
    function encode (source: string): string
    function decode (encoded: string): string
  }

  namespace base58 {
    function encode (source: string): string
    function decode (encoded: string): string
  }
}
