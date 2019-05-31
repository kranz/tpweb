/* global describe, it, before */

import chai from 'chai';
import { TpSocket } from '../lib/tpweb.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my TpSocket library', () => {
  before(() => {
    lib = new TpSocket();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Barra-Tempest');
    });
  });
});