# css2modernizr 
[![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-url]][daviddm-image] [![Coverage Status][coveralls-image]][coveralls-url]

Analyze your CSS and output only used Modernizr's settings


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

## API

_(Coming soon)_


## Contributing


## Release History

### 0.0.X
* Initial releases, just CLI-tool, without main idea.


## License

Copyright (c) 2014 Vladimir Bolshakov. Licensed under the MIT license.



[npm-url]: https://npmjs.org/package/css2modernizr
[npm-image]: https://badge.fury.io/js/css2modernizr.svg
[daviddm-url]: https://david-dm.org/vovanbo/css2modernizr.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/vovanbo/css2modernizr
[coveralls-url]: https://coveralls.io/r/vovanbo/css2modernizr
[coveralls-image]: https://coveralls.io/repos/vovanbo/css2modernizr/badge.png
