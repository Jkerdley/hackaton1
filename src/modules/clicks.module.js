import {Module} from '../core/module'

export class ClicksModule extends Module {
		  constructor() {
    super('click', 'Click Analytics');
  }
	trigger() {
		console.log('Check clicks')
	}
}