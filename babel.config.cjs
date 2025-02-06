/* eslint-env node */
/* eslint-disable no-undef */
module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			// Make sure to add this plugin last
			'@babel/plugin-proposal-export-namespace-from',
			'react-native-reanimated/plugin'
		]
	};
};
