import toolMan from './toolMan'

toolMan.tick = function (fn, ms = 1000) {
	const timer = setInterval(() => {
		fn(done)
	}, ms)
	const done = () => clearInterval(timer)
	fn(done)
}
