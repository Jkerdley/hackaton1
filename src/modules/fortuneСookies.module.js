import { Module } from '../core/module'
import { random } from '../utils'

export class FortuneCookies extends Module {
	constructor() {
		super('fortune', 'Печеньки с предсказаниями')
		this.containerFortune = null
	}

	async fetchFortuneData() {
		const BASE_URL_API = 'https://jsonplaceholder.typicode.com/posts'
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

	removePreviousContainer() {
		if (this.containerFortune) {
			this.containerFortune.remove()
			this.containerFortune = null
		}
	}

	async trigger() {
		// Удалил предыдущий контейнер, если он существует
		this.removePreviousContainer()

		this.containerFortune = document.createElement('div')
		const containerRow = document.createElement('div')
		const titleFortune = document.createElement('h1')
		const btnFortune = document.createElement('button')
		const btnFortuneRemove = document.createElement('button')
		const randomTitle = document.createElement('h2')

		// Content
		titleFortune.textContent = 'Fortune Cookies'
		btnFortune.textContent = 'Выдать печеньку :)'
		btnFortuneRemove.textContent = 'Закрыть печеньку :('

		// ClassName
		this.containerFortune.className = 'container__fortune'
		containerRow.className = 'fortune-row'
		btnFortune.className = 'heading-close-button'
		btnFortuneRemove.className = 'heading-close-button_remove'

		// Add UI
		this.containerFortune.append(containerRow, randomTitle)
		containerRow.append(btnFortuneRemove, titleFortune, btnFortune)
		document.body.appendChild(this.containerFortune)

		const data = await this.fetchFortuneData()

		btnFortuneRemove.addEventListener('click', e => {
			if (e.target) {
				this.removePreviousContainer()
			} else {
				randomTitle.textContent = 'Кнопка с печенька не работает'
				setTimeout(() => {
					this.removePreviousContainer()
				}, 20000)
			}
		})

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
			} else {
				randomTitle.textContent = 'Печенька не найдена'
				setTimeout(() => {
					this.removePreviousContainer()
				}, 20000)
			}
		})
	}
}