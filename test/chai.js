// const assert = require('assert'),
//   chai = require('chai'),
//   expect = chai.expect;


// describe('using chai expect', ()=>{
//   before(()=>{
//     console.log('-----------before----------------');
//     x = 2;
//     obj = {
//       name: 'foo',
//       age: 5,
//       success: true
//     };
//   });
//   it('should compare some values', ()=>{
//     expect(x).to.equal(2);
//   });
//   it('should test name property in object', ()=>{
//     expect(obj).to.have.property('name');
//     expect(obj).to.have.property('success').to.be.true;
//     expect(obj).to.have.property('age').to.be.a('number');
//   });
// });