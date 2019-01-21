const path = require('path');

const legacyBabelPresets = [
    [
        "@babel/preset-env",
        {
            modules: false,
            targets: '> 1%, ie 11'
        }
    ]
];

const modernBabelPresets = [
    [
        "@babel/preset-env",
        {
            modules: false,
            targets: 'Firefox >= 62, Edge >= 17, Chrome >= 69, iOS >= 11.4, ChromeAndroid >= 70'
        }
    ]
];

module.exports = {
    input: [
        'source/js/main.js'
    ],
    output: function(destPath, isModern = true) {
        return [
            {
                dir: isModern ? destPath : path.join(destPath, 'nomodule'),
                format: isModern ? "es" : "system"
            }
        ]
    },
    plugins: function(isModern = true) {
        return [
            require('rollup-plugin-replace')({
                ENVIRONMENT: () => JSON.stringify(process.env.NODE_ENV || 'development'),
                'process.env.NODE_ENV': () => JSON.stringify(process.env.NODE_ENV || 'development')
            }),
            require('rollup-plugin-babel')({
                include: ['source/js/**', 'node_modules/@degjs/**'],
                babelrc: false,
                presets: isModern ? modernBabelPresets : legacyBabelPresets,
                plugins: [
                    '@babel/plugin-syntax-dynamic-import',
                    "@babel/plugin-transform-react-jsx",
                    "@babel/plugin-proposal-class-properties"
                ]
            }),
            require('rollup-plugin-node-resolve')({
                browser: true
            }),
            require('rollup-plugin-commonjs')({
                include: 'node_modules/**',
                namedExports: {
					'node_modules/react/index.js': ['Component', 'PureComponent', 'Fragment', 'Children', 'createElement'],
                    'node_modules/react-dom/index.js': ['render'],
                    'node_modules/redux-logger/dist/redux-logger.js': ['createLogger']
				}
            })
        ]
    }
};