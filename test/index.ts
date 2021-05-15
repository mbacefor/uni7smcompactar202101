'use strict';

import { expect } from 'chai';
import { AlgoritmosCompressao } from '../dist/index';

describe('AlgoritmosCompressao class', () => {
	it('should create an instance using its constructor', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		expect(example, 'example should exist').to.exist; // tslint:disable-line:no-unused-expression
	});
	it('should return whatever is passed to exampleMethod()', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = 'This is my param.';
		const returnValue: string = example.exampleMethod(param);
		expect(returnValue).to.equal(param, 'returns the value passed as a parameter');
	});
	it('Teste do comprimeFequenciaCaractere com parametro: AAAAAHHHFGGGGBBPEEECCCCCCDLLLLRR', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = 'AAAAAHHHFGGGGBBPEEECCCCCCDLLLLRR';
		const returnValue: string = example.comprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('5A3H1F4G2B1P3E6C1D4L2R', 'Retorna o valor comprimido');
	});
});