import toolMan from './toolMan'

/**
 * 格式化倒计时时间
 * @param time
 * @param formatTemp
 * @returns {string}
 */
toolMan.formatCountDown = function (time, formatTemp = 'DD:HH:MM:SS') {
	const d = Math.floor(time / (1000 * 60 * 60 * 24))
	const h = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	const m = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
	const s = Math.floor((time % (1000 * 60)) / 1000)
	const map = {
		d,
		h,
		m,
		s,
		DD: String(d).padStart(2, '0'),
		HH: String(h).padStart(2, '0'),
		MM: String(m).padStart(2, '0'),
		SS: String(s).padStart(2, '0'),
	}

	return formatTemp.replace(/(DD)|(HH)|(MM)|(SS)/g, substring => map[substring])
}
