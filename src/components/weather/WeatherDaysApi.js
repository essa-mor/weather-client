export function getWeatherDays() {
	return fetch('https://api.openweathermap.org/data/2.5/forecast/?q=Haifa,il&units=metric&APPID=8c6cf469699d615e37361375f85fb917')
		.then(response => response.json())
		.then(data => getDailyWeather(data));
}

export function getDailyWeather(data) {
	const result = [];
	const { list } = data;
	for (let i = 0; i < list.length; i += 8) {
		const { dt_txt } = list[i];
		const { temp_max, temp_min } = list[i].main;
		const { icon } = list[i].weather[0];
		result.push({ day: dt_txt, maxTemperature: temp_max, minTemperature: temp_min, img: icon });
	}
	return result;
}
