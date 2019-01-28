/**
 * 保持代码整洁优雅，享受编程
 * @author lgzhang08@gmail.com
 * 时间 日期 转换处理
 */
class DateConvert {
	
	/**
	 *
	 * @param value  时间戳
	 * @returns {*} 返回 昨天 今天 前天... 
	 */
	toDay (value) {
		// 值更新时的工作
	// 也会以初始值为参数调用一次
	// 判断获取到的新值与原来的值是否一致，避免冗余加载
	if(!value) return
	//		console.log(value)
	let valueFormat;
	if(/-/.test(value)){
		valueFormat = value.replace(/-/gi, "/")
	}else{
		valueFormat = value
	}
	let createDate = new Date(valueFormat)
	if(createDate == 'Invalid Date') return
	let currentDate = new Date()
	let createDateTimestamp = createDate.getTime()

	var nextDayDate = new Date(valueFormat); //更新时间第二天的日期
	nextDayDate.setDate(nextDayDate.getDate() + 1);
	var difftime1 = parseInt((new Date(Date.parse(this.formatTime(nextDayDate, "yyyy/MM/dd 00:00:00"))) - createDate) / 1000); //更新时间跟第二天零点的时间差，单位：秒
	var difftime2 = parseInt((currentDate.getTime() - createDateTimestamp) / 1000); //获得两个时间的时间差（秒），当前时间-最新更新时间
	if(difftime2 < difftime1) {
		createDate = "今天 " + this.formatTime(valueFormat, "HH:mm");
	} else if(difftime2 < (difftime1 + 3600 * 24)) {
		createDate = "昨天 " + this.formatTime(valueFormat, "HH:mm");
	} else if(difftime2 < (difftime1 + 3600 * 24 * 2)) {
		createDate = "前天" + this.formatTime(valueFormat, "HH:mm");
	} else if(createDate.getFullYear() == currentDate.getFullYear()) {
		createDate = this.formatTime(valueFormat, "MM月dd日 HH:mm");
	} else {
		createDate = this.formatTime(valueFormat, "yyyy年MM月dd日 HH:mm");
	}
	return createDate
	}
	
	//时间格式化显示
	formatTime(time, format) {
		let datetime = new Date(time);
		if(datetime == 'Invalid Date') return
		//	let datetime = new Date(toDateTime(time))
		//	console.log(datetime+"aa")
		let year = datetime.getFullYear();
		let month = datetime.getMonth();
		let date = datetime.getDate();
		let hour = datetime.getHours();
		let minute = datetime.getMinutes();
		let second = datetime.getSeconds();
		
		if(/yyyy/.test(format)) {
			format = format.replace(/yyyy/, year);
		}
		if(/MM/.test(format)) {
			if((month + 1) < 10) {
				format = format.replace(/MM/, '0' + (month + 1));
			} else {
				format = format.replace(/MM/, (month + 1));
			}
		}
		if(/dd/.test(format)) {
			if(date < 10) {
				format = format.replace(/dd/, '0' + date);
			} else {
				format = format.replace(/dd/, date);
			}
		}
		if(/HH/.test(format)) {
			if(hour < 10) {
				format = format.replace(/HH/, '0' + hour);
			} else {
				format = format.replace(/HH/, hour);
			}
		}
		if(/mm/.test(format)) {
			if(minute < 10) {
				format = format.replace(/mm/, '0' + minute);
			} else {
				format = format.replace(/mm/, minute);
			}
		}
		if(/ss/.test(format)) {
			if(second < 10) {
				format = format.replace(/ss/, '0' + second);
			} else {
				format = format.replace(/ss/, second);
			}
		}
		return format;
	}
	// 只显示显示月日
	onlyToMonthDay (value) {
		// 判断获取到的新值与原来的值是否一致，避免冗余加载
		if(!value) return
		function toDateTime(dateStr){
			if(dateStr>1){
				return dateStr
			}
			return Date.parse(dateStr.replace(/-/gi,"/"));
		}
		let createDate = new Date(toDateTime(value))
		if(createDate == 'Invalid Date') return
		let currentDate = new Date()
		let createDateTimestamp = createDate.getTime()
		var nextDayDate = new Date(toDateTime(value)); //更新时间第二天的日期
		nextDayDate.setDate(nextDayDate.getDate() + 1);
		var difftime1 = parseInt((new Date(toDateTime(this.formatTime(nextDayDate, "yyyy-MM-dd 00:00:00"))) - createDate) / 1000); //更新时间跟第二天零点的时间差，单位：秒
		
		var difftime2 = parseInt((currentDate.getTime() - createDateTimestamp) / 1000); //获得两个时间的时间差（秒），当前时间-最新更新时间
		
		value = toDateTime(value)
		
		if(difftime2 < difftime1) {
			createDate = "今天";
		} else if(difftime2 < (difftime1 + 3600 * 24)) {
			createDate = "昨天";
		} else if(difftime2 < (difftime1 + 3600 * 24 * 2)) {
			createDate = "前天";
		} else if(createDate.getFullYear() == currentDate.getFullYear()) {
			createDate = this.formatTime(value, "MM月dd日");
		} else {
			createDate = this.formatTime(value, "yyyy年MM月dd日");
		}
		
		return createDate
	}
}


export default new DateConvert()


