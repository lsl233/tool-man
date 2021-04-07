import toolMan  from './toolMan'

const store = {
	get(key, converter) {
		const value = localStorage.getItem(key)
		let result
		if (converter) {
			result = converter(value)
		} else {
			result = JSON.parse(result)
		}
		return result
	},
	set(key, value, converter) {
		if (converter) {
			value = converter(value)
		} else {
			if (toolMan.isArray(value) || toolMan.isObject(value)) {
				value = JSON.stringify(value)
			} else {
				value = value.toString()
			}
		}
		localStorage.setItem(key, JSON.stringify(value))
	}
}

toolMan.store = store
