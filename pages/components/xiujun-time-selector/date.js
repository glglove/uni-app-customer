//字符串拼接
function strFormat(str) {
	return str < 10 ? `0${str}` : str
}


//时间戳转日期
export function timeStamp(time) {
	const dates = new Date(time)
	const year = dates.getFullYear()
	const month = dates.getMonth() + 1
	const date = dates.getDate()
	const day = dates.getDay()
	const hour = dates.getHours()
	const min = dates.getMinutes()
	const days = ['日', '一', '二', '三', '四', '五', '六']
	return {
		allDate: `${year}/${strFormat(month)}/${strFormat(date)}`,
		date: `${strFormat(month)}-${strFormat(date)}`, //返回的日期 07-01
		day: `星期${days[day]}`, //返回的礼拜天数  星期一
		hour: strFormat(hour) + ':' + strFormat(min) //返回的时钟 08:00
	}
}
//获取最近7天的日期和礼拜天数
export function dateData() {
	const time = []
	const date = new Date()
	const now = date.getTime() //获取当前日期的时间戳
	let timeStr = 3600 * 24 * 1000 //一天的时间戳
	for (let i = 0; i < 7; i++) {
		const timeObj = {}
		timeObj.date = timeStamp(now + timeStr * i).date //保存日期
		timeObj.timeStamp = now + timeStr * i //保存时间戳
		if (i == 0) {
			timeObj.week = '今天'
		} else if (i == 1) {
			timeObj.week = '明天'
		} else if (i == 2) {
			timeObj.week = '后天'
		} else {
			timeObj.week = timeStamp(now + timeStr * i).day
		}
		time.push(timeObj)
	}
	return time
}
//时间数组
export function timeData(startTime = '08:00', endTime = '18:30', timeInterval = 0.5) {
	const time = []
	const date = timeStamp(Date.now()).allDate
	const startDate = `${date} ${startTime}`
	const endDate = `${date} ${endTime}`
	const startTimeStamp = new Date(startDate).getTime()
	const endTimeStamp = new Date(endDate).getTime()
	const timeStr = 3600 * 1000 * timeInterval
	console.log(startTimeStamp)
	for (let i = startTimeStamp; i <= endTimeStamp; i = i + timeStr) {
		const timeObj = {}
		timeObj.time = timeStamp(i).hour
		timeObj.disable = 1
		time.push(timeObj)
	}
	console.log(JSON.stringify(time))
	return time
}


// export const timeData = [{
//                         time: '08:00',
//                         disable: 1
//                     }, {
//                         time: '08:30',
//                         disable: 1
//                     }, {
//                         time: '09:00',
//                         disable: 1
//                     }, {
//                         time: '09:30',
//                         disable: 1
//                     }, {
//                         time: '10:00',
//                         disable: 1
//                     }, {
//                         time: '10:30',
//                         disable: 1
//                     }, {
//                         time: '11:00',
//                         disable: 1
//                     }, {
//                         time: '11:30',
//                         disable: 1
//                     }, {
//                         time: '12:00',
//                         disable: 1
//                     }, {
//                         time: '12:30',
//                         disable: 1
//                     }, {
//                         time: '13:00',
//                         disable: 1
//                     }, {
//                         time: '13:30',
//                         disable: 1
//                     }, {
//                         time: '14:00',
//                         disable: 1
//                     }, {
//                         time: '14:30',
//                         disable: 1
//                     }, {
//                         time: '15:00',
//                         disable: 1
//                     }, {
//                         time: '15:30',
//                         disable: 1
//                     }, {
//                         time: '16:00',
//                         disable: 1
//                     }, {
//                         time: '16:30',
//                         disable: 1
//                     }, {
//                         time: '17:00',
//                         disable: 1
//                     }, {
//                         time: '17:30',
//                         disable: 1
//                     }, {
//                         time: '18:00',
//                         disable: 1
//                     }, {
//                         time: '18:30',
//                         disable: 1
//                     } ]
