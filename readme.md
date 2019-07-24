# nano-fetch

> A tiny window.fetch-like promise-based AJAX implementation

It's based on `XMLHttpRequest` so refer to [its documentation](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) for the expected output. It defaults to JSON output and GET requests.

[![gzipped size](https://badges.herokuapp.com/size/github/fregante/nano-fetch/master/dist/nano-fetch.browser.js?gzip=true&label=gzipped%20size)](#readme)

## Usage

```js
nanoFetch('page.php').then(function (jsonResponse) {
	//...
}).catch(function (error) {
	//...
});
```

```js
nanoFetch('page.php', {
	responseType: 'document',
	method: 'POST'
}).then(function (documentElement) {
	//...
}).catch(function (error) {
	//...
});
```

## With browserify

```sh
npm install --save nano-fetch
```

```js
var nanoFetch = require('nano-fetch');
```

## API

### `nanoFetch(url[, options])`

- `url` is an absolute or relative URL
- `options` is an object with the properties:
  - [`responseType`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType)
  - [`method`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Parameters)

## Dependencies

None

## License

MIT © [Federico Brigante](https://bfred.it)
