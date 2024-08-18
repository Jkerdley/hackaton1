import { Module } from '../core/module'
import { getRandomColor, random } from '../utils'

const effects = [cirlce, buble, spark]

export class MouseEffectModule extends Module {
	trigger() {
		document.body.removeEventListener('mousemove', this.func)
		this.func = this.mousemoveHandler()
		console.log(this.func)

		document.body.addEventListener('mousemove', this.func)
	}
	mousemoveHandler() {
		return effects[random(0, effects.length - 1)]
	}
}

function cirlce(e) {
	const figure = creeateFigure(e.clientX, e.clientY)
	figure.style.borderRadius = '50%'
	figure.style.transform = ' scale(2)'
	document.body.append(figure)

	setTimeout(() => {
		figure.style.transform = 'scale(10)'
		figure.style.opacity = '0.2'

		setTimeout(() => {
			figure.remove()
		}, 500)
	}, 100)
}

function buble(e) {
	const figure = creeateFigure(e.clientX, e.clientY)
	figure.style.borderRadius = '50%'
	figure.style.transform = ' translateY(0px)'
	document.body.append(figure)

	setTimeout(() => {
		figure.style.top = '100%'
		figure.style.opacity = '.5'

		setTimeout(() => {
			figure.remove()
		}, 1000)
	}, 100)
}

function spark(e) {
	const figure = creeateFigure(e.clientX, e.clientY)
	figure.style.transform = `translate(
    ${random(-10, 10)}px, ${random(-10, 10)}px)`

	document.body.append(figure)

	setTimeout(() => {
		figure.style.opacity = '.5'
		figure.style.transform = `translate(
      ${random(-50, 50)}px, ${random(-50, 50)}px)`

		setTimeout(() => {
			figure.remove()
		}, 1000)
	}, 100)
}

function creeateFigure(x, y) {
	const figure = document.createElement('div')
	figure.style.cssText =
		'border-radius: 50%; transition: .5s; transform: scale(2)'
	figure.style.width = '10px'
	figure.style.height = '10px'
	figure.style.backgroundColor = getRandomColor()
	figure.style.position = 'absolute'
	figure.style.top = `${y}px`
	figure.style.left = `${x}px`
	return figure
}
