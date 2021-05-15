'use strict';

import { Logger } from 'sitka';

export class AlgoritmosCompressao {
	/* Private Instance Fields */

	private _logger: Logger;

	/* Constructor */

	constructor() {
		this._logger = Logger.getLogger({ name: this.constructor.name });
	}

	/* Public Instance Methods */

	public exampleMethod(param: string): string {
		this._logger.debug('Received: ' + param);
		return param;
	}

	/* Public Instance Methods */

	public comprimeFequenciaCaractere(param: string): string {
		this._logger.debug('Received: ' + param);

		let i = 0;
		let textoComprimido: string = '';
		// fazer loop em todos os caracteres da string de entrada
		while (i < param.length) {
			let repeticoes = 1;
			const caracter = param.charAt(i);
			while (caracter === param.charAt(++i)) {
				repeticoes++;
			}
			textoComprimido +=  repeticoes + caracter;
		}

		return textoComprimido;
	}

}

const algoritmosCompressao = new AlgoritmosCompressao();

const textoOrigem = 'AAAAAHHHFGGGGBBPEEECCCCCCDLLLLRR';

// const textoSaida = '5A3H1F4G2B1P3E6C1D4L2R';

algoritmosCompressao.comprimeFequenciaCaractere(textoOrigem);





