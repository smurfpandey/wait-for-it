const expect = require('chai').expect;

const { isItUp } = require('../lib/wait-for-it');


describe('Test wait-for-it', () => {
    it('should return return status 0 for valid host', () => {
        const result = isItUp('www.google.com', 80, 5);
        
        expect(result).to.be.an('object');
        expect(result).to.have.property('status', 0);
        expect(result).to.have.property('message');

        console.log(result.message);
    });

    it('should return return status 127 for invalid port', (done) => {
        const result = isItUp('www.google.com', 88, 5);
        
        expect(result).to.be.an('object');
        expect(result).to.have.property('status');
        expect(result.status).to.be.above(0);
        expect(result).to.have.property('message');

        console.log(result.message);

        done();
    })
});