const expect=require('chai').expect;

const utils=require('./utils');
it('Should add two numbers',()=>{
   var result=utils.add(23,50);
   //expect(result).to.be(73).to.be.a('number');
   expect(result).to.equal(73).to.be.a('number');
   

  /* if (res!=73) {
      throw new Error(`Expected: 73 found: ${res}`);
   }*/



});

/*it('Should return a square of a number',()=>{
var res=utils.square(5);
if (res!==25) {
	 throw new Error(`Expected: 25 found: ${res}`);
}
});*/

/*it('Should return full name',()=>{
	
	var user={address:'Karama',age:23};
  var res=utils.getName(user,'Danny Benshi');
  expect(res).toInclude({
  	firstName:'Danny',
  	lastName: 'Benshi'
  })
});*/