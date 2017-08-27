'use strict';
export default (url, {responseType, method}) => new Promise(function (resolve, reject) {
	const request = new XMLHttpRequest();
	request.open(method || 'GET', url, true);
	request.responseType = responseType || 'json';
	request.onerror = reject;
	request.onload = function () {
		if (request.status >= 200 && request.status < 400) {
			return resolve(request.response);
		}
		reject(request.status);
	};
	request.send();
});
