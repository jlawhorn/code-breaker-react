const path = require('path');

module.exports = {
    name: "images",
    plugins: [
        {
            name: "@deg-skeletor/plugin-copy",
            config: {
                directories: [{
                    src: 'source/images/{,!(icons|samples)/**/}*',
                    dest: path.resolve('../src/AWIWEB.Web/Content/AWIWEB/images/')
                }]
            }
        }
    ]
};