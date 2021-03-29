import toolMan from './toolMan'

const getValue = (obj, key) => obj[key]

/**
 *
 * @param obj
 * @param path
 * @param defaultValue
 * @returns {*}
 */
toolMan.deepGet = function (obj, path, defaultValue = void 0) {
	path = Array.isArray(path) ? path : path.split('.')
	for (const item of path) {
		obj = getValue(obj, item)
		if (!obj) return defaultValue
	}
	return obj
}
