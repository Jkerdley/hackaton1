import { Module } from '../core/module'

export class ClicksModule extends Module {
  constructor() {
    super('click', 'Аналитика кликов')
    this.countClick = 0
    this.countDblClick = 0
    this.countRightClick = 0
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

    // Ограничение времени
    if (userPrompt > 3600) {
      alert(
        'Лимит времени превышен! Максимальное время 3600 секунд (1 час).'
      )
      userPrompt = 3600
    }

    this.countClick = 0
    this.countDblClick = 0
    this.countRightClick = 0
    this.timeRemaining = userPrompt
    this.totalTime = userPrompt

    // Отрисовка интерфейса ==============================

    // Отрисовка интерфейса 2.0V
    const uiElements = this.renderUI()

    // Обработчик одиночного клика
    const clickHandler = () => {
      this.countClick++
      uiElements.clickCounter.textContent = `Одиночные клики: ${this.countClick}`
    }

    // Обработчик двойного клика
    const dblClickHandler = () => {
      this.countDblClick++
      uiElements.dblClickCounter.textContent = `Двойные клики: ${this.countDblClick}`
    }

    // Обработчик клика правой кнопкой мыши
    const rightClickHandler = (event) => {
      event.preventDefault()
      this.countRightClick++
      uiElements.rightClickCounter.textContent = `Клики правой кнопкой: ${this.countRightClick}`
    }

    // Добавление событий клика и двойного клика
    document.addEventListener('click', clickHandler)
    document.addEventListener('dblclick', dblClickHandler)
    document.addEventListener('contextmenu', rightClickHandler)

    // Добавление интервала для отсчета времени и прогресс-бара
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
        document.removeEventListener('contextmenu', rightClickHandler)
        alert(
          `Время вышло! Вы сделали ${this.countClick} одиночных кликов, ${this.countDblClick} двойных кликов и ${this.countRightClick} кликов правой кнопкой`
        )
        // Удаление элементов интерфейса
        this.cleanupUI(uiElements.uiContainer)
      }
    }, 1000)
  }

  renderUI() {
    // Создание контейнера
    const uiContainer = document.createElement('div')
    uiContainer.className = 'click-analytics-ui'

    // Создание элемента для отображения оставшегося времени
    const countdownElement = document.createElement('div')
    countdownElement.className = 'countdown-text'
    countdownElement.textContent = `Осталось времени: ${this.timeRemaining} секунд`

    // Создание прогресс-бара
    const progressBarContainer = document.createElement('div')
    progressBarContainer.className = 'progress-bar-container'

    const progressBar = document.createElement('div')
    progressBar.className = 'progress-bar'
    progressBarContainer.appendChild(progressBar)

    // Создание элемента для отображения количества одиночных кликов
    const clickCounter = document.createElement('div')
    clickCounter.className = 'click-counter'
    clickCounter.textContent = `Одиночные клики: ${this.countClick}`

    const dblClickCounter = document.createElement('div')
    dblClickCounter.className = 'dblclick-counter'
    dblClickCounter.textContent = `Двойные клики: ${this.countDblClick}`

    const rightClickCounter = document.createElement('div')
    rightClickCounter.className = 'rightclick-counter'
    rightClickCounter.textContent = `Клики правой кнопкой: ${this.countRightClick}`

		// Добавляем все элементы в контейнер
		uiContainer.appendChild(countdownElement)
    uiContainer.appendChild(progressBarContainer)
    uiContainer.appendChild(clickCounter)
    uiContainer.appendChild(dblClickCounter)
    uiContainer.appendChild(rightClickCounter)
    document.body.appendChild(uiContainer)

		return {
			uiContainer,
      countdownElement,
      progressBar,
      clickCounter,
      dblClickCounter,
      rightClickCounter,
		}
	}

	cleanupUI(container) {
		//  Удаляем UI элемент из DOM
		document.body.removeChild(container)
	}
}
