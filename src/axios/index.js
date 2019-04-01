import JSONP from 'jsonp';

export default class AXIOS {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JSONP(options.url, {
                params: 'callback'
            }, function (err, response) {
                if (response.status === 'success') {
                    resolve(response)
                } else {
                    reject(response);
                }
            })
        })
    }
}
