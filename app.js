var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('dist')).listen(80, function(){
    console.log('Server running on 80...');
});