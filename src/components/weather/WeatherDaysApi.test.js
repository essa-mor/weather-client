import { getMemCustomFetch } from './WeatherDaysApi';

const expiration = 1000;
const testFunc = jest.fn();
describe('WeatherDaysApi test', () => {
	beforeEach(()=>{
		jest.clearAllMocks();
	});

	it('WeatherDaysApi works properly', done => {
		const memCustomFetch = getMemCustomFetch(testFunc, expiration);
		memCustomFetch('1');
		expect(testFunc).toHaveBeenCalledTimes(1);
		memCustomFetch('2');
		expect(testFunc).toHaveBeenCalledTimes(2);
		memCustomFetch('1');
		expect(testFunc).toHaveBeenCalledTimes(2);
		setTimeout(() => {
			memCustomFetch('1');
			try {
				expect(testFunc).toHaveBeenCalledTimes(3);
			} catch (e) {
				done.fail(e);
			}
			done();
		}, expiration);
	});

	it('WeatherDaysApi works properly - async/await', async () => {
		const memCustomFetch = getMemCustomFetch(testFunc, expiration);
		memCustomFetch('1');
		expect(testFunc).toHaveBeenCalledTimes(1);
		memCustomFetch('2');
		expect(testFunc).toHaveBeenCalledTimes(2);
		memCustomFetch('1');
		expect(testFunc).toHaveBeenCalledTimes(2);
		const promise = new Promise(resolve => setTimeout(() => resolve(), expiration));
		await promise;
		memCustomFetch('1');
		expect(testFunc).toHaveBeenCalledTimes(3);
	});
});