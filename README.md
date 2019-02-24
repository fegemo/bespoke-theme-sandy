[![Build Status](https://secure.travis-ci.org/fegemo/bespoke-theme-sandy.png?branch=master)](https://travis-ci.org/fegemo/bespoke-theme-sandy)

# bespoke-theme-sandy

A cheerful theme for [Bespoke.js](http://markdalgleish.com/projects/bespoke.js)
inspired by a Google Presentations theme &mdash;
[View demo](http://fegemo.github.io/bespoke-theme-sandy)

## Download

Download the [production version][min] or the [development version][max],
or use a [package manager](#package-managers).

[min]: https://raw.github.com/fegemo/bespoke-theme-sandy/master/dist/bespoke-theme-sandy.min.js
[max]: https://raw.github.com/fegemo/bespoke-theme-sandy/master/dist/bespoke-theme-sandy.js

## Usage

This theme is shipped in a [UMD format](https://github.com/umdjs/umd),
meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  sandy = require('bespoke-theme-sandy');

bespoke.from('#presentation', [
  sandy()
]);
```

When using browser globals:

```js
bespoke.from('#presentation', [
  bespoke.themes.sandy()
]);
```

## Package managers

### npm

```bash
$ npm install bespoke-theme-sandy
```


## Credits

This theme was built with
[generator-bespoketheme](https://github.com/markdalgleish/generator-bespoketheme).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
