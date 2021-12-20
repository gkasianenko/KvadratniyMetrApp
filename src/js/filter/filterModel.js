export default class Filter {
	constructor() {}

	async getParams() {
		try {
			const queryString = 'http://jsproject.webcademy.ru/itemsinfo';
			const response = await fetch(queryString);
			const data = await response.json();
			this.params = await data;
		} catch (error) {
            alert(error);
        }
	}

	async getResults(){
		try {
			const queryString = 'http://jsproject.webcademy.ru/items';
			const response = await fetch(queryString);
			const data = await response.json();
			this.result = await data;
			console.log('Filter -> getResults -> this.result', this.result);
		} catch (error) {
            alert(error);
		}
	}
}
