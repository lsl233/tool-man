import toolMan  from './toolMan'

const store = {
	get(key) {
		const result = localStorage.getItem(key)
		return JSON.parse(result)
	},
	set(key, value) {
		if (toolMan.isArray(value) || toolMan.isObject(value)) {
			value = JSON.stringify(value)
		} else {
			value = value.toString()
		}
		localStorage.setItem(key, JSON.stringify(value))
	}
}

toolMan.store = store
