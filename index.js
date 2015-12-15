var posthtml = require('posthtml');

module.exports = function (options) {
	var url = options && options.url || 'http://schema.org/';

	return function Schemas(tree) {
		tree.walk(function (node) {
			var itemtype = typeof node.attrs === 'object' && node.attrs.itemtype;

			if (itemtype) {
				if (!node.attrs.itemscope) {
					node.attrs.itemscope = '';
				}

				var prefix   = typeof url === 'string' ? url : url[itemtype] || '';

				node.attrs.itemtype = itemtype.replace(/^\w+$/, prefix + '$&');
			}

			return node;
		});
	};
};

module.exports.process = function (contents, options) {
	return posthtml().use(module.exports(options)).process(contents);
};
