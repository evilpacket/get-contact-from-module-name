var RegClient = require('silent-npm-registry-client');
var os = require('os');

var client = new RegClient({
  registry: 'http://registry.npmjs.org/',
  cache: os.tmpDir() + '/' + Math.random().toString(16).slice(2)
});

module.exports = function (module, callback) {
    client.get('/' + module, function (err, pkg) {
        if (err) {
            return callback(err);
        }
        if (pkg && pkg.maintainers) {
            return callback(null, pkg.maintainers);
        }
        return callback(null, []);
    });
};

