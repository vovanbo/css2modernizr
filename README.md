# css2modernizr 
[![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-url]][daviddm-image] [![Coverage Status][coveralls-image]][coveralls-url]

Creates a Modernizr config file that requires only the tests that your CSS uses.


## Install

### As command line tool:

```bash
$ npm install -g css2modernizr
```

_If you haven't sufficient permissions may be you should use_ ```sudo```

### As node.js module for using in your project:

```bash
$ npm install --save css2modernizr
```


## Usage

### As command line tool:

```bash
$ css2modernizr /path/to/your/css/file.css
```

Or if you use Modernizr's prefixes in your css:

```bash
$ css2modernizr --prefix prfx- /path/to/your/css/file.css
```

Where ```prfx-``` is part in class name ```.prfx-no-flexbox``` or ```.prfx-rgba```

### As node.js module:

```javascript
var css2modernizr = require('css2modernizr');
var result = css2modernizr(css, prefix).usage();
```

### Example

Let's imagine we have the following CSS:

```css
.block {
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  z-index: 20;
  left: 50%;
  margin: 15px 0 0 0;
  padding: 20px 20px 15px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  backface-visibility: hidden;
  transform: translate(-50%, 0);
  visibility: hidden;
}

.no-boxshadow .block {
  border: 1px solid #bfbfbf;
  border-top: none;
  margin-top: 14px;
}

.no-rgba .block {
  background-color: white;
}

.no-csstransforms .block {
  left: 0;
}

.no-flexbox .block {
  display: block;
  z-index: 10;
}

.block__element {
  position: absolute;
  top: -10px;
  left: calc(50% - 10px);
  display: block;
  height: 0;
  width: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid white;
}

.no-csstransforms .block__element {
  left: 0;
}
```

If you run `css2modernizr` on this CSS, then result will be:

```bash
$ ./bin/css2modernizr test/example.css                                                                                                                                 develop [2deb29d] modified untracked

No prefix (e.g. .no-flexbox, .rgba)

┌───────────────┬─────────────────┐
│ Name          │ Count of usages │
├───────────────┼─────────────────┤
│ csstransforms │ 2               │
├───────────────┼─────────────────┤
│ flexbox       │ 1               │
├───────────────┼─────────────────┤
│ rgba          │ 1               │
├───────────────┼─────────────────┤
│ boxshadow     │ 1               │
└───────────────┴─────────────────┘

Download your Modernizr custom build by URL:
http://modernizr.com/download/#-boxshadow-csstransforms-domprefixes-flexbox-rgba-testallprops-testprop
```


## API

_(Coming soon)_


## Contributing


## Release History

### 0.1.0

- Fixed bug with `lastIndex` in regular expression.
- Update dependencies:
  - PostCSS to 5.0.12
  - lodash to 3.10.1
- Example is added to README.

### 0.0.X

- Initial releases, just CLI-tool, without main idea.


## License

Copyright © 2014—2015 Vladimir Bolshakov. Licensed under the MIT license.



[npm-url]: https://npmjs.org/package/css2modernizr
[npm-image]: https://badge.fury.io/js/css2modernizr.svg
[daviddm-url]: https://david-dm.org/vovanbo/css2modernizr.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/vovanbo/css2modernizr
[coveralls-url]: https://coveralls.io/r/vovanbo/css2modernizr
[coveralls-image]: https://coveralls.io/repos/vovanbo/css2modernizr/badge.png
