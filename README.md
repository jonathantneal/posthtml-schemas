# Schemas

<a href="https://github.com/posthtml/posthtml"><img src="http://posthtml.github.io/posthtml/logo.svg" alt="PostHTML Logo" width="80" height="80" align="right"></a>

[![NPM Version][npm-img]][npm] [![Build Status][ci-img]][ci]

[Schemas] makes it super easy to write [schema.org] microdata without extra cruft. Search engine operators like Google, Microsoft and Yahoo! will rely on this markup to improve search results.

```html
<!-- BEFORE -->
<div itemtype="Product">
	<span itemprop="brand">ACME</span> <span itemprop="name">Executive Anvil</span>
		<img itemprop="image" src="anvil_executive.jpg">

		<span itemprop="aggregateRating" itemtype="AggregateRating">
		Average rating: <span itemprop="ratingValue">4.4</span>, based on
		<span itemprop="ratingCount">89</span> reviews
	</span>

	<span itemprop="offers" itemtype="AggregateOffer">
		from $<span itemprop="lowPrice">119.99</span> to
		$<span itemprop="highPrice">199.99</span>
		<meta itemprop="priceCurrency" content="USD">
	</span>
</div>

<!-- AFTER -->
<div itemtype="http://schema.org/Product" itemscope>
	<span itemprop="brand">ACME</span> <span itemprop="name">Executive Anvil</span>
		<img itemprop="image" src="anvil_executive.jpg">

		<span itemprop="aggregateRating" itemtype="http://schema.org/AggregateRating" itemscope>
		Average rating: <span itemprop="ratingValue">4.4</span>, based on
		<span itemprop="ratingCount">89</span> reviews
	</span>

	<span itemprop="offers" itemtype="http://schema.org/AggregateOffer" itemscope>
		from $<span itemprop="lowPrice">119.99</span> to
		$<span itemprop="highPrice">199.99</span>
		<meta itemprop="priceCurrency" content="USD">
	</span>
</div>
```

## Features

**Schemas** makes the `itemscope` property totally optional. This is because the [microdata spec] says `itemtype` must **not** be specified on elements that do not **also** have an `itemscope` attribute.

**Schemas** makes the `http://schema.org/` prefix totally optional. This is because all major search engines now [recognize] this common data vocabulary.

## Usage

Add [Schemas] to your build tool:

```bash
npm install posthtml-schemas --save-dev
```

#### Node

```js
require('posthtml-schemas').process(YOUR_HTML, { /* options */ });
```

#### PostHTML

Add [PostHTML] to your build tool:

```bash
npm install posthtml --save-dev
```

Load [Schemas] as a PostHTML plugin:

```js
posthtml([
	require('posthtml-schemas')({ /* options */ })
]).process(YOUR_HTML, /* options */);
```

#### Gulp

Add [Gulp PostHTML] to your build tool:

```bash
npm install gulp-posthtml --save-dev
```

Enable [Schemas] within your Gulpfile:

```js
var posthtml = require('gulp-posthtml');

gulp.task('html', function () {
	return gulp.src('./src/*.html').pipe(
		posthtml([
			require('posthtml-schemas')({ /* options */ })
		])
	).pipe(
		gulp.dest('.')
	);
});
```

#### Grunt

Add [Grunt PostHTML] to your build tool:

```bash
npm install grunt-posthtml --save-dev
```

Enable [Schemas] within your Gruntfile:

```js
grunt.loadNpmTasks('grunt-posthtml');

grunt.initConfig({
	posthtml: {
		options: {
			use: [
				require('posthtml-schemas')({ /* options */ })
			]
		},
		dist: {
			src: '*.html'
		}
	}
});
```

## Options

#### `url`

Type: `Object|String`  
Default: `"http://schema.org/"`

Specifies the URL used to prefix your microdata vocabulary (`itemtype`). You may also pass in an object of individual URLs for each vocabulary.

[ci]:      https://travis-ci.org/jonathantneal/posthtml-schemas
[ci-img]:  https://img.shields.io/travis/jonathantneal/posthtml-schemas.svg
[npm]:     https://www.npmjs.com/package/posthtml-schemas
[npm-img]: https://img.shields.io/npm/v/posthtml-schemas.svg

[schema.org]: https://schema.org/
[microdata spec]: https://html.spec.whatwg.org/multipage/microdata.html#items
[recognize]: http://schema.org/docs/schemas.html

[Gulp PostHTML]:  https://github.com/posthtml/gulp-posthtml
[Grunt PostHTML]: https://github.com/TCotton/grunt-posthtml
[PostHTML]:       https://github.com/posthtml/posthtml

[Schemas]: https://github.com/jonathantneal/posthtml-schemas
