import { BASE_URL_API } from '../constants/contsants'
import { Module } from '../core/module'
import { random } from '../utils'

export class FortuneCookies extends Module {
	constructor() {
		super('fortune', 'Печеньки с предсказаниями')
	}

	async fetchFortuneData() {
		try {
			const response = await fetch(BASE_URL_API)

			if (!response.ok) {
				throw new Error('Error fetching data')
			}

			return await response.json()
		} catch (error) {
			console.error(`Error: ${error.message}`)
			return []
		} finally {
			console.log('Fetch completed')
		}
	}

	async trigger() {
		const containerFortune = document.createElement('div')
		const containerRow = document.createElement('div')
		const titleFortune = document.createElement('h1')
		const btnFortune = document.createElement('button')
		const randomTitle = document.createElement('h2')

		// Content
		titleFortune.textContent = 'Fortune Cookies'
		btnFortune.textContent = 'Random'

		// ClassName
		containerFortune.className = 'container__fortune'
		containerRow.className = 'fortune-row'
		btnFortune.className = 'heading-close-button'

		// Add UI
		containerFortune.append(containerRow, randomTitle)
		containerRow.append(titleFortune, btnFortune)
		document.body.appendChild(containerFortune)

		const data = await this.fetchFortuneData()

		btnFortune.addEventListener('click', e => {
			const { target } = e
			if (data.length > 0 && target) {
				const randomId = random(0, data.length - 1)
				const selectedItem = data[randomId]

				randomTitle.id = randomId
				randomTitle.style.color = `rgb(${random(0, 255)}, ${random(
					0,
					255
				)}, ${random(0, 255)})`
				randomTitle.textContent = selectedItem.title
			}
		})
	}
}
