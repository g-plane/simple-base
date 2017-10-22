declare module 'simple-base' {
  /**
   * Encode a string
   */
  function encode (source: string, base: number): string

  /**
   * Decode a encoded string
   */
  function decode (encoded: string, base: number): string

  namespace base36 {
    /**
     * Encode a string to a base36-encoded string
     */
    function encode (source: string): string

    /**
     * Decode a base36-encoded string
     */
    function decode (encoded: string): string
  }

  namespace base58 {
    /**
     * Encode a string to a base58-encoded string
     */
    function encode (source: string): string

    /**
     * Decode a base58-encoded string
     */
    function decode (encoded: string): string
  }
}
