var Registry = require('npm-stats');
var _ = require('lodash');

var Contacts = function (config) {
    this.defaults = {
        url: 'https://skimdb.npmjs.com/'
    };

    _.defaults(this.defaults, config);
    
    this.registry = Registry(this.defaults.url, this.defaults.options);
};

Contacts.prototype.get = function (module, callback) {
    this.registry.module(module).info(function (err, pkg) {
        if (err) {
            return callback(err);
        }
        if (pkg && pkg.maintainers) {
            return callback(null, pkg.maintainers);
        }
        return callback(null, []);
    });
};


module.exports = Contacts;
