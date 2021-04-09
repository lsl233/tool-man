import toolMan from './toolMan'

class Store {
	constructor () {
		this.catch = {}
	}

	get (key, converter) {
		const value = localStorage.getItem(key)
		let result
		if (toolMan.isFn(converter)) {
			result = converter(value)
		} else {
			result = JSON.parse(value)
		}
		this.catch[key] = result
		return result
	}

	getFromCatch (key, converter) {
		const catchValue = this.catch[key]
		if (catchValue) {
			return catchValue
		}
		return this.get(key, converter)
	}

	clearCatch(key) {
		if (key) {
			delete this.catch[key]
		} else {
			this.catch = {}
		}
	}

	set (key, value, converter) {
		if (toolMan.isFn(converter)) {
			value = converter(value)
		} else {
			if (toolMan.isArray(value) || toolMan.isObject(value)) {
				value = JSON.stringify(value)
			} else {
				value = value.toString()
			}
		}
		localStorage.setItem(key, value)
	}
}

toolMan.store = new Store()
