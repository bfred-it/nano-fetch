'use strict';
export default (url, {responseType, method}) => new Promise(function (resolve, reject) {
	const request = new XMLHttpRequest();
	request.open(method || 'GET', url, true);
	request.onerror = function (e) {
		reject(new Error(e));
	};
	request.onload = function () {
		if (request.status >= 200 && request.status < 400) {
			return resolve(request.response);
		}
		request.onerror(request.status);
	};
	request.responseType = responseType || 'json';
	request.send();
});
