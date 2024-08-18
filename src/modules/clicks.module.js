import { Module } from '../core/module'
export class ClicksModule extends Module {
	constructor() {
		super('click', 'Аналитика кликов')
		this.countClick = 0
		this.countDblClick = 0
		this.timeRemaining = 0
		this.totalTime = 0
	}

	trigger() {
		alert('Вам нужно установить лимит времени (максимум 1 час)!')
		let userPrompt = Number(prompt('Введите время в секундах (максимум 3600 сек = 60 минут = 1 час):', 5))

		if (isNaN(userPrompt) || userPrompt <= 0) {
			alert('Пожалуйста введите число больше 0')
			return
		}

		// Limit Time
		if (userPrompt > 3600) {
			alert(
				'Лимит времени превышен! Максимальное время 3600 секунд (1 час).'
			)
			userPrompt = 3600
		}

		this.countClick = 0
		this.countDblClick = 0
		this.timeRemaining = userPrompt
		this.totalTime = userPrompt

		// Render ==============================

		// Render UI 1.0V
		// const { countdownElement, progressBar, clickCounter, dblClickCounter } =
		// 	this.renderUI()

		// Render UI 2.0V
		const uiElements = this.renderUI()

		// Single click
		const clickHandler = () => {
			this.countClick++
			uiElements.clickCounter.textContent = `Одиночные клики: ${this.countClick}`
		}

		// Double click
		const dblClickHandler = () => {
			this.countDblClick++
			uiElements.dblClickCounter.textContent = `Двойные клики: ${this.countDblClick}`
		}

		// Event Click && Double click
		document.addEventListener('click', clickHandler)
		document.addEventListener('dblclick', dblClickHandler)

		// Add Interval count and progress-bar
		const countdownInterval = setInterval(() => {
			this.timeRemaining--
			uiElements.countdownElement.textContent = `Осталось времени: ${this.timeRemaining} секунд`
			uiElements.progressBar.style.width = `${
				(this.timeRemaining / this.totalTime) * 100
			}%`

			if (this.timeRemaining <= 0) {
				clearInterval(countdownInterval)
				document.removeEventListener('click', clickHandler)
				document.removeEventListener('dblclick', dblClickHandler)
				alert(
					`Время вышло! Вы сделали ${this.countClick} одиночных кликов и ${this.countDblClick} двойных кликов`
				)
				// Remove element UI
				this.cleanupUI(uiElements.uiContainer)
			}
		}, 1000)
	}

	renderUI() {
		// Create Container
		const uiContainer = document.createElement('div')
		uiContainer.className = 'click-analytics-ui'

		//  Create element for ui time remaining
		const countdownElement = document.createElement('div')
		countdownElement.className = 'countdown-text'
		countdownElement.textContent = `Time remaining: ${this.timeRemaining} seconds`

		// Create ProgressBar
		const progressBarContainer = document.createElement('div')
		progressBarContainer.className = 'progress-bar-container'

		const progressBar = document.createElement('div')
		progressBar.className = 'progress-bar'
		progressBarContainer.appendChild(progressBar)

		// Create element for ui count click
		const clickCounter = document.createElement('div')
		clickCounter.className = 'click-counter'
		clickCounter.textContent = `Одиночные клики ${this.countClick}`

		const dblClickCounter = document.createElement('div')
		dblClickCounter.className = 'dblclick-counter'
		dblClickCounter.textContent = `Двойные клики ${this.countDblClick}`

		// Add all element to container
		uiContainer.appendChild(countdownElement)
		uiContainer.appendChild(progressBarContainer)
		uiContainer.appendChild(clickCounter)
		uiContainer.appendChild(dblClickCounter)
		document.body.appendChild(uiContainer)

		return {
			uiContainer,
			countdownElement,
			progressBar,
			clickCounter,
			dblClickCounter,
		}
	}

	cleanupUI(container) {
		//  Delete UI element from DOM
		document.body.removeChild(container)
	}
}
