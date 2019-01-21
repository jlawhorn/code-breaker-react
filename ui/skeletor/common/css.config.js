const path = require('path');

module.exports = {
    files: destPath => [
        {
            src: path.resolve('source/css/global.css'),
            dest: path.join(destPath, 'global.css')
        }
    ],
    plugins: [
        require('postcss-easy-import'),
        require('postcss-custom-properties')({preserve: false}),
        require('postcss-custom-selectors'),
        require('postcss-custom-media'),
        require('postcss-color-function'),
        require('postcss-nested'),
        require('autoprefixer'),
        require('cssnano')
    ]
};