import toolMan from './toolMan'

toolMan.equal = function (value, ...args) {
	return args.includes(value)
}
