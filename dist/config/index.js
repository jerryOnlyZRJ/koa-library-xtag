'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = _interopDefault(require('path'));

const config = {
	api: 'http://192.168.64.2/yiiapi',
	staticResPath: path.join(__dirname, '../assets'),
	viewPath: path.join(__dirname, '../views'),
	port: 3000
};

module.exports = config;
