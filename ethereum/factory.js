import web3 from './web3';
import Factory from './build/Factory.json';

const instance = new web3.eth.Contract(
	JSON.parse(Factory.interface),
	'0xcEEA4755eBe578f8b20A25aC83cA6541621D43c0'
);

export default instance;
