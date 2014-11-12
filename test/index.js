var Code = require('code');   // assertion library
var Lab = require('lab');
var getEmail = require('../');

var lab = exports.lab = Lab.script();
var expect = Code.expect;

lab.test('returns valid list of maintainers', function (done) {
    getEmail('helmet', function (err, results) {
        expect(results.length).to.equal(2);
        done();
    });

});


lab.test('errors on unknown package', function (done) {
    getEmail('helmet8675309', function (err, results) {
        expect(err).to.not.be.null();
        done();
    });
});
