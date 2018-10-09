const request=require('supertest');
const expect=require('expect');

var app=require('./server').app;

describe('server',()=>{
it("should return welcome to homepage",(done)=>{
request(app)
	.get('/')
	//.expect('welcome to homepage')
	.expect('Content-Type', /json/)
	.end(done);
});

it("should return user",(done)=>{
	request(app)
	.get('/user')
	.expect((res)=>{
		expect(res.body).toInclude({name:"sathish",
		age:"22"
		});
	})
	.end(done);
});	
	
});

