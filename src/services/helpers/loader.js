/**
 * Loads the WASM modules
 */

class Loader {
  async load() {
    if (this._wasm && this._wasm2) return;
    /**
     * @private
     */
    this._wasm = await import(
        //'../../temporary_modules/@emurgo/cardano-serialization-lib-nodejs/cardano_serialization_lib'
        '@emurgo/cardano-serialization-lib-nodejs'
    );

  }

  get Cardano() {
    return this._wasm;
  }

}

export default new Loader();
