var server = require('../lib/main');


var babelCompileOptions = JSON.parse(require('fs').readFileSync('./.babelrc').toString());
server.start({
    port: 4000,
    babel: {
        include: [/test\/test\.js$/],
        compileOptions: babelCompileOptions
    }
});
