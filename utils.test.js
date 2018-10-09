const utils=require('./utils');
const expect=require('expect');


describe('utils',()=>{
it("should add two numbers",()=>{
	var result=utils.add(5,6);
	
	expect(result).toBe(11).toBeA('number');
	//if(result!==11){
	//throw new Error('expected 11 but got'+result);
	//}
});

it("should square the number",()=>{
	var result=utils.square(5);
	//if(result!==25){
	//	throw new Error ('expected 25 but got '+result);
	//}
	expect(result).toNotBe(20);
});

it("should do asynchronous square",(done)=>{
	utils.AsyncSqr(5,(sqr)=>{
	expect(sqr).toBe(25);
		done();
	});
});

//it("should expect some value",()=>{
	//expect({name:"sathish"}).toEqual({name:"sathish"});
	//expect([2,3,5]).toInclude(2);
	//expect([2,3,5]).toExclude(1);
	//});
	
	
	it("should add firstName and lastName",()=>{
		var user={
		location:"vanji",
		age:"22"
	};
	var res=utils.setName(user,"sathish m");
	expect(user).toInclude({firstName:"sathish",
	lastName:"m"
	});
	});	
	
});
