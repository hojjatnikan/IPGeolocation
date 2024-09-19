class GeoLocation {
    constructor() {
        this.url = 'http://ip-api.com/json';
        this.data = {
            
				status: '',
				country: '',
				countryCode: '',
				region: '',
				regionName: '',
				city: '',
				zip: '',
				lat: '',
				lon: '',
				timezone: '',
				isp: '',
				org: '',
				as: '',
				query: ''
			
        };
    }

    get(key) {
        return this.data[key];
    }

    fetch(options = {}) {
        fetch(this.url)
            .then(response => response.json())
            .then(data => {
                this.data = data;
                if (options.success) options.success();
            })
            .catch(error => {
                if (options.error) options.error();
            });
    }

    toJSON() {
        return JSON.parse(JSON.stringify(this.data));
    }
}