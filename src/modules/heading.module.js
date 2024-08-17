import {Module} from '../core/module'

export class HeadingModule extends Module {
	  constructor() {
    super('heading', 'Random Heading');
  }
	trigger() {
		console.log('Hello heading')
	}
}