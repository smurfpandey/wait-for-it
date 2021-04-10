const expect = require('chai').expect;

const { isItUp } = require('../lib/wait-for-it');


describe('Test wait-for-it', () => {
    it('should return return status 0 for valid host', () => {
        const result = isItUp('www.google.com', 80, 5);
        
        expect(result).to.be.an('object');
        expect(result).to.have.property('status', 0);
        expect(result).to.have.property('message');
        expect(result.message).to.have.string('www.google.com:80 is available after');
        
    }).timeout(7000);

    it('should timeout for invalid port', (done) => {
        const result = isItUp('www.google.com', 88, 5);
        
        expect(result).to.be.an('object');
        expect(result).to.have.property('status', 0);
        expect(result).to.have.property('message');
        expect(result.message).to.have.string('timeout occurred after waiting 5 seconds for www.google.com:88');
        
        done();
    }).timeout(7000);   // set timeout of 7sec
});