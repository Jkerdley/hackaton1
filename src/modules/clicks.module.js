import { Module } from '../core/module'

export class ClicksModule extends Module {
	constructor() {
		super('click', 'Click Analytics')
		this.countClick = 0
		this.countDblClick = 0
		this.timeRemaining = 0
		this.totalTime = 0
	}

	trigger() {
		alert('You have a set time limit (maximum 1 hour)!')
		let userPrompt = Number(
			prompt('Enter the time in seconds (max 3600 seconds):', '')
		)

		if (isNaN(userPrompt) || userPrompt <= 0) {
			alert('Please enter a valid number greater than 0.')
			return
		}

		// Limit Time
		if (userPrompt > 3600) {
			alert(
				'Time limit exceeded! Setting the maximum time to 3600 seconds (1 hour).'
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
			uiElements.clickCounter.textContent = `Single Clicks: ${this.countClick}`
		}

		// Double click
		const dblClickHandler = () => {
			this.countDblClick++
			uiElements.dblClickCounter.textContent = `Double Clicks: ${this.countDblClick}`
		}

		// Event Click && Double click
		document.addEventListener('click', clickHandler)
		document.addEventListener('dblclick', dblClickHandler)

		// Add Interval count and progress-bar
		const countdownInterval = setInterval(() => {
			this.timeRemaining--
			uiElements.countdownElement.textContent = `Time remaining: ${this.timeRemaining} seconds`
			uiElements.progressBar.style.width = `${
				(this.timeRemaining / this.totalTime) * 100
			}%`

			if (this.timeRemaining <= 0) {
				clearInterval(countdownInterval)
				document.removeEventListener('click', clickHandler)
				document.removeEventListener('dblclick', dblClickHandler)
				alert(
					`Time's up! You made ${this.countClick} single clicks and ${this.countDblClick} double clicks.`
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
		clickCounter.textContent = `Single Clicks: ${this.countClick}`

		const dblClickCounter = document.createElement('div')
		dblClickCounter.className = 'dblclick-counter'
		dblClickCounter.textContent = `Double Clicks: ${this.countDblClick}`

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
