const path = require('path');

module.exports = {
    context: __dirname,
    entry: "./lib/main.js",
    output: {
        path: path.join(__dirname, "lib"),
        filename: "bundle.js"
    }
}