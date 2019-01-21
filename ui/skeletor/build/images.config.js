const path = require('path');

module.exports = {
    name: "images",
    plugins: [
        {
            name: "@deg-skeletor/plugin-copy",
            config: {
                directories: [{
                    src: 'source/images',
                    dest: path.resolve('patternlab/images')
                }]
            }
        }
    ]
};