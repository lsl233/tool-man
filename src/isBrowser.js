import toolMan from './toolMan'

toolMan.isBrowser = function () {
	return window && window.document
}
