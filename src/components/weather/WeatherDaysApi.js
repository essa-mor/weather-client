import mem from 'mem';

export function customFetch(url) {
	return fetch(url).then(response => response.json());
}

export function getMemCustomFetch(func, maxAge) {
	return mem(func, { maxAge });
}
const maxAge = 10 * 60 * 1000;
const memCustomFetch = getMemCustomFetch(customFetch, maxAge);

export function getWeatherDays() {
	return memCustomFetch('https://api.openweathermap.org/data/2.5/forecast/?q=Haifa,il&units=metric&APPID=8c6cf469699d615e37361375f85fb917')
		.then(data => getDailyWeather(data));
}

export function getWeatherDay(dt) {
	return memCustomFetch('https://api.openweathermap.org/data/2.5/forecast/?q=Haifa,il&units=metric&APPID=8c6cf469699d615e37361375f85fb917')
		.then(data => extractDayWeather(data, dt));
}

export function extractDayWeather(data, dt) {
	const result = [];
	const { list } = data;
	const firstIndex = list.findIndex(r => r.dt >= dt);
	for (let i = firstIndex; i < list.length && result.length < 8; i++) {
		const { dt_txt, dt } = list[i];
		const { temp } = list[i].main;
		result.push({ dt, dt_txt, temp });
	}
	return result;
}

export function getDailyWeather(data) {
	const result = [];
	const { list } = data;
	let currDtTxt = null;
	for (let i = 0; i < list.length; i++) {
		const { dt_txt, dt } = list[i];
		const { temp_max, temp_min } = list[i].main;
		const { icon } = list[i].weather[0];
		if (currDtTxt !== dt_txt.split(' ')[0]) {
			result.push({ dt, day: dt_txt, maxTemperature: temp_max, minTemperature: temp_min, img: icon });
			currDtTxt = dt_txt.split(' ')[0];
		}
	}
	return result;
}