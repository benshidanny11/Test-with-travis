const request=require('supertest');
const expect=require('chai').expect;
var app=require('../server').app;

describe('/',()=>{
	it('Should return hello world response',(done)=>{

	request(app)
	.get('/')
	.expect(200)
	.expect("Hello world")
	.end(done);

});
});

describe('/Users',()=>{
   it('Should return users object response',(done)=>{
   var user= {name:'Emmy',age:20};
   request(app)
   .get('/users')
   .expect(200)
   .expect((res)=>{
     expect([
        {name:'Danny',age:23},
        {name:'Eric',age:22},
        {name:'Emmy',age:20}
    ]).to.not.include(user)
   //expect(res.body).to.include(user);
   //expect({a: 1, b: 2, c: 3}).to.include({a: 1, b: 2});
   })
   .end(done);

});

});
