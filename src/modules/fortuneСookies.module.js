import { Module } from '../core/module'

export class FortuneCookies extends Module {
	constructor() {
		super('fortune', 'Печеньки с предсказаниями')
	}

	trigger() {}
}
