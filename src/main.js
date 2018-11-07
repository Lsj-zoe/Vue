// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/style/module.css'
import { AlertPlugin, ToastPlugin } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})

/* 过滤器*/

/*时间戳转化为日期*/
Vue.filter('zhrq', function(value) {
	var date = new Date(value); /*时间戳为10位需*1000，时间戳为13位的话不需乘1000*/
	var Y = date.getFullYear() + '-';
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
	var h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()) + ':';
	var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':';
	var s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
	return Y + M + D + h + m + s;
})

/*时间对象过滤器*/
Vue.filter('Timedss', function(value) {
	var dateTime = function(dateArg, pattern) {
		var dateItems = ['time', 'year', 'month', 'date', 'hours', 'minutes', 'seconds'],
			i = 0,
			l = dateItems.length,
			subPattern,
			dateSetMethods = ['setYear', 'setMonth', 'setDate', 'setHours', 'setMinutes', 'setSeconds'],
			dateGetMethods = {
				yyyy: 'getFullYear',
				yy: 'getYear',
				MM: 'getLMonth',
				dd: 'getLDate',
				HH: 'getLHours',
				mm: 'getLMinutes',
				ss: 'getLSeconds'
			},
			date;
		/*这个地方可以优化下，先这样实现也差不多*/
		for (var i = 0; i < l && typeof dateArg === 'object'; i++) {
			if (i == 0 && dateArg[dateItems[i]]) {
				date = new Date(dateArg[dateItems[i]]);
				break;
			}
			(i != 0 && dateArg[dateItems[i]]) && (date = date || new Date, date[dateSetMethods[i - 1]].call(date, i == 1 &&
				dateArg[dateItems[i]].toString().length < 4 ? dateArg[dateItems[i]] + 1900 : dateArg[dateItems[i]]));
		}
		if (dateArg instanceof Date) date = dateArg;
		date = date || new Date(Number(dateArg));
		if (!date.getFullYear()) throw new Error("日期参数输入不正确!")
		if (!/yyyy|yy|MM|dd|HH|mm|ss/.test(pattern)) throw new Error("日期模式字符串格式不正确!");
		for (subPattern in dateGetMethods) {
			if (dateGetMethods[subPattern] == 'getYear') {
				date[dateGetMethods[subPattern]] = function() {
					return this.getFullYear().toString().replace(/\d{2}/, '');
				};
			} else if (~dateGetMethods[subPattern].indexOf('L')) {
				date[dateGetMethods[subPattern]] = ~dateGetMethods[subPattern].indexOf('Month') ? function() {
					var dateItem = this.getMonth();
					return dateItem + 1 < 10 ? '0' + (dateItem + 1) : dateItem;
				} : function() {
					var dateItem = this[dateGetMethods[subPattern].replace('L', '')]();
					return dateItem < 10 ? '0' + dateItem : dateItem;
				};
			}
			pattern = pattern.replace(new RegExp(subPattern, "g"), date[dateGetMethods[subPattern]].call(date));
		}
		return pattern;
	}
	return dateTime(Number(value), 'yyyy-MM-dd')
})
