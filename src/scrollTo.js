import toolMan from './toolMan'

toolMan.scrollTo = function (y, speed) {
	if (!speed) {
		document.body.scrollTop = document.documentElement.scrollTop = y
		return
	}

	let nowTop = document.body.scrollTop + document.documentElement.scrollTop

	const animation = () => {
		requestAnimationFrame(() => {
			if (nowTop === y) return
			nowTop = nowTop - speed
			document.body.scrollTop = document.documentElement.scrollTop = nowTop
			animation()
		})
	}
	animation()
}
