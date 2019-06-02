import Base64 from './base64';
import Websock from './websock';

export default class TpSocket {
  constructor() {
    this._name = 'Barra-Tempest';
  }
  get name() {
    return this._name;
  }

  get encodedName() {
    let b64 = new Base64();

    return b64.encode(this._name);
  }

  get saluta() {
    return Websock.greetme();
  }
}
