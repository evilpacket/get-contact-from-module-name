var Code = require('code');   // assertion library
var Lab = require('lab');
var GetContacts = require('../');

var lab = exports.lab = Lab.script();
var expect = Code.expect;

lab.test('returns valid list of maintainers', function (done) {
    var contacts = new GetContacts();
    contacts.get('helmet', function (err, results) {
        expect(results.length).to.equal(2);
        done();
    });

});


lab.test('errors on unknown package', function (done) {
    var contacts = new GetContacts();
    contacts.get('helmet8675309', function (err) {
        expect(err).to.not.be.null();
        done();
    });
});

lab.test('passing options', function (done) {
    var contacts = new GetContacts({modules: 'registry'});

    contacts.get('helmet', function (err, results) {
        expect(results.length).to.equal(2);
        done();
    });
});
