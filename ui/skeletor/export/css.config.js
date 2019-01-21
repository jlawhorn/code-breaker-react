const path = require('path');
const { files, plugins } = require('../common/css.config.js');

module.exports = {
    name: "css",
    plugins: [
        {
            name: "@deg-skeletor/plugin-postcss",
            config: {
                files: [
                    ...files('../src/AWIWEB.Web/Content/AWIWEB/css/'),
                    {
                        "src": path.resolve("source/css/rte.css"),
                        "dest": path.resolve("../src/AWIWEB.Web/Content/AWIWEB/css/rte.css")
                    }
                ],
                plugins
            }
        }
    ]
};